function Skills() {
  return (
    <div className=" font-bold text-lg md:text-4xl [text-wrap:balance] bg-clip-text text-transparent gap-4   to-30% to-slate-100 flex">
      <div className="text-white "> I develop with </div>

      <div className="text-white inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <div className="animate-text-slide-4 text-left leading-tight">
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
