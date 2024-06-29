function Navbar() {
  let Links = [
    { name: "Start", link: "/" },
    { name: "About z.l", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contacts", link: "/" },
  ];
  return (
    <div className="border border-white shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          [zlrkw11 logo]
        </div>
        <ul className="md:flex md:items-center ml-auto">
          {Links.map((link) => (
            <li
              key={link.name}
              className="border boder-black mr-8 text-xl font-semibold"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
