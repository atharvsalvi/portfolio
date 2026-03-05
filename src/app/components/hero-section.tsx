import { ArrowUpRight } from "lucide-react";
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
    <section className="relative min-h-[60vh] md:min-h-screen flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-8 md:py-12 overflow-hidden">
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
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", fontWeight: 600 }}
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
            href="https://drive.google.com/file/d/1I85wJDocW3Ex6ezLSDtP3j8HoG2D3sU1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white/80 hover:bg-white/10 hover:text-white transition-all bg-[#0a0a0a]"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem" }}
          >
            View Resume
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* Large name at the bottom */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-auto pb-4 md:pb-8 w-full"
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
    </section>
  );
}