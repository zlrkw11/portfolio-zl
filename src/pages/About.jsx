import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  return (
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center">
      <div>
        <motion.div className="text-white text-4xl" style={{ y }}>
          About
        </motion.div>
      </div>
    </div>
  );
}
export default About;
