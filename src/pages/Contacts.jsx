import { motion } from "framer-motion";

function Contacts() {
  return (
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center">
      {/* <motion.div
        initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      ></motion.div> */}
      <div className="">
        <h1 className="text-white text-3xl font-bold title">CONTACT ME</h1>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center mt-4">
        <label className="relative" />
        <input
          required
          type="text"
          placeholder="Name"
          className="px-4 py-2 text-lg box text-white outline-none border-2 border-dark-2 rounded hover:border-white duration-200 peer focus:border-white bg-inherit hover:-translate-x-4"
        ></input>
        <input
          required
          type="text"
          placeholder="Subject"
          className="px-4 py-2 text-lg box text-white outline-none border-2 border-dark-2 rounded hover:border-white duration-200 peer focus:border-white bg-inherit hover:translate-x-4"
        ></input>
        <input
          required
          type="text"
          placeholder="Subject"
          className="px-4 py-6 text-lg box text-white outline-none border-2 border-dark-2 rounded hover:border-white duration-200 peer focus:border-white bg-inherit hover:translate-y-4"
        ></input>
        <label />
      </div>
    </div>
  );
}

export default Contacts;
