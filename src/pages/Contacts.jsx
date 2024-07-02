import { motion } from "framer-motion";
function Contacts() {
  return (
    <div className="w-full min-h-screen bg-dark-0 grid grid-rows-2 title">
      <motion.h2
        className="cursor-grab "
        drag
        dragConstraints={{ top: -125, bottom: 75, left: 200, right: 200 }}
        initial={{ opacity: 0, y: 330 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="mt-8">
          <h1 className="text-white text-3xl font-bold">CONTACT ME</h1>
        </div>
      </motion.h2>
    </div>
  );
}

export default Contacts;
