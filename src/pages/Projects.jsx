//import image links
import UASC from "../assets/uasc.png";
import { useState } from "react";
const Project = ({ image, text }) => {
  return (
    <div className="border border-white w-[800px] h-[300px] flex items-center bg-neutral-900 p-8 rounded-lg">
      <div className="h-auto m-2 ">
        <img
          src={image}
          alt="Project image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[70%] text-white mb-auto p-2 m-2 text-2xl">{text}</div>
    </div>
  );
};

const Clicker = ({ text }) => {
  const [expand, setExpanded] = useState(false);

  const handleOnClick = () => {
    setExpanded((prevExpand) => !prevExpand);
  };
  return (
    <>
      <div
        onClick={handleOnClick}
        className="border border-neutral-400 hover:border-white text-neutral-500 px-4 py-2 font-semibold rounded-b-lg bg-neutral-700 hover:bg-neutral-400 duration-300 hover:text-white"
      >
        {expand ? "collapse" : "expand"}
      </div>
      <div>{expand && <p>{text}</p>}</div>
    </>
  );
};

const ProjectSection = () => {
  const projects = [
    { image: UASC, text: "" },
    { image: "", text: "" },
    { image: "", text: "" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-3xl mb-8">Projects</h1>

      <Project
        image={UASC}
        text="Project with the University of Auckland Snowsports Club Website & Booking System. Established in 2023."
      />
      <Clicker text="ray" />
      <div>
        <button className="px-8 py-4 border border-white bg-white rounded-lg">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
