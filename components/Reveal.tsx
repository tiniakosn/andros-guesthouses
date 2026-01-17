"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // Για να μπορούμε να καθυστερούμε λίγο κάποια στοιχεία
}

export default function Reveal({ children, width = "fit-content", delay = 0.25 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" }); // Ενεργοποιείται λίγο πριν μπει τελείως
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 }, // Ξεκινάει κάτω και αόρατο
          visible: { opacity: 1, y: 0 }, // Ανεβαίνει στη θέση του
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }} // Cinematic κίνηση
      >
        {children}
      </motion.div>
    </div>
  );
}