import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);
  return (
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center">
      <div className=" flex-col flex gap-4 h-8 w-[800px]">
        <motion.div
          className="text-center text-white text-5xl font-bold"
          style={{ opacity }}
        >
          About
        </motion.div>
        <motion.div className="text-white text-xl" style={{ opacity }}>
          A deeply dedicated and enthusiastic second-year computer science
          student at the University of Auckland with a strong focus on front-end
          web development. Extremely passionate about web development and app
          making, with proven expertise in independent project building. Seeking
          an internship role to leverage my skills in React.js, JavaScript, and
          TypeScript while contributing to team projects and gaining
          professional experience.
        </motion.div>
      </div>
    </div>
  );
}
export default About;
