import { motion } from "framer-motion";

function About() {
  return (
    <>
      {" "}
      <div>
        <motion.div
          className="w-8 bg-white h-8"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ margin: "-200px" }}
        />
      </div>
    </>
  );
}
export default About;
