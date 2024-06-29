import Intro from "../components/Intro";
function Main() {
  return (
    <div className="flex items-center justify-center w-full bg-dark-0 h-screen flex-col gap-4">
      <div className="">
        <h1 className="pt-4 text-4xl font-semibold text-white">Hi Im Ray</h1>
      </div>
      <Intro />
    </div>
  );
}

export default Main;
