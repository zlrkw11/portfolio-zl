import { motion } from "framer-motion";
function Contacts() {
  return (
    <div className="w-full min-h-screen bg-dark-0 grid grid-rows-2">
      <motion.h2
        className="cursor-grab "
        drag
        dragConstraints={{ top: -125, bottom: 0, left: 200, right: 200 }}
      >
        <div className="mt-8">
          <h1 className="text-white text-3xl font-bold">CONTACT ME</h1>
        </div>
      </motion.h2>
    </div>
  );
}

export default Contacts;
