import { motion } from "motion/react";
import { ExperienceSection } from "./experience-section";

const skills = [
  "C++",
  "Python",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Apache Kafka",
  "Supabase",
  "Linux",
  "Docker",
  "AWS",
  "Git/GitHub",
  "ROS 2"
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16 lg:gap-24">
        {/* Left side */}
        <div>
          <p
            className="text-white/40 mb-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
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
            Always curious about what happens behind the scenes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 mb-8"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8 }}
          >
            I'm a Computer Engineering student who enjoys exploring the ideas and engineering that bring software to life. I like building things from scratch, understanding the problems they solve, and discovering what happens when I push them further. From systems programming to AI, I'm driven by curiosity and the satisfaction of making something work.
          </motion.p>

          <div className="mb-8">
            <p className="text-white/80 text-sm leading-relaxed">B.Tech in Computer Engineering</p>
            <p className="text-white/60 text-sm leading-relaxed mt-1">Dwarkadas J. Sanghvi College of Engineering</p>
            <p className="text-white/60 mt-2 text-xs leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>Expected May 2028 · CGPA 9.58/10</p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                className="px-4 py-2 rounded-full border border-white/15 text-white/60"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <ExperienceSection />
      </div>
    </section>
  );
}
