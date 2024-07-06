import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);

  useScroll({
    target: "",
    offset: ["0 1", "1.33 1"],
  });
  return <div></div>;
}

export default About;
