import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import ethoVideo from "../../assets/Recording 2026-03-03 153035.mp4";

const projects = [
  {
    id: 1,
    title: "Etho",
    description: "A command-line AI assistant.",
    year: "2026",
    video: ethoVideo,
    link: "https://github.com/atharvsalvi/etho",
  },
];

// Helper component for individual project cards to handle the intersection observer logic cleanly
function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(containerRef, { margin: "-20%", amount: 0.5 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle video playback based on mobile + intersection view
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isMobile) return;

    if (isInView) {
      video.playbackRate = 2.0;
      video.play().catch(err => console.error("Video play error:", err));
    } else {
      video.pause();
    }
  }, [isInView, isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="block"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        ref={containerRef}
        className={`group block relative overflow-hidden rounded-lg mb-6 ${projects.length === 1 ? 'aspect-video md:aspect-[21/9]' : 'aspect-[4/3]'} bg-[#141414] cursor-pointer`}
        onMouseEnter={(e) => {
          if (isMobile) return; // Let intersection observer handle mobile
          const video = e.currentTarget.querySelector('video');
          if (video) {
            video.playbackRate = 2.0;
            video.play().catch(err => console.error("Video play error:", err));
          }
        }}
        onMouseLeave={(e) => {
          if (isMobile) return; // Let intersection observer handle mobile
          const video = e.currentTarget.querySelector('video');
          if (video) video.pause();
        }}
      >
        <video
          ref={videoRef}
          src={project.video}
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none" />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </a>
      <div className="flex items-start justify-between">
        <div className="max-w-[80%]">
          <h3
            className="text-white mb-2"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.25rem", fontWeight: 600 }}
          >
            {project.title}
          </h3>
          <p className="text-white/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
            {project.description}
          </p>
        </div>
        <span
          className="text-white/30 pt-1"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem" }}
        >
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-32">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <div>
          <p
            className="text-white/40 mb-3"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Selected Work
          </p>
          <h2
            className="text-white"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400 }}
          >
            Projects
          </h2>
        </div>
        <p className="text-white/40 hidden md:block" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
          0{projects.length} Project{projects.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Projects grid */}
      <div className={`grid grid-cols-1 ${projects.length === 1 ? '' : 'md:grid-cols-2'} gap-8 md:gap-12`}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
