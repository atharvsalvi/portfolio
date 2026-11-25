import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { TextReveal } from "./text-reveal";

const projects = [
  {
    title: "Limit Order Book & Matching Engine",
    description: "A C++20 limit order book that matches orders by price and arrival time, handles partial fills and cancellations, and identifies the initiating side of each trade. Order additions and cancellations are recorded in a write-ahead log and replayed on restart to rebuild the book.",
    details: "GoogleTest covers FIFO ordering, multi-trade fills, cancellations, and linked-list integrity. A Google Benchmark replay of 5,306 events measured 10.04 million events per second, with logging and benchmark mutex locking disabled.",
    technologies: "C++20 · GoogleTest · Google Benchmark",
    duration: "Apr – Sep 2026",
    link: "https://github.com/atharvsalvi/limit-order-book",
    image: "limit-order-book.png",
    imageAlt: "Limit order book terminal showing asks, bids, market statistics, and recent trades",
    gallery: [
      { image: "limit-order-book.png", alt: "Order book with bids, asks, and recent trades" },
      { image: "limit-order-book-benchmarks.png", alt: "Google Benchmark results for order book operations" },
      { image: "limit-order-book-tests.png", alt: "Order book tests for price-time priority, fills, and cancellations" },
      { image: "limit-order-book-test-results.png", alt: "Test summary showing all 38 order book tests passing" },
    ],
  },
  {
    title: "Caching Proxy Server",
    description: "A Redis-backed HTTP reverse proxy in Python, with threaded and asynchronous FastAPI implementations. Per-key locks let concurrent requests for the same uncached URL share a single origin fetch. Across 50 bursts of four clients, it served 200 requests with just 50 origin fetches.",
    details: "Supports ETag validation and stale-while-revalidate to refresh expired entries in the background. Local benchmarks measured cache hits at 3.52 ms versus 32.11 ms for direct origin requests, while background refresh reduced p95 latency from 69.56 ms to 28.84 ms across 200 requests per mode.",
    technologies: "Python · Redis · FastAPI · HTTP",
    duration: "Oct – Nov 2026",
    link: "https://github.com/atharvsalvi/caching-proxy-server",
    image: "caching-proxy-server.png",
    imageAlt: "Caching proxy architecture showing HTTP requests, Redis caching, and an optional Kafka analytics flow",
  },
  {
    title: "Financial Research RAG Application",
    description: "Building a retrieval-augmented generation application for financial research using NestJS and PostgreSQL. The ingestion pipeline splits documents into chunks, retains their metadata, and indexes embeddings with pgvector to support retrieval.",
    details: "Embedding generation is batched through Ollama, with vector validation before storage and reuse of existing embeddings to avoid repeat computation. Transactional writes, database migrations, and dependency health checks support ingestion reliability. Packaged with Docker and GitHub Actions CI for a suite of 58 passing tests.",
    technologies: "Node.js · TypeScript · NestJS · PostgreSQL · pgvector",
    duration: "Nov 2026 – Present",
    link: "https://github.com/atharvsalvi/financial-rag",
    image: "financial-rag.png",
    imageAlt: "Financial research workspace with a report library, document upload, and benchmark overview",
  },
];

export function ProjectsSection() {
  const [viewer, setViewer] = useState<{ project: number; image: number } | null>(null);
  const [viewerOpen, setViewerOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const selectedProject = viewer ? projects[viewer.project] : null;
  const images = selectedProject
    ? selectedProject.gallery ?? [{ image: selectedProject.image, alt: selectedProject.imageAlt }]
    : [];
  const selectedImage = viewer ? images[viewer.image] : null;
  const navigate = (direction: number) => {
    setViewer((current) => current && ({ ...current, image: (current.image + direction + images.length) % images.length }));
  };
  const openImage = (project: number, image: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setViewer({ project, image });
    setViewerOpen(true);
  };
  return (
    <section id="projects" className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-14">
      <TextReveal className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          <p
            className="text-white/40 mb-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
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
        <p className="text-white/40 hidden md:block" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
          {String(projects.length).padStart(2, "0")} Projects
        </p>
      </TextReveal>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {projects.map((project, projectIndex) => (
          <article
            key={project.link}
            className="group grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-10 min-w-0 rounded-lg bg-[#141414] p-6 md:p-8 transition-colors duration-300 hover:bg-[#191919] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <TextReveal className="flex flex-col min-w-0 md:self-stretch">
            <p className="text-white/50 text-xs leading-relaxed mb-5" style={{ fontFamily: "var(--font-mono)" }}>
              {project.duration}
            </p>
            <h3 className="text-white text-xl font-semibold leading-snug mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              {project.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-mono)" }}>
              {project.technologies}
            </p>
            <p className="text-white/70 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
              {project.description}
            </p>
            <p className="text-white/70 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
              {project.details}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — view on GitHub (opens in a new tab)`} className="mt-auto inline-flex self-start items-center gap-2 text-white/80 text-sm min-h-11 hover:text-white focus-visible:outline-2 focus-visible:outline-white" style={{ fontFamily: "var(--font-mono)" }}>
              View on GitHub
              <ArrowUpRight aria-hidden="true" className="w-4 h-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
            </a>
            </TextReveal>
            {project.gallery ? (
              <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full min-w-0 overflow-hidden rounded-lg" style={{ aspectRatio: "1904 / 976" }}>
                {project.gallery.map((preview, imageIndex) => (
                  <button type="button" key={preview.image} onClick={(event) => openImage(projectIndex, imageIndex, event.currentTarget)} aria-label={`Enlarge ${preview.alt}`} className="project-image-preview relative min-w-0 min-h-0 overflow-hidden rounded bg-black cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white">
                    <img
                      src={`${import.meta.env.BASE_URL}projects/${preview.image}`}
                      alt={preview.alt}
                      loading="lazy"
                      decoding="async"
                      className="block w-full h-full object-contain"
                    />
                    <span aria-hidden="true" className="project-image-hint">Click to enlarge</span>
                  </button>
                ))}
              </div>
            ) : <button type="button" onClick={(event) => openImage(projectIndex, 0, event.currentTarget)} aria-label={`Enlarge ${project.title} image`} className="project-image-preview relative block w-full min-w-0 overflow-hidden rounded-lg cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><img
              src={`${import.meta.env.BASE_URL}projects/${project.image}`}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto rounded-lg"
            /><span aria-hidden="true" className="project-image-hint">Click to enlarge</span></button>}
          </article>
        ))}
      </div>
      <Dialog.Root open={viewerOpen} onOpenChange={setViewerOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="image-viewer-overlay fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm" />
          <Dialog.Content
            aria-describedby={undefined}
            data-lenis-prevent
            onCloseAutoFocus={(event) => { event.preventDefault(); triggerRef.current?.focus(); }}
            onKeyDown={(event) => {
              if (images.length > 1 && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
                event.preventDefault();
                navigate(event.key === "ArrowRight" ? 1 : -1);
              }
            }}
            className="image-viewer-content fixed inset-0 z-[101] flex flex-col items-center justify-center gap-4 px-4 pt-20 pb-6 md:px-20 text-white outline-none"
          >
            <Dialog.Title className="sr-only">{selectedProject?.title} image viewer</Dialog.Title>
            <Dialog.Close aria-label="Close image viewer" className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white">
              <X aria-hidden="true" className="size-6" />
            </Dialog.Close>
            {selectedImage && <img key={selectedImage.image} src={`${import.meta.env.BASE_URL}projects/${selectedImage.image}`} alt={selectedImage.alt} className="image-viewer-image block min-h-0 max-h-[calc(100dvh-10rem)] w-full object-contain" />}
            <div className="flex shrink-0 items-center justify-center gap-6">
              {images.length > 1 && <button type="button" onClick={() => navigate(-1)} aria-label="Previous project image" className="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"><ChevronLeft aria-hidden="true" /><span aria-hidden="true" className="project-image-hint">Click to enlarge</span></button>}
              <p aria-live="polite" className="text-sm text-white/70" style={{ fontFamily: "var(--font-mono)" }}>{viewer ? viewer.image + 1 : 0} / {images.length}</p>
              {images.length > 1 && <button type="button" onClick={() => navigate(1)} aria-label="Next project image" className="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"><ChevronRight aria-hidden="true" /><span aria-hidden="true" className="project-image-hint">Click to enlarge</span></button>}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

