import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

/** A single entrance as each text block reaches the viewport. */
export function TextReveal(props: HTMLMotionProps<"div">) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  );
}
