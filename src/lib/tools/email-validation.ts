// ---------------------------------------------------------------------------
// Email validation utilities
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type EmailStatus = "valid" | "invalid" | "risky" | "disposable" | "role-based" | "unverifiable";
export type Confidence = "high" | "medium" | "low";

export interface EmailChecks {
  syntaxValid: boolean;
  localPart: string;
  domain: string;
  domainExists: boolean;
  mxFound: boolean;
  mxRecords: string[];
  disposable: boolean;
  roleBased: boolean;
  provider: string | null;
  typoSuggestion: string | null;
  smtpAttempted: boolean;
  smtpResult: string | null;
  catchAllLikely: boolean;
  mailboxVerificationPossible: boolean;
  notes: string[];
}

export interface EmailValidationResult {
  input: string;
  normalized: string;
  status: EmailStatus;
  confidence: Confidence;
  summary: string;
  recommendation: string;
  checks: EmailChecks;
}

// ---------------------------------------------------------------------------
// Syntax validation
// ---------------------------------------------------------------------------

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function validateSyntax(email: string): boolean {
  if (!email || email.length > 254) return false;
  if (!EMAIL_REGEX.test(email)) return false;
  const [localPart] = email.split("@");
  if (!localPart || localPart.length > 64) return false;
  return true;
}

// ---------------------------------------------------------------------------
// Disposable domain list (top ~120)
// ---------------------------------------------------------------------------

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "tempmail.com",
  "throwaway.email", "temp-mail.org", "fakeinbox.com", "sharklasers.com",
  "guerrillamailblock.com", "grr.la", "dispostable.com", "yopmail.com",
  "trashmail.com", "trashmail.net", "trashmail.me", "mailnesia.com",
  "maildrop.cc", "discard.email", "mailcatch.com", "tempr.email",
  "tempail.com", "mohmal.com", "burnermail.io", "mailnull.com",
  "getnada.com", "emailondeck.com", "33mail.com", "spamgourmet.com",
  "mintemail.com", "mytemp.email", "harakirimail.com", "jetable.org",
  "mailexpire.com", "tempinbox.com", "10minutemail.com", "10minutemail.net",
  "binkmail.com", "bobmail.info", "chammy.info", "devnullmail.com",
  "dodgeit.com", "dodgit.com", "dontreg.com", "e4ward.com",
  "emailigo.de", "emailsensei.com", "emailtemporario.com.br",
  "ephemail.net", "filzmail.com", "fixmail.tk", "flurred.com",
  "frapmail.com", "getairmail.com", "getonemail.com", "getonemail.net",
  "girlsundertheinfluence.com", "gishpuppy.com", "great-host.in",
  "gsrv.co.uk", "haltospam.com", "hotpop.com", "ichimail.com",
  "imails.info", "inboxalias.com", "incognitomail.org",
  "instantemailaddress.com", "jetable.com", "kasmail.com", "koszmail.pl",
  "kurzepost.de", "lifebyfood.com", "lookugly.com", "lr78.com",
  "maileater.com", "mailforspam.com", "mailin8r.com", "mailinator.net",
  "mailinator2.com", "mailincubator.com", "mailme.ir", "mailme.lv",
  "mailmetrash.com", "mailmoat.com", "mailshell.com", "mailsiphon.com",
  "mailzilla.com", "mbx.cc", "mega.zik.dj", "meltmail.com",
  "messagebeamer.de", "mezimages.net", "mfsa.ru", "mt2015.com",
  "mytempemail.com", "nepwk.com", "nobulk.com", "noclickemail.com",
  "nogmailspam.info", "nomail.xl.cx", "nomail2me.com", "nospam.ze.tc",
  "nothingtoseehere.ca", "nowmymail.com", "objectmail.com",
  "obobbo.com", "odnorazovoe.ru", "oneoffemail.com", "onewaymail.com",
  "otherinbox.com", "ourklips.com", "owlpic.com", "pjjkp.com",
  "proxymail.eu", "punkass.com", "putthisinyouremail.com",
  "reallymymail.com", "recode.me", "recursor.net", "regbypass.com",
  "safetymail.info", "sharklasers.com", "shieldedmail.com",
  "skeefmail.com", "slaskpost.se", "slipry.net", "spambob.com",
  "spambob.net", "spambob.org", "spambox.us", "spamcero.com",
  "spamday.com", "spamfree24.com", "spamfree24.de", "spamfree24.eu",
  "spamfree24.info", "spamfree24.net", "spamfree24.org", "guerrillamail.info",
  "guerrillamail.biz", "guerrillamail.de", "guerrillamailblock.com",
]);

export function isDisposable(domain: string): boolean {
  return DISPOSABLE_DOMAINS.has(domain.toLowerCase());
}

// ---------------------------------------------------------------------------
// Role-based detection
// ---------------------------------------------------------------------------

const ROLE_PREFIXES = new Set([
  "admin", "administrator", "support", "info", "contact", "hello",
  "sales", "jobs", "team", "hr", "billing", "abuse", "postmaster",
  "webmaster", "noreply", "no-reply", "marketing", "press", "media",
  "office", "help", "feedback", "enquiries", "inquiries", "careers",
]);

export function isRoleBased(localPart: string): boolean {
  return ROLE_PREFIXES.has(localPart.toLowerCase());
}

// ---------------------------------------------------------------------------
// Provider detection
// ---------------------------------------------------------------------------

const KNOWN_PROVIDERS: Record<string, string> = {
  "gmail.com": "Gmail",
  "googlemail.com": "Gmail",
  "outlook.com": "Outlook",
  "hotmail.com": "Outlook",
  "hotmail.co.uk": "Outlook",
  "live.com": "Outlook",
  "msn.com": "Outlook",
  "yahoo.com": "Yahoo",
  "yahoo.co.uk": "Yahoo",
  "yahoo.co.in": "Yahoo",
  "ymail.com": "Yahoo",
  "icloud.com": "iCloud",
  "me.com": "iCloud",
  "mac.com": "iCloud",
  "proton.me": "Proton Mail",
  "protonmail.com": "Proton Mail",
  "pm.me": "Proton Mail",
  "aol.com": "AOL",
  "zoho.com": "Zoho",
  "fastmail.com": "Fastmail",
  "tutanota.com": "Tuta",
  "tuta.io": "Tuta",
};

const PROTECTED_PROVIDERS = new Set(["Gmail", "Outlook", "Yahoo", "iCloud", "Proton Mail", "AOL"]);

export function detectProvider(domain: string): string | null {
  return KNOWN_PROVIDERS[domain.toLowerCase()] ?? null;
}

export function isProtectedProvider(provider: string | null): boolean {
  return provider !== null && PROTECTED_PROVIDERS.has(provider);
}

// ---------------------------------------------------------------------------
// Typo suggestion
// ---------------------------------------------------------------------------

const COMMON_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gmil.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmail.cm": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.om": "gmail.com",
  "gnail.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "outlool.com": "outlook.com",
  "outlook.co": "outlook.com",
  "outlook.cm": "outlook.com",
  "hotmal.com": "hotmail.com",
  "hotnail.com": "hotmail.com",
  "hotmil.com": "hotmail.com",
  "hotmail.co": "hotmail.com",
  "hotmail.cm": "hotmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yahoo.co": "yahoo.com",
  "yahoo.cm": "yahoo.com",
  "iclod.com": "icloud.com",
  "icoud.com": "icloud.com",
  "icloud.co": "icloud.com",
};

export function suggestTypoFix(domain: string): string | null {
  return COMMON_TYPOS[domain.toLowerCase()] ?? null;
}

// ---------------------------------------------------------------------------
// DNS + MX check
// ---------------------------------------------------------------------------

export async function checkDomain(domain: string): Promise<{ exists: boolean; mxFound: boolean; mxRecords: string[] }> {
  try {
    // Use DNS over HTTPS (Cloudflare) to check MX records
    const mxRes = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`, {
      headers: { Accept: "application/dns-json" },
      signal: AbortSignal.timeout(5000),
    });

    if (!mxRes.ok) {
      // Fallback: check if domain resolves at all via A record
      const aRes = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=A`, {
        headers: { Accept: "application/dns-json" },
        signal: AbortSignal.timeout(5000),
      });
      if (!aRes.ok) return { exists: false, mxFound: false, mxRecords: [] };
      const aData = await aRes.json();
      const hasA = aData.Answer && aData.Answer.length > 0;
      return { exists: hasA, mxFound: false, mxRecords: [] };
    }

    const mxData = await mxRes.json();
    const mxAnswers = (mxData.Answer ?? []).filter((r: { type: number }) => r.type === 15);
    const mxRecords = mxAnswers.map((r: { data: string }) => r.data?.split(" ").pop()?.replace(/\.$/, "") ?? "").filter(Boolean);

    if (mxRecords.length > 0) {
      return { exists: true, mxFound: true, mxRecords };
    }

    // No MX, check A record as fallback
    const aRes2 = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=A`, {
      headers: { Accept: "application/dns-json" },
      signal: AbortSignal.timeout(5000),
    });
    const aData2 = aRes2.ok ? await aRes2.json() : { Answer: [] };
    const hasA = (aData2.Answer ?? []).length > 0;

    return { exists: hasA, mxFound: false, mxRecords: [] };
  } catch {
    return { exists: false, mxFound: false, mxRecords: [] };
  }
}

// ---------------------------------------------------------------------------
// Full validation pipeline
// ---------------------------------------------------------------------------

export async function validateEmail(email: string): Promise<EmailValidationResult> {
  const input = email.trim();
  const normalized = input.toLowerCase();
  const notes: string[] = [];

  // 1. Syntax
  if (!validateSyntax(normalized)) {
    return {
      input, normalized, status: "invalid", confidence: "high",
      summary: "This email address is not formatted correctly.",
      recommendation: "Check the email for typos or missing characters. A valid email needs a local part, @ symbol, and domain.",
      checks: {
        syntaxValid: false, localPart: "", domain: "", domainExists: false,
        mxFound: false, mxRecords: [], disposable: false, roleBased: false,
        provider: null, typoSuggestion: null, smtpAttempted: false,
        smtpResult: null, catchAllLikely: false,
        mailboxVerificationPossible: false, notes: ["Syntax validation failed"],
      },
    };
  }

  // 2. Extract parts
  const atIndex = normalized.lastIndexOf("@");
  const localPart = normalized.slice(0, atIndex);
  const domain = normalized.slice(atIndex + 1);

  // 3. Typo check
  const typoSuggestion = suggestTypoFix(domain);
  if (typoSuggestion) {
    notes.push(`Domain looks like a typo. Did you mean ${typoSuggestion}?`);
  }

  // 4. Domain + MX
  const dns = await checkDomain(domain);

  if (!dns.exists) {
    return {
      input, normalized, status: "invalid", confidence: "high",
      summary: "The domain does not exist or cannot be reached.",
      recommendation: typoSuggestion
        ? `This domain does not exist. Did you mean ${localPart}@${typoSuggestion}?`
        : "Verify the domain is spelled correctly. This domain could not be found.",
      checks: {
        syntaxValid: true, localPart, domain, domainExists: false,
        mxFound: false, mxRecords: [], disposable: false, roleBased: false,
        provider: detectProvider(domain), typoSuggestion, smtpAttempted: false,
        smtpResult: null, catchAllLikely: false,
        mailboxVerificationPossible: false, notes,
      },
    };
  }

  if (!dns.mxFound) {
    notes.push("No mail server (MX) records found for this domain.");
    return {
      input, normalized, status: "invalid", confidence: "high",
      summary: "The domain exists but has no mail server configured.",
      recommendation: "This domain does not appear to accept email. Verify the address with the recipient.",
      checks: {
        syntaxValid: true, localPart, domain, domainExists: true,
        mxFound: false, mxRecords: [], disposable: false,
        roleBased: isRoleBased(localPart), provider: detectProvider(domain),
        typoSuggestion, smtpAttempted: false, smtpResult: null,
        catchAllLikely: false, mailboxVerificationPossible: false, notes,
      },
    };
  }

  // 5. Disposable
  const disposable = isDisposable(domain);
  if (disposable) {
    notes.push("This domain is associated with a temporary email service.");
    return {
      input, normalized, status: "disposable", confidence: "high",
      summary: "This email uses a disposable or temporary email service.",
      recommendation: "Disposable emails are often used to avoid follow-ups. If deliverability matters, request a permanent address.",
      checks: {
        syntaxValid: true, localPart, domain, domainExists: true,
        mxFound: true, mxRecords: dns.mxRecords, disposable: true,
        roleBased: isRoleBased(localPart), provider: null,
        typoSuggestion, smtpAttempted: false, smtpResult: null,
        catchAllLikely: false, mailboxVerificationPossible: false, notes,
      },
    };
  }

  // 6. Role-based
  const roleBased = isRoleBased(localPart);
  if (roleBased) notes.push("This appears to be a shared or role-based inbox.");

  // 7. Provider
  const provider = detectProvider(domain);
  const protectedProvider = isProtectedProvider(provider);

  // 8. Classification
  const mailboxVerificationPossible = !protectedProvider;
  const catchAllLikely = false; // Would require SMTP probing

  if (protectedProvider) {
    notes.push(`${provider} restricts mailbox-level verification. Inbox existence cannot be confirmed.`);

    if (roleBased) {
      return {
        input, normalized, status: "role-based", confidence: "medium",
        summary: `This is a role-based address on ${provider}. The inbox likely exists but is shared.`,
        recommendation: "Role-based addresses often go to shared inboxes. For direct outreach, try to find a personal address.",
        checks: {
          syntaxValid: true, localPart, domain, domainExists: true,
          mxFound: true, mxRecords: dns.mxRecords, disposable: false,
          roleBased: true, provider, typoSuggestion, smtpAttempted: false,
          smtpResult: null, catchAllLikely, mailboxVerificationPossible: false, notes,
        },
      };
    }

    return {
      input, normalized, status: "unverifiable", confidence: "low",
      summary: `The email looks structurally valid, but ${provider} prevents full mailbox verification.`,
      recommendation: "The format and domain check out, but we cannot confirm the inbox exists. Use caution if deliverability is critical.",
      checks: {
        syntaxValid: true, localPart, domain, domainExists: true,
        mxFound: true, mxRecords: dns.mxRecords, disposable: false,
        roleBased: false, provider, typoSuggestion, smtpAttempted: false,
        smtpResult: null, catchAllLikely, mailboxVerificationPossible: false, notes,
      },
    };
  }

  // Non-protected domain
  if (roleBased) {
    return {
      input, normalized, status: "role-based", confidence: "medium",
      summary: "This is a role-based address. It likely works but goes to a shared inbox.",
      recommendation: "Role-based addresses are often valid but may not reach a specific person. For direct outreach, look for an individual address.",
      checks: {
        syntaxValid: true, localPart, domain, domainExists: true,
        mxFound: true, mxRecords: dns.mxRecords, disposable: false,
        roleBased: true, provider, typoSuggestion, smtpAttempted: false,
        smtpResult: null, catchAllLikely, mailboxVerificationPossible, notes,
      },
    };
  }

  // Typo suggestion present means risky
  if (typoSuggestion) {
    return {
      input, normalized, status: "risky", confidence: "low",
      summary: "The domain looks like it might contain a typo.",
      recommendation: `Double-check the domain. Did you mean ${localPart}@${typoSuggestion}?`,
      checks: {
        syntaxValid: true, localPart, domain, domainExists: true,
        mxFound: true, mxRecords: dns.mxRecords, disposable: false,
        roleBased: false, provider, typoSuggestion, smtpAttempted: false,
        smtpResult: null, catchAllLikely, mailboxVerificationPossible, notes,
      },
    };
  }

  // Valid: syntax good, domain good, MX good, not disposable, not role-based, not protected
  notes.push("All basic checks passed.");
  return {
    input, normalized, status: "valid", confidence: "medium",
    summary: "This email appears valid based on the checks we could perform.",
    recommendation: "The format, domain, and mail server all check out. For critical sends, consider a test email to confirm deliverability.",
    checks: {
      syntaxValid: true, localPart, domain, domainExists: true,
      mxFound: true, mxRecords: dns.mxRecords, disposable: false,
      roleBased: false, provider, typoSuggestion: null, smtpAttempted: false,
      smtpResult: null, catchAllLikely, mailboxVerificationPossible, notes,
    },
  };
}
