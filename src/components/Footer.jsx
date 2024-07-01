import { useState } from "react";
import Github from "../assets/icons/github.svg?react";
import Insta from "../assets/icons/insta.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
import UpArrow from "../assets/icons/up.svg?react";
function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  function handleOnClick() {
    setIsExpanded(!isExpanded);
    setIsRotated(!isRotated);
  }
  return (
    <div className="h-16 bottom-0 w-full fixed flex md:grid grid-cols-2 items-center justify-center bg-dark-0 gap-4">
      <div className="pl-4 text-white">
        <p>&copy; {new Date().getFullYear()} zlrkw11. All rights reserved</p>
      </div>
      <button className="grid text-white md:hidden" onClick={handleOnClick}>
        <UpArrow
          className={`fill-white icon transition-transform duration-300 ${
            isRotated ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* svg icon links */}
      <div className="hidden md:flex gap-8 group items-center ml-auto mr-8">
        <a href="https://github.com/zlrkw11" className="">
          <Github className="fill-white w-8 cursor-pointer icon" />
        </a>
        <a href="https://www.linkedin.com/in/ray-zhao-1a2380269/">
          <Linkedin className="fill-white w-8 cursor-pointer icon" />
        </a>
        <a href="https://www.instagram.com/zlrkw_11/">
          <Insta className="fill-white w-8 cursor-pointer icon" />
        </a>
      </div>

      <div
        className={`flex flex-col bottom-0 md:hidden transition-transform duration-300 ease-in-out  ${
          isExpanded ? "-translate-y-12" : "translate-y-28"
        } `}
      >
        <a href="https://github.com/zlrkw11" className="">
          <Github className="fill-white w-8 cursor-pointer icon" />
        </a>
        <a href="https://www.linkedin.com/in/ray-zhao-1a2380269/">
          <Linkedin className="fill-white w-8 cursor-pointer icon" />
        </a>
        <a href="https://www.instagram.com/zlrkw_11/">
          <Insta className="fill-white w-8 cursor-pointer icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
