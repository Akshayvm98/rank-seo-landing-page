import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GuideSidebar } from "./GuideSidebar";
import { GuideTOC } from "./GuideTOC";
import { GuideBreadcrumb } from "./GuideBreadcrumb";
import { GuidePrevNext } from "./GuidePrevNext";
import { GuideMobileNav } from "./GuideMobileNav";
import { getPrevNext } from "@/lib/guide";

export function GuideLayout({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  const { prev, next } = getPrevNext(pathname);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1360px] px-6 pt-24 pb-8 md:pt-28">
        <div className="grid lg:grid-cols-[220px_1fr_200px] lg:gap-10">
          {/* Left sidebar — desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <GuideSidebar currentPath={pathname} />
            </div>
          </aside>

          {/* Main content */}
          <div className="min-w-0">
            <GuideBreadcrumb pathname={pathname} />
            <GuideMobileNav currentPath={pathname} />
            <main>{children}</main>
            <GuidePrevNext prev={prev} next={next} />
          </div>

          {/* Right TOC — desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <GuideTOC />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
