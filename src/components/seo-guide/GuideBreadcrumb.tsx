import { getBreadcrumbs } from "@/lib/guide";
import { ChevronRight } from "lucide-react";

export function GuideBreadcrumb({ pathname }: { pathname: string }) {
  const crumbs = getBreadcrumbs(pathname);

  return (
    <nav className="mb-6 flex items-center gap-1.5 text-[13px]" aria-label="Breadcrumb">
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight className="h-3 w-3 text-muted-light" />
            )}
            {isLast ? (
              <span className="font-medium text-foreground">{crumb.label}</span>
            ) : (
              <a href={crumb.href} className="text-muted-light transition-colors hover:text-foreground">
                {crumb.label}
              </a>
            )}
          </span>
        );
      })}
    </nav>
  );
}
