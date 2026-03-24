"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon, Icons } from "@/components/ui/Icon";

// ---------------------------------------------------------------------------
// Timing (ms)
// ---------------------------------------------------------------------------

const DURATIONS = [3000, 3000, 3000, 3500, 6000, 5500];
const TOTAL = DURATIONS.reduce((a, b) => a + b, 0);

// ---------------------------------------------------------------------------
// Easing
// ---------------------------------------------------------------------------

const ease = [0.25, 0.1, 0.25, 1] as const;
const decel = [0, 0, 0.2, 1] as const;

// ---------------------------------------------------------------------------
// Scenes
// ---------------------------------------------------------------------------

function S1() {
  return (
    <motion.div className="relative flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.14, scale: 1 }}
        transition={{ duration: 1.4, ease: decel }}
        className="absolute h-[260px] w-[460px] rounded-full bg-[#2dd4bf] blur-[110px]"
      />
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease }}
        className="relative text-[2.75rem] md:text-[3.5rem] font-bold leading-[1.06] tracking-[-0.045em] text-white"
      >
        Most websites never
        <br />
        get real traffic
      </motion.h1>
    </motion.div>
  );
}

function S2() {
  return (
    <motion.div className="flex flex-col items-center justify-center text-center space-y-2">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="text-[1.375rem] md:text-[1.75rem] font-medium text-white/50"
      >
        You publish content...
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease }}
        className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.08] tracking-[-0.035em] text-white"
      >
        ...but nothing ranks
      </motion.p>
    </motion.div>
  );
}

function S3() {
  return (
    <motion.div className="flex flex-col items-center justify-center text-center">
      <motion.h2
        initial={{ opacity: 0, filter: "blur(14px)", scale: 1.04 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1.1, ease }}
        className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.06] tracking-[-0.045em] text-white"
      >
        SEO should not be
        <br />
        this hard
      </motion.h2>
    </motion.div>
  );
}

function S4() {
  return (
    <motion.div className="flex flex-col items-center justify-center text-center space-y-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: decel }}
        className="flex items-center gap-3"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d9488] to-[#2dd4bf] shadow-[0_4px_28px_-4px_rgba(13,148,136,0.45)]">
          <span className="text-[26px] font-bold text-white">R</span>
        </div>
        <span className="text-[2rem] md:text-[2.5rem] font-bold tracking-[-0.03em] text-[#0f172a]">
          RankSEO
        </span>
      </motion.div>
      <motion.div className="flex flex-wrap justify-center gap-x-[0.35em]">
        {"Make your website a traffic engine".split(" ").map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 + i * 0.07, ease }}
            className="text-[1.25rem] md:text-[1.625rem] font-medium text-[#64748b]"
          >
            {w}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

function S5() {
  const steps = [
    { icon: "🔗", label: "Connect Google Search Console" },
    { icon: "🔍", label: "Discover keyword opportunities" },
    { icon: "✍️", label: "Generate SEO content" },
    { icon: "🚀", label: "Publish automatically" },
    { icon: "📈", label: "Track performance" },
  ];

  return (
    <motion.div className="flex items-center gap-8 w-full max-w-[920px]">
      <div className="flex-1 space-y-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: i * 0.55, ease: decel }}
            className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
          >
            <span className="text-[1rem]">{s.icon}</span>
            <span className="text-[0.875rem] font-medium text-[#0f172a]">{s.label}</span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i * 0.55 + 0.3, ease: decel }}
              className="ml-auto text-[#0d9488]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </motion.span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 36, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0, ease: decel }}
        className="hidden md:block w-[320px] shrink-0"
      >
        <div className="rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_4px_28px_-6px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-medium text-[#94a3b8]">SEO Performance</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {[{ l: "Impressions", v: "142.8K" }, { l: "Clicks", v: "8,412" }, { l: "Growth", v: "+24%", g: true }].map((m, i) => (
              <motion.div
                key={m.l}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 1.8 + i * 0.15, ease }}
                className="rounded-md bg-[#f8fafc] px-2 py-1.5"
              >
                <p className="text-[7px] font-bold uppercase tracking-wide text-[#94a3b8]">{m.l}</p>
                <p className={`text-[13px] font-bold ${m.g ? "text-[#059669]" : "text-[#0f172a]"}`}>{m.v}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex items-end gap-[5px] h-[72px]">
            {[28, 40, 35, 50, 58, 68, 86].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.55, delay: 2.2 + i * 0.1, ease: decel }}
                className="flex-1 rounded-t-[3px]"
                style={{
                  background: i >= 4 ? "linear-gradient(to top, #0d9488, #2dd4bf)" : "#e2e8f0",
                  opacity: i >= 4 ? 0.55 + i * 0.1 : 0.35,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function S6() {
  return (
    <motion.div className="relative flex flex-col items-center justify-center text-center space-y-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: decel }}
        className="absolute h-[280px] w-[480px] rounded-full bg-[#2dd4bf] blur-[100px] -z-10"
      />
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#0f172a]"
      >
        Grow your traffic
        <br />
        on autopilot
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65, ease }}
        className="text-[1rem] md:text-[1.125rem] text-[#64748b] max-w-[380px]"
      >
        AI-powered SEO that helps your website grow itself
      </motion.p>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3, ease }}
        className="text-[1.125rem] font-semibold text-[#0d9488] pt-1"
      >
        rankseoengine.com
      </motion.span>
    </motion.div>
  );
}

const SCENES = [S1, S2, S3, S4, S5, S6];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function LaunchVideo() {
  const [idx, setIdx] = useState(-1);

  // Auto-start
  useEffect(() => {
    const t = setTimeout(() => setIdx(0), 500);
    return () => clearTimeout(t);
  }, []);

  // Advance scenes, hold on last
  useEffect(() => {
    if (idx < 0 || idx >= DURATIONS.length - 1) return;
    const t = setTimeout(() => setIdx(idx + 1), DURATIONS[idx]);
    return () => clearTimeout(t);
  }, [idx]);

  const dark = idx >= 0 && idx <= 2;
  const Comp = idx >= 0 && idx < SCENES.length ? SCENES[idx] : null;

  let elapsed = 0;
  for (let i = 0; i < idx && i < DURATIONS.length; i++) elapsed += DURATIONS[i];
  const pct = idx >= 0 ? Math.min((elapsed / TOTAL) * 100, 100) : 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#050505]">
      {/* 16:9 frame */}
      <div
        className="relative overflow-hidden rounded-sm"
        style={{
          width: "min(100vw, 177.78vh)",
          height: "min(100vh, 56.25vw)",
          maxWidth: "1280px",
          maxHeight: "720px",
        }}
      >
        {/* Download button */}
        <a
          href="/launch-video.mp4"
          download="rankseo-launch.mp4"
          className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-lg bg-white/10 backdrop-blur-sm px-3 py-2 text-[12px] font-medium text-white/70 transition-all hover:bg-white/20 hover:text-white"
        >
          <Icon icon={Icons.download} size="sm" />
          Download
        </a>

        {/* BG */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundColor: dark ? "#0f172a" : "#fafafa" }}
          transition={{ duration: 0.8, ease }}
        />

        {/* Dot grid */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: dark ? 0.05 : 0.1 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `radial-gradient(circle, ${dark ? "#94a3b8" : "#cbd5e1"} 1px, transparent 1px)`,
            backgroundSize: "26px 26px",
          }}
        />

        {/* Scene */}
        <AnimatePresence mode="wait">
          {Comp && (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease }}
              className="absolute inset-0 z-10 flex items-center justify-center px-10"
            >
              <Comp />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/[0.04]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0d9488] to-[#2dd4bf]"
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
