import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const links = [
    { id: 1, title: "Home", path: "home" },
    { id: 2, title: "about", path: "about" },
    { id: 3, title: "projects", path: "projects" },
    { id: 4, title: "contact", path: "contact" },
  ];

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - sectionHeight * 0.5 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight * 0.5
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full h-16 fixed bg-gradient-to-r from-my-theme to-dark-blue md:px-[75px] px-[25px] flex justify-between items-center z-10">
      <div className="text-3xl text-white font-extrabold font-sans  ">
        Swapil.
      </div>

      {/* This Section is only for Medium screen or above Medium screen */}
      <div className="text-white font-bold hidden md:flex md:justify-around text-lg capitalize">
        {links.map((data) => (
          <ScrollLink
            key={data.id}
            to={data.path}
            spy={true}
            smooth={true}
            duration={700}
            activeClass="active"
          >
            <ul>
              <li
                className={`relative font-mono tracking-[1px] md:mx-[25px] cursor-pointer ${
                  activeLink === data.path ? "text-my-theme" : "text-white"
                }`}
              >
                {data.title}
              </li>
            </ul>
          </ScrollLink>
        ))}
      </div>

      {/* Small screen (Mobile) */}
      <div className="md:hidden flex items-center">
        <div
          className="cursor-pointer pr-4 z-10 text-white"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <div className="absolute top-0 left-0 w-full h-screen bg-dark-blue flex flex-col justify-center items-center">
            {links.map((data) => (
              <ScrollLink
                key={data.id}
                to={data.path}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                onClick={closeNav}
              >
                <ul>
                  <li
                    className={`mx-[25px] cursor-pointer hover:scale-105 duration-200 py-6 text-4xl capitalize ${
                      activeLink === data.path ? "text-my-theme" : "text-white"
                    }`}
                  >
                    {data.title}
                  </li>
                </ul>
              </ScrollLink>
            ))}
          </div>
        )}
      </div>

      {/* This Section is only for small devices (below Medium screens) */}
      {/* <div
        className="cursor-pointer pr-4 z-10 text-white md:hidden "
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div> */}

      {/* {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-white font-bold  md:hidden text-lg bg-dark-blue ">
          {links.map((data) => (
            <NavLink
              key={data.id}
              to={data.path}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#00abf0" : "white",
                };
              }}
              onClick={closeNav}
            >
              <ul>
                <li className="mx-[25px] cursor-pointer hover:scale-105 duration-200 py-6 text-4xl capitalize">
                  {data.title}
                </li>
              </ul>
            </NavLink>
          ))}
        </div>
      )} */}
    </nav>
  );
}

export default Header;
