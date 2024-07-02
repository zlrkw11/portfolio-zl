import { motion } from "framer-motion";
function Contacts() {
  return (
    <div className="w-full min-h-screen bg-dark-0 grid grid-col title items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="mt-8 items-center flex">
          <h1 className="text-white text-3xl font-bold">CONTACT ME</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Contacts;
