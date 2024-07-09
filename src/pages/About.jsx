import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
  return (
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center">
      <div className=" flex-col flex gap-8 m-8 h-8 w-auto items-center justify-center">
        <motion.div
          className="text-white text-5xl font-bold mr-auto title"
          style={{ opacity }}
        >
          About
        </motion.div>
        <motion.div
          drag
          dragConstraints={{ top: 0, bottom: 200, left: 0, right: 0 }}
          className="text-white text-xl md:w-[800px]  "
          style={{ opacity }}
        >
          A deeply <span className="title text-2xl">dedicated</span> and{" "}
          <span className="title text-2xl">enthusiastic</span> second-year
          computer science student at the University of Auckland with a strong
          focus on front-end web development.
          <div className="h-8 "></div>
          <div className="">
            Extremely passionate about web development and app making, with
            proven expertise in independent project building. Seeking an
            internship role to leverage my skills in React.js, JavaScript, and
            TypeScript while contributing to team projects and gaining
            professional experience as I focus heavily on both team-building and
            personal growth.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default About;
