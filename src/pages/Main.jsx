import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Scroller from "../components/Scroller";
import GitHubTag from "../components/GitHubTag";
function Main() {
  return (
    <div className="flex items-center justify-center w-full bg-dark-0 h-screen flex-col gap-4">
      <Intro />
      <Skills />
      <GitHubTag />
      <Scroller />
    </div>
  );
}

export default Main;
