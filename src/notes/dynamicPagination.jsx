import React, { useState } from "react";

const Project = ({ image, text }) => {
  return (
    <div className="border border-white w-[800px] h-[300px] flex items-center bg-neutral-900 p-8 rounded-lg">
      <div className="h-auto m-2">
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
        className="border border-neutral-400 text-neutral-500 px-4 py-2 font-semibold rounded-b-lg bg-neutral-700 hover:bg-neutral-400 duration-300 hover:text-white"
      >
        {expand ? "Collapse" : "Expand"}
      </div>
      <div>{expand && <p>{text}</p>}</div>
    </>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      image: "image1.jpg", // Replace with your actual image source
      text: "Project 1 description.",
    },
    {
      image: "image2.jpg", // Replace with your actual image source
      text: "Project 2 description.",
    },
    {
      image: "image3.jpg", // Replace with your actual image source
      text: "Project 3 description.",
    },
    // Add more projects as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-3xl mb-8">Projects</h1>

      <Project
        image={projects[currentIndex].image}
        text={projects[currentIndex].text}
      />

      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          className="border border-white px-4 py-2 bg-neutral-700 hover:bg-neutral-400 text-white duration-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="border border-white px-4 py-2 bg-neutral-700 hover:bg-neutral-400 text-white duration-300"
        >
          Next
        </button>
      </div>
      <Clicker text="ray" />
    </div>
  );
};

export default ProjectSection;
