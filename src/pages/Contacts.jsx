import emailjs from "@emailjs/browser";
import { useState } from "react";
function Contacts() {
  const [clicked, setClicked] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_r8v8vhv", //service_id
      "template_72vhxtq", // template_id
      e.target,
      "tRl_tRUBfRLeko-rI" // public_key);
    );
    setClicked(true);
  };
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

      <div>
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-4 items-center justify-center mt-8"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            className="px-4 py-2 text-lg box text-white outline-none border-2 border-dark-2 rounded hover:border-white duration-200 peer focus:border-white bg-transparent hover:-translate-x-4 transition"
          ></input>
          <input
            required
            type="text"
            name="subject"
            placeholder="Subject"
            className="px-4 py-2 text-lg box text-white outline-none border-2 border-dark-2 rounded hover:border-white duration-200 peer focus:border-white bg-transparent hover:translate-x-4 transition"
          ></input>
          <input
            required
            type="text"
            name="message"
            placeholder="Message For Z.L"
            className="px-4 py-6 text-lg box text-white outline-none border-2 border-dark-2 rounded hover:border-white duration-200 peer focus:border-white bg-transparent hover:-translate-x-4 transition"
          ></input>
          {!clicked ? (
            <button
              type="submit"
              className={`px-4 py-2 rounded border-dark-2 border-2 text-dark-2 box hover:border-white hover:text-white outline-none focus:border-white ${
                clicked && "disabled"
              }`}
            >
              Send
            </button>
          ) : (
            <button className="cursor-not-allowed border-white border-2 rounded px-4 py-6">
              Sent
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contacts;
