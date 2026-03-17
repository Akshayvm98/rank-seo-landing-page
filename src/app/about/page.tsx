import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Rank SEO",
  description:
    "How Rank SEO turns search data into traffic. Meet the founder and learn about the product philosophy behind intelligent SEO automation.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
