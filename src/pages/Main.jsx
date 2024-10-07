import Intro from "../components/Intro";
import Skills from "../components/Skills";

function Main() {
  return (
    <div className="bg-dark-0 min-w-screen min-h-screen flex flex-col justify-center items-center">
      <Intro />
      <Skills />
    </div>
  );
}

export default Main;
