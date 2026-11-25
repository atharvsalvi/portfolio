import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring config for butter-smooth catching up to the mouse
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      updateHover(e.target);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const updateHover = (target: EventTarget | null) => {
      const element = target instanceof Element ? target.closest("a[href], button, [role='button'], input, textarea, select, [data-hoverable]") : null;
      setIsHovering(Boolean(element && !element.matches(":disabled, [aria-disabled='true']")));
    };
    const handleHover = (event: MouseEvent) => updateHover(event.target);
    const handleHoverOut = (event: MouseEvent) => updateHover(event.relatedTarget);

    // Reset hover state on click — when navigating via React Router,
    // the hovered element gets destroyed before mouseleave fires
    const handleClick = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("click", handleClick);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHoverOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHoverOut);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const cursorSize = isHovering ? 48 : 32;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-white/60 mix-blend-difference"
      style={{
        x: reducedMotion ? cursorX : smoothX,
        y: reducedMotion ? cursorY : smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={false}
      animate={{
        width: cursorSize,
        height: cursorSize,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        width: { type: "tween", duration: reducedMotion ? 0 : 0.15 },
        height: { type: "tween", duration: reducedMotion ? 0 : 0.15 },
        opacity: { duration: 0.2 }
      }}
    />
  );
}


