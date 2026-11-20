import { ArrowUpRight } from "lucide-react";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/atharv-salvi/" },
  { name: "Instagram", href: "https://www.instagram.com/atharvvsalvi/" },
  { name: "Twitter / X", href: "https://x.com/atharvsalvihere" },
  { name: "GitHub", href: "https://github.com/atharvsalvi" },
];
const linkClass = "group font-mono text-[0.85rem] leading-relaxed flex min-h-11 w-fit items-center gap-2 text-white/70 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
const labelStyle = { fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: "0.12em" };

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="min-h-svh flex flex-col px-6 sm:px-10 md:px-16 lg:px-20 py-8 md:py-12">
      <div className="pb-12 md:pb-16">
        <h2 id="contact-heading" className="m-0 max-w-[22ch] text-white" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.5rem, 6.5vw, 7rem)", fontWeight: 500, lineHeight: 1.06, letterSpacing: "-0.055em" }}>
          Have a project or opportunity in mind?
        </h2>
        <p className="mt-6 font-mono text-white/70 text-sm sm:text-base leading-relaxed">I’d love to hear what you’re working on.</p>
        <p className="mt-4 text-white/50" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Based in Mumbai, India</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-[auto_auto_auto] w-full max-w-4xl gap-x-8 md:gap-x-16 gap-y-10 mt-auto pt-8 md:pt-10 pb-10 text-sm sm:text-base">
        <nav aria-label="Footer navigation">
          <h3 className="text-white mb-4" style={labelStyle}>[EXPLORE]</h3>
          <a href="#projects" className={linkClass}>Work</a>
          <a href="#about" className={linkClass}>About &amp; Experience</a>
        </nav>
        <nav aria-label="Social links">
          <h3 className="text-white mb-4" style={labelStyle}>[SOCIALS]</h3>
          {socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {social.name}<ArrowUpRight aria-hidden="true" className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
          ))}
        </nav>
        <div className="col-span-2 md:col-span-1 min-w-0">
          <h3 className="text-white mb-4" style={labelStyle}>[CONTACT]</h3>
          <a href="mailto:atharv.salvi22@gmail.com" className={`${linkClass} break-all`}>atharv.salvi22@gmail.com</a>
        </div>
      </div>
      <footer className="pt-6 flex flex-wrap items-center justify-between gap-4 text-white/40" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
        <p>&copy; {new Date().getFullYear()} Atharv Salvi</p>
        <span>Built with curiosity.</span>
      </footer>
    </section>
  );
}
