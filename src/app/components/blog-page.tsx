import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CustomCursor } from "./custom-cursor";

export function BlogPage() {
    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen cursor-none flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
            <CustomCursor />

            {/* Top bar */}
            <div className="px-6 sm:px-10 md:px-16 lg:px-20 py-8 md:py-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 pl-2 pr-5 py-2 rounded-full border border-black/10 text-black hover:bg-white/90 transition-all bg-white shadow-lg"
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", fontWeight: 600 }}
                    >
                        <ArrowLeft className="w-4 h-4 text-black" />
                        Portfolio
                    </Link>
                </motion.div>
            </div>

            {/* Coming Soon centered */}
            <div className="flex-1 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h1
                        className="text-white/80"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.5rem, 8vw, 5rem)",
                            fontWeight: 400,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Coming Soon
                    </h1>
                    <p
                        className="text-white/30 mt-4"
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.1em" }}
                    >
                        Stay tuned for updates
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
