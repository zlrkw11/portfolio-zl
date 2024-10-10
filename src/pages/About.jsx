import MusicPlayer from "../components/MusicPlayer";
function About() {
  return (
    <div className="min-w-screen min-h-[120dvh] justify-center overflow-y-auto bg-dark-0 flex flex-col">
      <div className=" flex-col flex gap-8 m-8 h-8 w-auto items-center justify-center">
        <div>
          <div className="text-white text-5xl font-bold mr-auto mb-4 title">
            About
          </div>
          <div className="text-white text-xl md:w-[800px]">
            A deeply <span className="title text-2xl">dedicated</span> and{" "}
            <span className="title text-2xl">enthusiastic</span> second-year
            computer science student at the University of Auckland with a strong
            focus on front-end web development.
            <div className="h-8 "></div>
            <div className="">
              Extremely passionate about web development and app making, with
              experience in independent project building. Seeking an internship
              role to leverage my skills in React.js, JavaScript, and TypeScript
              while contributing to team projects and gaining professional
              experience as I focus heavily on both team-building and
              independent personal growth.
            </div>
          </div>
        </div>
        <div className="text-white">
          <p className="mb-2">A song to share:</p>
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
}
export default About;
