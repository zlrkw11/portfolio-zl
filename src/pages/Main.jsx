import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Background from "./Background";
import Navbar from "../components/Navbar";

function Main() {
  return (
    <Background>
      <Navbar />
      <Intro />
      <Skills />
    </Background>
  );
}

export default Main;
