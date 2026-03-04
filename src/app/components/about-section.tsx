import { motion } from "motion/react";

const skills = [
  "Competitive Programming",
  "ROS 2",
  "C/C++",
  "Python",
  "Git/Github",
  "Linux",
  "AI tools",
  "Figma"
];

const experience = [
  { role: "Coding Member", company: "DJS Antariksh", period: "2025 - Present" },
  { role: "Technical Web Developer", company: "DJS Nova", period: "2025 - Present" },
];

export function AboutSection() {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-32 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left side */}
        <div>
          <p
            className="text-white/40 mb-3"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            About
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.7 }}
            className="text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.2 }}
          >
            AI Research Enthusiast and Innovation Explorer.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 mb-12"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8 }}
          >
            I believe in AI that serves a purpose, not just AI that looks good on paper. As an aspiring researcher and explorer, I’m focused on building functional intelligence that moves people closer to their goals and solves real-world challenges.
          </motion.p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-4 py-2 rounded-full border border-white/15 text-white/60"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right side - Experience */}
        <div>
          <p
            className="text-white/40 mb-8"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Experience
          </p>
          <div className="space-y-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="py-8 border-b border-white/10 first:pt-0"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4
                    className="text-white"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", fontWeight: 500 }}
                  >
                    {exp.role}
                  </h4>
                  <span
                    className="text-white/30 shrink-0 ml-4"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem" }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className="text-white/40" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
                  {exp.company}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
