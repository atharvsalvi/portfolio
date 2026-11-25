import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { BlogPage } from "./components/blog-page";
import { ArrowUp } from "lucide-react";
import { CustomCursor } from "./components/custom-cursor";

import Lenis from "lenis";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";

function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      anchors: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !reduceMotion,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let frame: number;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    // Scroll local section links without adding fragments to the address/history.
    const handleSectionLink = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;
      event.preventDefault();
      if (window.location.hash) {
        window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
      }
      lenis.scrollTo(target, {
        duration: 1.2,
        immediate: Boolean(reduceMotion),
        onComplete: () => {
          const previousTabIndex = target.getAttribute("tabindex");
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          if (previousTabIndex === null) target.removeAttribute("tabindex");
          else target.setAttribute("tabindex", previousTabIndex);
        },
      });
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleSectionLink);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleSectionLink);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen cursor-none" style={{ fontFamily: "'Inter', sans-serif" }}>
      <CustomCursor />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />

      {/* Scroll to top */}
      <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
    </MotionConfig>
  );
}
