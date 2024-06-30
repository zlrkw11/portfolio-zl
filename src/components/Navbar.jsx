function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex backdrop-blur-md py-4 text-white shadow-lg">
        <div className="font-bold text-2xl cursor-pointer flex items-center ">
          [zlrkw11 logo]
        </div>
        <div className="md:flex md:items-center ml-auto md:mr-4 gap-4">
          <a href="/">Start</a>
          <a href="/">About z.l</a>
          <a href="/">Projects</a>
          <a href="/">Contacts</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
