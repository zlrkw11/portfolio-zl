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

      <div className="flex flex-col gap-4 items-center justify-center mt-8">
        <input
          required
          type="text"
          placeholder="Name"
          className="px-4 py-2 text-lg box text-white outline-none border-2 border-dark-2 rounded hover:border-white duration-200 peer focus:border-white bg-inherit hover:-translate-x-4 transition"
        ></input>
        <input
          required
          type="text"
          placeholder="Subject"
          className="px-4 py-2 text-lg box text-white outline-none border-2 border-dark-2 rounded hover:border-white duration-200 peer focus:border-white bg-inherit hover:translate-x-4 transition"
        ></input>
        <input
          required
          type="text"
          placeholder="Message For Z.L"
          className="px-4 py-6 text-lg box text-white outline-none border-2 border-dark-2 rounded hover:border-white duration-200 peer focus:border-white bg-inherit hover:-translate-x-4 transition"
        ></input>
        <button className="px-4 py-2 rounded border-dark-2 border-2 text-dark-2 box hover:border-white hover:text-white outline-none focus:border-white">
          Send
        </button>
      </div>
    </div>
  );
}

export default Contacts;
