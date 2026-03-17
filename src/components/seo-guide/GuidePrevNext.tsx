interface NavLink {
  title: string;
  href: string;
}

export function GuidePrevNext({
  prev,
  next,
}: {
  prev: NavLink | null;
  next: NavLink | null;
}) {
  return (
    <div className="mt-16 grid gap-4 border-t border-border-light pt-8 md:grid-cols-2">
      {prev ? (
        <a
          href={prev.href}
          className="group flex items-center gap-3 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
        >
          <svg className="h-4 w-4 shrink-0 text-muted-light transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Previous</p>
            <p className="text-[14px] font-semibold text-foreground">{prev.title}</p>
          </div>
        </a>
      ) : (
        <div />
      )}
      {next ? (
        <a
          href={next.href}
          className="group flex items-center justify-end gap-3 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 text-right"
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Next</p>
            <p className="text-[14px] font-semibold text-foreground">{next.title}</p>
          </div>
          <svg className="h-4 w-4 shrink-0 text-muted-light transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      ) : (
        <div />
      )}
    </div>
  );
}
