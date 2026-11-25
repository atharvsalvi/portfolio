import { TextReveal } from "./text-reveal";

const experiences = [
  {
    role: "Technical Head",
    organization: "DJS Consulting Group",
    duration: "August 2026 – Present",
    description: "Leading technical initiatives and helping build solutions for events and internal operations. Developed and deployed a real-time leaderboard using Supabase, allowing approximately 40 participants to track their scores while staff managed results through an administrative panel. Also mentored junior team members in operating the system.",
  },
  {
    role: "Technical Web Developer",
    organization: "DJS Nova",
    duration: "October 2025 – Present",
    description: "Contributed to the development of the DJS Nova website and its Event Horizon 3.0 event platform. Built a QR-based check-in system to verify participant visits across event stations, supporting approximately 50–60 concurrent participants during live operations.",
  },
  {
    role: "Coding Member – Mars Rover Team",
    organization: "DJS Antariksh",
    duration: "March 2025 – April 2026",
    description: "Worked on software development for a Mars rover, focusing on motor control using the Teensy 4.1 and implementing steering commands with ROS 2. Also worked on live video streaming for remote rover monitoring. Our team secured fifth place worldwide at the International Rover Challenge and received the Best PIMA Award.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="min-w-0 flex flex-col">
      <h2
        id="experience-heading"
        className="text-white/40 mb-8"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase" }}
      >
        Experience
      </h2>
      <ol className="m-0 list-none p-0 flex flex-col gap-8 md:gap-10">
        {experiences.map((experience) => (
          <li key={experience.organization}>
            <TextReveal>
            <h3 className="text-white leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", fontWeight: 500 }}>
              {experience.role}
            </h3>
            <p className="text-white/70 mt-1" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
              {experience.organization}
            </p>
            <p className="text-white/60 mt-2 leading-relaxed" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
              {experience.duration}
            </p>
            <p className="max-w-[72ch] text-white/70 mt-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8 }}>
              {experience.description}
            </p>
            </TextReveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
