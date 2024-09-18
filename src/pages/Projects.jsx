const ProjectSection = () => {
  return (
    <div className="w-full h-screen bg-dark-0 flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-3xl">Projects</h1>
      <div className="border border-black w-[400px] h-[200px] flex items-center">
        <div className="w-[30%] border border-red">image section</div>
        <div className="w-[70%] border border-red">description</div>
      </div>
    </div>
  );
};

export default ProjectSection;
