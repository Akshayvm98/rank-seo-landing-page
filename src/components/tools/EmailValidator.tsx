"use client";

import { useState } from "react";
import { Icon, Icons } from "@/components/ui/Icon";
import { ToolHero } from "./ToolHero";
import { ToolResultCard } from "./ToolResultCard";
import { ToolFAQ } from "./ToolFAQ";
import { ToolError } from "./ToolError";
import { ToolLoading } from "./ToolLoading";
import { ToolRelated } from "./ToolRelated";
import { ToolGuides } from "./ToolGuides";
import { ToolContextCTA } from "./ToolContextCTA";
import { GateModal } from "./GateModal";
import { SignupPrompt } from "./SignupPrompt";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import type { GateDecision } from "@/lib/tools/types";
import type { EmailValidationResult, EmailStatus, Confidence } from "@/lib/tools/email-validation";

const TOOL_ID = "email-validator";

// ---------------------------------------------------------------------------
// Status styling
// ---------------------------------------------------------------------------

const STATUS_CONFIG: Record<EmailStatus, {
  bg: string; border: string; text: string; badge: string;
  icon: typeof Icons[keyof typeof Icons];
  meaning: string;
}> = {
  valid: {
    bg: "bg-emerald-50/40", border: "border-emerald-200", text: "text-emerald-700",
    badge: "bg-emerald-100 text-emerald-700",
    icon: Icons.checkCircle,
    meaning: "This email appears deliverable based on the checks we could perform. The format, domain, and mail server all look correct.",
  },
  invalid: {
    bg: "bg-red-50/40", border: "border-red-200", text: "text-red-700",
    badge: "bg-red-100 text-red-700",
    icon: Icons.alertCircle,
    meaning: "This email cannot receive messages. The address is malformed, the domain does not exist, or no mail server is configured.",
  },
  risky: {
    bg: "bg-amber-50/40", border: "border-amber-200", text: "text-amber-700",
    badge: "bg-amber-100 text-amber-700",
    icon: Icons.alertTriangle,
    meaning: "This email may be valid, but some signals are mixed or incomplete. Proceed with caution if deliverability is important.",
  },
  disposable: {
    bg: "bg-violet-50/40", border: "border-violet-200", text: "text-violet-700",
    badge: "bg-violet-100 text-violet-700",
    icon: Icons.alertTriangle,
    meaning: "This email uses a temporary or disposable email service. The inbox may expire and stop receiving messages.",
  },
  "role-based": {
    bg: "bg-blue-50/40", border: "border-blue-200", text: "text-blue-700",
    badge: "bg-blue-100 text-blue-700",
    icon: Icons.info,
    meaning: "This email goes to a shared inbox (like info@ or support@) rather than a specific person. It may work but is often lower quality for outreach.",
  },
  unverifiable: {
    bg: "bg-gray-50/60", border: "border-gray-200", text: "text-gray-700",
    badge: "bg-gray-100 text-gray-700",
    icon: Icons.info,
    meaning: "The email looks structurally valid, but the provider prevents full mailbox verification. We cannot confirm whether the inbox exists.",
  },
};

const CONFIDENCE_STYLES: Record<Confidence, string> = {
  high: "bg-emerald-100 text-emerald-700",
  medium: "bg-blue-100 text-blue-700",
  low: "bg-amber-100 text-amber-700",
};

// ---------------------------------------------------------------------------
// Check row component
// ---------------------------------------------------------------------------

function CheckRow({ label, value, status }: {
  label: string;
  value: string;
  status: "pass" | "fail" | "warn" | "info";
}) {
  const icons = { pass: Icons.checkCircle, fail: Icons.alertCircle, warn: Icons.alertTriangle, info: Icons.info };
  const colors = { pass: "text-emerald-500", fail: "text-red-500", warn: "text-amber-500", info: "text-blue-500" };

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-border-light/50 last:border-0">
      <Icon icon={icons[status]} size="sm" className={`shrink-0 ${colors[status]}`} />
      <span className="text-[13px] text-muted w-36 shrink-0">{label}</span>
      <span className="text-[13px] font-medium text-foreground">{value}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function EmailValidator() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<EmailValidationResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleValidate() {
    const trimmed = email.trim();
    if (!trimmed) return;
    if (!trimmed.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID });

    try {
      const res = await fetch("/api/tools/email-validator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();

      if (!data.success) {
        if (res.status === 429) { setGate(data.gate); setShowGateModal(true); return; }
        throw new Error(data.error || "Validation failed");
      }

      setResult(data.data);
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, status: data.data.status });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const config = result ? STATUS_CONFIG[result.status] : null;

  return (
    <>
      <ToolHero
        badge="Free Tool"
        title="Email Validator"
        subtitle="Check whether an email address looks valid, risky, disposable, role-based, or unverifiable. Honest results with transparent checks."
      />

      {/* Input */}
      <section className="py-2">
        <div className="mx-auto max-w-[680px] px-6">
          <form
            onSubmit={(e) => { e.preventDefault(); handleValidate(); }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Icon icon={Icons.mail} size="sm" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
                className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-4 text-[14px] text-foreground placeholder:text-muted-light outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_0_4px_rgba(13,148,136,0.06)]"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Checking...
                </>
              ) : (
                <>
                  <Icon icon={Icons.search} size="sm" />
                  Validate
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {loading && <ToolLoading message="Checking email syntax, domain, and mail server..." />}

      {error && <ToolError message={error} onRetry={handleValidate} />}

      {result && config && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[780px] px-6">

            {/* ── Status badge + summary ── */}
            <div className={`rounded-2xl border p-6 ${config.bg} ${config.border} mb-8`}>
              <div className="flex items-start gap-4">
                <Icon icon={config.icon} size="lg" className={`shrink-0 mt-0.5 ${config.text}`} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${config.badge}`}>
                      {result.status}
                    </span>
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${CONFIDENCE_STYLES[result.confidence]}`}>
                      {result.confidence} confidence
                    </span>
                  </div>
                  <p className={`text-[15px] font-medium leading-[1.6] ${config.text}`}>
                    {result.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Email analyzed ── */}
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Email checked</p>
              <p className="mt-1 text-[16px] font-bold text-foreground font-mono">{result.normalized}</p>
            </div>

            {/* ── Quick stats ── */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 mb-8">
              <ToolResultCard
                label="Syntax"
                value={result.checks.syntaxValid ? "Valid" : "Invalid"}
                status={result.checks.syntaxValid ? "good" : "error"}
              />
              <ToolResultCard
                label="Domain"
                value={result.checks.domainExists ? "Found" : "Not found"}
                status={result.checks.domainExists ? "good" : "error"}
              />
              <ToolResultCard
                label="Mail server"
                value={result.checks.mxFound ? "Found" : "None"}
                status={result.checks.mxFound ? "good" : "error"}
              />
              <ToolResultCard
                label="Disposable"
                value={result.checks.disposable ? "Yes" : "No"}
                status={result.checks.disposable ? "warning" : "good"}
              />
            </div>

            {/* ── Detailed checks ── */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">Detailed checks</p>
              <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <CheckRow label="Syntax" value={result.checks.syntaxValid ? "Valid format" : "Invalid format"} status={result.checks.syntaxValid ? "pass" : "fail"} />
                <CheckRow label="Domain" value={result.checks.domainExists ? result.checks.domain : `${result.checks.domain} (not found)`} status={result.checks.domainExists ? "pass" : "fail"} />
                <CheckRow label="Mail server (MX)" value={result.checks.mxFound ? `${result.checks.mxRecords.length} record${result.checks.mxRecords.length !== 1 ? "s" : ""} found` : "No MX records"} status={result.checks.mxFound ? "pass" : "fail"} />
                <CheckRow label="Disposable" value={result.checks.disposable ? "Temporary email service" : "Not disposable"} status={result.checks.disposable ? "warn" : "pass"} />
                <CheckRow label="Role-based" value={result.checks.roleBased ? `Yes (${result.checks.localPart}@)` : "No"} status={result.checks.roleBased ? "info" : "pass"} />
                <CheckRow label="Provider" value={result.checks.provider ?? "Unknown"} status="info" />
                {result.checks.typoSuggestion && (
                  <CheckRow label="Possible typo" value={`Did you mean ${result.checks.localPart}@${result.checks.typoSuggestion}?`} status="warn" />
                )}
                <CheckRow label="Mailbox check" value={result.checks.mailboxVerificationPossible ? "Possible (not attempted)" : "Not possible for this provider"} status={result.checks.mailboxVerificationPossible ? "info" : "warn"} />
              </div>
            </div>

            {/* ── Recommendation ── */}
            <div className="mb-8 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-accent mb-2">Recommendation</p>
              <p className="text-[13px] leading-[1.65] text-foreground">{result.recommendation}</p>
            </div>

            {/* ── What this means ── */}
            <div className="mb-8 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-2">What this means</p>
              <p className="text-[13px] leading-[1.65] text-muted">{config.meaning}</p>
            </div>

            {/* ── Notes ── */}
            {result.checks.notes.length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">Notes</p>
                <div className="space-y-1.5">
                  {result.checks.notes.map((note, i) => (
                    <p key={i} className="flex items-start gap-2 text-[13px] text-muted leading-[1.6]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-light" />
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* ── Why it matters ── */}
            <div className="rounded-xl border border-border-light bg-surface p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">Why email quality matters</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Deliverability", desc: "Invalid emails bounce and hurt your sender reputation." },
                  { label: "Lead quality", desc: "Disposable and role-based emails often indicate low-intent contacts." },
                  { label: "Bounce rate", desc: "High bounce rates can trigger spam filters and block future sends." },
                  { label: "Cleaner signups", desc: "Validating at signup prevents fake accounts and wasted effort." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <Icon icon={Icons.check} size="sm" className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <p className="text-[13px] font-semibold text-foreground">{item.label}</p>
                      <p className="text-[12px] text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <ToolGuides toolId={TOOL_ID} />
      <ToolRelated currentToolId={TOOL_ID} />
      <ToolContextCTA toolId={TOOL_ID} />

      <ToolFAQ faqs={[
        { question: "What does email validation check?", answer: "This tool checks the email format (syntax), whether the domain exists, whether the domain has mail servers (MX records), whether it is a disposable or temporary email service, whether it is a role-based address like info@ or support@, and which email provider it uses. It does not send a test email." },
        { question: "Can you verify Gmail or Outlook addresses?", answer: "Gmail, Outlook, Yahoo, and other major providers restrict mailbox-level verification. We can confirm the format and domain are valid, but cannot confirm whether a specific inbox exists on these providers. Results for these will show as Unverifiable with a clear explanation." },
        { question: "What is a disposable email?", answer: "A disposable email is a temporary address from services like Mailinator or Guerrilla Mail. These addresses are created to avoid follow-ups and often expire quickly. They are technically deliverable but usually indicate a low-quality contact." },
        { question: "Why is an email marked risky?", answer: "An email is marked Risky when some checks pass but others are ambiguous. This can happen when the domain looks like a typo, the provider has catch-all behavior, or verification signals are mixed. It means the email might work but you should not rely on it without confirmation." },
        { question: "What is a role-based email?", answer: "A role-based email goes to a shared inbox rather than a specific person. Examples include info@, support@, admin@, and sales@. These addresses are often valid but less effective for personal outreach because they are read by a team, not an individual." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
