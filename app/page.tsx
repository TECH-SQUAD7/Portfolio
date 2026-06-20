import About from "@/components/About";
import Experience from "@/components/Experience";
import FloatingBackground from "@/components/FloatingBackground";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Quotes from "@/components/Quotes";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9ff] text-ink">
      <FloatingBackground />
      <Navigation />
      <div className="relative mx-auto flex w-full max-w-[1680px] flex-col gap-5 px-4 pb-6 pt-4 md:px-6 lg:pl-28">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Quotes />
        <Footer />
      </div>
    </main>
  );
}
