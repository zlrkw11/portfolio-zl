//import image links
import UASC from "../assets/uasc.png";
import ZL from "../assets/ZL.png";
import { useState } from "react";
const Project = ({ image, text }) => {
  return (
    <div className="border border-white w-[800px] h-[300px] flex items-center bg-neutral-900 p-8 rounded-lg">
      <div className="m-2 w-[900px]">
        <img
          src={image}
          alt="Project image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" text-white mb-auto p-2 mt-8 my-2 text-2xl ">{text}</div>
    </div>
  );
};

const Clicker = ({ link, name }) => {
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
      <div>
        {expand && (
          <a href={link} className="text-white">
            {name}
          </a>
        )}
      </div>
    </>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      name: "UASC website",
      image: UASC,
      text: "Project with the University of Auckland Snowsports Club Website & Booking System. Established in 2023.",
      link: "https://uasc.co.nz/",
    },
    {
      name: "ZL's portfolio",
      image: ZL,
      text: "Personal portfolio designed, developed and deployed all independently using React.js & Tailwind CSS. (This one if you can't tell)",
      link: "https://zlrkw11.github.io/portfolio-zl",
    },
    { image: "", text: "COCK" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-3xl mb-8">Projects</h1>

      <Project
        image={projects[currentIndex].image}
        text={projects[currentIndex].text}
      />
      <Clicker
        link={projects[currentIndex].link}
        name={projects[currentIndex].name}
      />
      <div>
        <button
          className="px-8 py-4 border-2 border-white text-white bg-neutral-700 rounded-lg hover:bg-white color: hover:text-neutral-500 duration-500"
          onClick={handleClick}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
