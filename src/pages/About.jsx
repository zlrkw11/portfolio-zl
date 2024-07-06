import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef < HTMLElement > null;

  useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollY, opacity: scrollY }}
    ></motion.div>
  );
}

export default About;
