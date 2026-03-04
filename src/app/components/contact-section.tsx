import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/atharv-salvi/" },
  { name: "Instagram", href: "https://www.instagram.com/atharvvsalvi/" },
  { name: "Twitter / X", href: "https://x.com/atharvsalvihere" },
  { name: "GitHub", href: "https://github.com/atharvsalvi" },
];

export function ContactSection() {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-32 border-t border-white/10">
      <div className="max-w-4xl">
        <p
          className="text-white/40 mb-3"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
        >
          Get in Touch
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.7 }}
          className="text-white mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1 }}
        >
          Let's build something great together.
        </motion.h2>
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=atharv.salvi22@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-block text-white/50 hover:text-white transition-colors mb-16"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}
        >
          atharv.salvi22@gmail.com
        </motion.a>
      </div>

      {/* Socials & Footer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 pt-16 border-t border-white/10">
        <div className="flex flex-wrap gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/40 hover:text-white transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
            >
              {social.name}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ))}
        </div>
        <p className="text-white/20" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem" }}>
          &copy; 2026 Atharv Salvi
        </p>
      </div>
    </section>
  );
}
