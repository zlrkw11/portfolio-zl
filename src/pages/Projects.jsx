//import image links
const Project = (image, text) => {
  return (
    <div className="border border-black w-[400px] h-[200px] flex items-center">
      <div className="w-[30%] border border-white h-auto m-2">
        image section
      </div>
      <div className="w-[70%] border border-white h-auto p-2 m-2">
        Project with the University of Auckland Snowsports Club Website &
        Booking System. Established in 2023.
      </div>
    </div>
  );
};
const ProjectSection = () => {
  return (
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-3xl mb-8">Projects</h1>
      <div className="border border-black w-[400px] h-[200px] flex items-center">
        <div className="w-[30%] border border-white h-auto m-2">
          image section
        </div>
        <div className="w-[70%] border border-white h-auto p-2 m-2">
          Project with the University of Auckland Snowsports Club Website &
          Booking System. Established in 2023.
        </div>
      </div>
      <div className="border border-black w-[400px] h-[200px] flex items-center">
        <div className="w-[30%] border border-white h-auto m-2">
          image section
        </div>
        <div className="w-[70%] border border-white h-auto p-2 m-2">
          Project with the University of Auckland Snowsports Club Website &
          Booking System. Established in 2023.
        </div>
      </div>
      <div className="border border-black w-[400px] h-[200px] flex items-center">
        <div className="w-[30%] border border-white h-auto m-2">
          image section
        </div>
        <div className="w-[70%] border border-white h-auto p-2 m-2">
          Project with the University of Auckland Snowsports Club Website &
          Booking System. Established in 2023.
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
