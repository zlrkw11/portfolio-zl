import Github from "../assets/icons/github.svg?react";
import Insta from "../assets/icons/insta.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
function Footer() {
  return (
    <div className="h-16 grid grid-col md:grid-cols-2 items-center justify-center bg-dark-0">
      <div className="pl-4 text-white">
        <p>&copy; {new Date().getFullYear()} zlrkw11. All rights reserved</p>
      </div>
      {/* svg icon links */}
      <div className="hidden md:flex gap-8 group items-center ml-auto mr-8">
        <a href="https://github.com/zlrkw11" className="">
          <Github className="fill-white w-8 cursor-pointer " />
        </a>
        <a href="https://www.linkedin.com/in/ray-zhao-1a2380269/">
          <Linkedin className="fill-white w-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/zlrkw_11/">
          <Insta className="fill-white w-8 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
