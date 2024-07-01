import { useState } from "react";
import Dragon from "../assets/icons/dragon.svg?react";
import Burger from "../assets/icons/burger.svg?react";
function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleOnClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex backdrop-blur-md py-4 text-white shadow-lg items-center grid-cols-2 grid">
        <Dragon
          className="w-12 fill-white md:w-12 ml-4"
          style={{
            filter:
              "drop-shadow(0 0 5px #ffffff) drop-shadow(0 0 25px #ffffff) drop-shadow(0 0 50px #ffffff) drop-shadow(0 0 100px #ffffff)",
          }}
        />

        <div className="flex items-center">
          <button
            className="text-white ml-auto mr-8 md:hidden"
            onClick={handleOnClick}
          >
            <Burger className="w-8 h-8 icon" />
          </button>
        </div>
        <div className={`hidden md:flex md:items-center ml-auto md:mr-8 gap-4`}>
          <a href="/" className="link">
            Start
          </a>
          <a href="/" className="link">
            About z.l
          </a>
          <a href="/" className="link">
            Projects
          </a>
          <a href="../pages/Contacts" className="link">
            Contacts
          </a>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-24 text-white h-full backdrop-blur-md bg-dark-0 transform ${
          isExpanded ? "translate-x-0 shadow-lg" : "-translate-x-24"
        } transition-transform duration-300 ease-in-out md:hidden gap-4 `}
      >
        <button
          className="text-white m-4 hover:shadow-white link-red"
          onClick={handleOnClick}
        >
          close
        </button>
        <div className="flex flex-col p-4 gap-4 ">
          <a className="link" href="/">
            Start
          </a>
          <a href="/" className="link">
            About z.l
          </a>
          <a href="/" className="link">
            Projects
          </a>
          <a href="/" className="link">
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
