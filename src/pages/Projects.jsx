//import image links
import UASC from "../assets/uasc.png";
import ZL from "../assets/ZL.png";
import DigitalGarden from "../assets/dg.jpg";
import Hackathon from "../assets/gallery/DSC_0789.png";
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

const Clicker = ({ link, name, linkDes, index }) => {
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
          <div className="border-t-2 border-b-2 border-white border-opacity-40 hover:border-opacity-100 duration-500 px-4 py-8 rounded-lg">
            <p className="text-white font-bold">{linkDes}</p>
            <a
              href={link}
              className="text-neutral-500 underline hover:text-white duration-200"
            >
              {name}
            </a>
            {index === 2 && (
              <img
                className="w-[550px] object-cover mt-2"
                src={Hackathon}
                alt=":D"
              />
            )}
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
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-3xl mb-8">Projects</h1>

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
