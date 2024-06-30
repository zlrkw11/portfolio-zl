import { useState } from "react";
function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleOnClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex backdrop-blur-md py-4 text-white shadow-lg">
        <div className="flex items-center">
          <div className="font-bold text-2xl cursor-pointer flex items-center ">
            [zlrkw11 logo]
          </div>
          <button
            className="text-white ml-auto mr-8 md:hidden"
            onClick={handleOnClick}
          >
            expand
          </button>
        </div>
        <div className={`hidden md:flex md:items-center ml-auto md:mr-8 gap-4`}>
          <a href="/">Start</a>
          <a href="/">About z.l</a>
          <a href="/">Projects</a>
          <a href="/">Contacts</a>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-24 text-white h-full bg-dark-0 transform ${
          isExpanded ? "translate-x-0" : "-translate-x-24"
        } transition-transform duration-300 ease-in-out md:hidden gap-4 shadow-lg`}
      >
        <button className="text-white m-4" onClick={handleOnClick}>
          close
        </button>
        <nav className="flex flex-col p-4 gap-4">
          <a href="/">Start</a>
          <a href="/">About z.l</a>
          <a href="/">Projects</a>
          <a href="/">Contacts</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
