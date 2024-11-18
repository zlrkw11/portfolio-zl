import MusicPlayer from "../components/MusicPlayer";
import Sona from "../assets/icons/sona.png";
function About() {
  return (
    <div className="min-w-screen min-h-[120dvh] justify-center overflow-y-auto bg-dark-0 flex flex-col">
      <div className=" flex-col flex gap-8 m-8 h-8 w-auto items-center justify-center">
        <div>
          <div className="text-white text-5xl font-bold mr-auto mb-4 title">
            About
          </div>
          <div className="text-white text-xl md:w-[800px]">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-2xl">name:</h1>
                <h2>Ray Zhao</h2>
              </div>
              <div>
                <h1 className="text-2xl">hobbies: </h1>
                <h2 className="">
                  sleeping, gaming{" "}
                  <p className="line-through">(league of legends)</p>, listening
                  to music
                </h2>
              </div>
              <div>
                <h1 className="text-2xl">links: </h1>
                <a href="">
                  <img className="w-16" src={Sona} />{" "}
                  <p className="text-blue-600 hover:text-white font-bold w-4">
                    OPGG
                  </p>
                </a>
              </div>
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
