import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState(100);

  const fitText = useCallback(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const containerWidth = container.getBoundingClientRect().width;

    // Reset font size to measure properly
    text.style.display = "inline-block";

    // Binary search for the right font size
    let low = 10;
    let high = 500;

    while (high - low > 0.5) {
      const mid = (low + high) / 2;
      text.style.fontSize = `${mid}px`;
      // getBoundingClientRect gives sub-pixel accurate rendered width
      const textWidth = text.getBoundingClientRect().width;
      if (textWidth > containerWidth) {
        high = mid;
      } else {
        low = mid;
      }
    }

    setFontSize(Math.floor(low));
  }, []);

  useEffect(() => {
    // Wait for fonts to load before fitting text, otherwise
    // the calculation uses fallback font metrics and overflows
    // once the custom font (Betania Patmos) loads.
    document.fonts.ready.then(() => {
      fitText();
    });

    // Also re-fit if fonts load after initial render
    document.fonts.addEventListener("loadingdone", fitText);
    window.addEventListener("resize", fitText);
    return () => {
      document.fonts.removeEventListener("loadingdone", fitText);
      window.removeEventListener("resize", fitText);
    };
  }, [fitText]);

  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 pt-8 md:pt-12 pb-4 md:pb-6 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-start justify-between w-full">
        {/* Left side: Blog button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/blog"
            className="flex items-center gap-2 pl-2 pr-5 py-2 rounded-full border border-black/10 text-black hover:bg-white/90 transition-all bg-white shadow-lg"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700 }}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden border border-black/10 flex-shrink-0">
              <img src={`${import.meta.env.BASE_URL}blog-icon.jpg`} alt="Blog Icon" className="w-full h-full object-cover" />
            </div>
            Blog
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Right side */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* View Resume button */}
          <motion.a
            href="https://drive.google.com/file/d/1MPtIq47qHjr4PU6F-d6BbNeS9iTimJN1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white/80 hover:bg-white/10 hover:text-white transition-all bg-[#0a0a0a]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}
          >
            View Resume
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      <div className="mt-auto pt-20 sm:pt-28">
        {/* Introduction and a direct route to the work */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-14">
          <p
            className="max-w-[28ch] text-white/70 text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Building backend systems<br className="hidden sm:block" /> and AI-powered tools.
          </p>
          <a
            href="#projects"
            className="group inline-flex min-h-11 items-center gap-3 self-start sm:self-auto rounded-sm text-white/70 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}
          >
            <span className="border-b border-white/25 pb-1 group-hover:border-white/70 transition-colors">Explore my work</span>
            <ArrowDown aria-hidden="true" className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-y-1" />
          </a>
        </div>

        {/* Large name at the bottom */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full"
        >
          <h1
            ref={textRef}
            className="text-white leading-[0.9] tracking-tight whitespace-nowrap"
            style={{
              fontFamily: "'Betania Patmos', serif",
              fontSize: `${fontSize}px`,
              fontWeight: 400,
            }}
          >
            Atharv Salvi
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
