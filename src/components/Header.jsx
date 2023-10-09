import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "animate.css";
// import styles from "./Header.module.css";

function Header() {
  const [nav, setNav] = useState(false);
  const links = [
    { title: "Home", path: "/" },
    { title: "about", path: "/about" },
    { title: "projects", path: "/projects" },
    { title: "contact", path: "/contact" },
  ];

  return (
    <nav className="w-full h-16 fixed bg-transparent md:px-[75px] px-[25px] flex justify-between items-center">
      <div className="text-3xl text-white font-extrabold font-sans  ">
        Swapil.
      </div>

      {/* This Section is only for Medium screen or above Medium screen */}
      <div className="text-white font-bold hidden md:flex text-lg capitalize ">
        {links.map((data) => (
          <NavLink
            to={data.path}
            style={({ isActive }) => {
              return {
                color: isActive ? "#00abf0" : "white",
              };
            }}
          >
            <ul>
              <li
                className="relative font-mono tracking-[1px] md:mx-[25px] cursor-pointer 
                after:content-[''] after:bg-my-theme after:h-[2px] after:w-[0%] after:absolute after:left-0
                after:bottom-[5px] after:rounded-xl after:duration-300
                hover:after:w-[100%] "
              >
                {data.title}
              </li>
            </ul>
          </NavLink>
        ))}
      </div>

      {/* This Section is only for small devices (below Medium screens) */}

      <div
        className="cursor-pointer pr-4 z-10 text-white md:hidden "
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-white font-bold  md:hidden text-lg bg-dark-blue ">
          {links.map((data) => (
            <NavLink
              to={data.path}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#00abf0" : "white",
                };
              }}
            >
              <ul>
                <li className="mx-[25px] cursor-pointer hover:scale-105 duration-200 py-6 text-4xl capitalize">
                  {data.title}
                </li>
              </ul>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
