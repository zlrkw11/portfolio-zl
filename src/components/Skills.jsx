function Skills() {
  return (
    <div className=" font-bold text-lg md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-dark-1/80 to-30% to-slate-100">
      I develop with{" "}
      <div className="text-white inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <div className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
          <div>React</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>TailwindCSS</div>
          <div aria-hidden="true">React</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
