const Background = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen flex items-center justify-center bg-dark-0 overflow-hidden ">
      <div className=" absolute inset-0 bg-gradient-to-r from-dark-0 to-dark-2 animated-blur"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
