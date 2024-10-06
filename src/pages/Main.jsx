import Intro from "../components/Intro";
import Skills from "../components/Skills";
import MusicPlayer from "../components/MusicPlayer";

function Main() {
  return (
    <div className="bg-dark-0 w-full flex flex-col justify-center items-center h-screen">
      <Intro />
      <Skills />
      <MusicPlayer />
    </div>
  );
}

export default Main;
