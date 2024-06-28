function Intro() {
  return (
    <div className="font-bold text-lg md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/70 to-50% to-slate-200">
      My Skills Are{" "}
      <span className="text-white inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
          <li>React</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>TailwindCSS</li>
          <li aria-hidden="true">Finance</li>
        </ul>
      </span>
    </div>
  );
}

export default Intro;
