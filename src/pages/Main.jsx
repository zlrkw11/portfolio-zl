import { px } from "framer-motion";
import Intro from "../components/Intro";
import Skills from "../components/Skills";

function Main() {
  return (
    <div className="flex items-center justify-center w-full bg-dark-0 h-screen flex-col gap-4">
      <Intro />
      <Skills />
      <div></div>
    </div>
  );
}

export default Main;
