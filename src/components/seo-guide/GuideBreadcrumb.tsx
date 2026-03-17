export function GuideBreadcrumb({ pageTitle }: { pageTitle: string }) {
  return (
    <nav className="mb-6 flex items-center gap-1.5 text-[13px]" aria-label="Breadcrumb">
      <a href="/seo-guide/keyword-research" className="text-muted-light transition-colors hover:text-foreground">
        SEO Guide
      </a>
      <svg className="h-3 w-3 text-muted-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      <span className="font-medium text-foreground">{pageTitle}</span>
    </nav>
  );
}
