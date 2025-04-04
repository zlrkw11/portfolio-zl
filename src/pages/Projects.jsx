//import image links
import UASC from "../assets/uasc.png";
import ZL from "../assets/ZL.png";
import DigitalGarden from "../assets/dg.jpg";

import { useState } from "react";
const Project = ({ image, text }) => {
  return (
    <div className="border border-white max-w-[800px] lg:h-[300px] md:h-[200px] h-[300px] md:flex md:items-center bg-neutral-900 p-8 rounded-lg">
      <div className="m-2 w-full md:w-[550px] lg:w-[700px] flex items-center justify-center">
        <div>
          {" "}
          <img
            src={image}
            alt="Project image"
            className="md:w-full w-[200px] object-cover"
          />
        </div>
      </div>
      <div className=" text-white p-2 text-lg lg:text-2xl md:text-lg flex justify-center items-center">
        {text}
      </div>
    </div>
  );
};

const Clicker = ({ link, name, linkDes, index }) => {
  const [expand, setExpanded] = useState(false);

  const handleOnClick = () => {
    setExpanded((prevExpand) => !prevExpand);
  };
  return (
    <>
      <div
        onClick={handleOnClick}
        className="border cursor-pointer border-neutral-400 hover:border-white text-neutral-500 px-4 py-2 font-semibold rounded-b-lg bg-neutral-700 hover:bg-neutral-400 duration-300 hover:text-white"
      >
        {expand ? "collapse" : "expand"}
      </div>
      <div>
        {expand && (
          <div className="border-t-2 border-b-2 border-white border-opacity-40 hover:border-opacity-100 duration-500 px-4 py-8 rounded-lg">
            <p className="text-white font-bold">{linkDes}</p>
            <a
              href={link}
              className="text-neutral-500 underline hover:text-white duration-200"
            >
              {name}
            </a>

            {/* can add more description here */}
          </div>
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
      linkDes: "Go to the website",
    },
    {
      name: "ZL's portfolio",
      image: ZL,
      text: "Personal portfolio designed, developed and deployed all independently using React.js & Tailwind CSS. (This one if you can't tell)",
      link: "https://zlrkw11.github.io/portfolio-zl",
      linkDes: "Ur already on it",
    },
    {
      name: "Digital Garden",
      image: DigitalGarden,
      text: "Group project for Google Developer Student Club's Hackathon at the University of Auckland. Online multiplayer game made with React.",
      link: "https://github.com/Oculux314/digital-garden",
      linkDes: "Check out the GitHub repo (cuz its not completed)",
    },
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
    <div className="min-w-screen min-h-[125dvh] bg-dark-0 flex flex-col justify-center items-center gap-4 mb-16">
      <h1 className="text-white text-3xl mb-8 font-inter">Projects</h1>

      <Project
        image={projects[currentIndex].image}
        text={projects[currentIndex].text}
      />
      <Clicker
        link={projects[currentIndex].link}
        name={projects[currentIndex].name}
        linkDes={projects[currentIndex].linkDes}
        index={currentIndex}
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
