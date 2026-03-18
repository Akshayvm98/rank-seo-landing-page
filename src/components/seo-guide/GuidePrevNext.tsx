import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <div className="mt-10 grid gap-4 pt-6 md:grid-cols-2">
      {prev ? (
        <a
          href={prev.href}
          className="group flex items-center gap-3 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-muted-light transition-transform duration-200 group-hover:-translate-x-0.5" />
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
          <ArrowRight className="h-4 w-4 shrink-0 text-muted-light transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      ) : (
        <div />
      )}
    </div>
  );
}
