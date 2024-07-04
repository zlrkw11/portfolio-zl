import { motion } from "framer-motion";

function Contacts() {
  return (
    <div className="w-full h-screen bg-dark-0 grid grid-col  justify-center">
      {/* <motion.div
        initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      ></motion.div> */}
      <div className="mt-36">
        <h1 className="text-white text-3xl font-bold title">CONTACT ME</h1>
      </div>

      <div className="flex flex-col gap-4 group">
        <input placeholder="Name"></input>
        <input placeholder="Subject"></input>
        <input placeholder="Message"></input>
      </div>
    </div>
  );
}

export default Contacts;
