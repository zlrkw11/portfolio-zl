function Skills() {
  return (
    <div className=" font-bold text-lg flex-col md:text-4xl [text-wrap:balance] bg-clip-text text-transparent gap-4 to-30% to-slate-100 md:flex">
      <div className="text-white title"> I develop with </div>

      <div className="text-white inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <div className="animate-text-slide-4 text-left leading-tight md:m-0 pt-1">
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
