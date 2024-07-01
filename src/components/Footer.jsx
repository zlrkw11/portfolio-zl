import Github from "../assets/icons/github.svg?react";
function Footer() {
  return (
    <div className="h-16 grid grid-cols-2 items-center">
      <div>
        <p>&copy; {new Date().getFullYear()} zlrkw11. All rights reserved</p>
      </div>
      {/* svg icon links */}
      <div>
        <Github />
      </div>
    </div>
  );
}

export default Footer;
