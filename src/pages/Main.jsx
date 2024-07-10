import Intro from "../components/Intro";
import Skills from "../components/Skills";

function Main() {
  return (
    <div className="bg-dark-0 flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="inset-0 bg-gradient-to-r from-dark-0 to-dark-2 animated-blur opacity-50">
        <Intro />
      </div>
      <div className=" inset-0 bg-gradient-to-r from-dark-0 to-dark-2 opacity-50 animated-blur">
        <Skills />
      </div>
    </div>
  );
}

export default Main;
