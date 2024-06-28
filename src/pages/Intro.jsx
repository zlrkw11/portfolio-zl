function Intro() {
  return (
    <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
      My Skills Are{" "}
      <span className="text-indigo-500 inline-flex flex-col">
        <ul className="block text-left leading-tight [&_li]:block">
          <li>React</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>TailwindCSS</li>
        </ul>
      </span>
    </div>
  );
}

export default Intro;
