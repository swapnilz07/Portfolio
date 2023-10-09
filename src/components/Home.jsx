import React from "react";
import codeboy from "../../src/images/codeboy.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center md:px-[75px] px-[30px] py-20">
        {/* My Name Section */}
        <div className="lg:w-[700px] md:w-[550px] md:items-start flex flex-col items-center ">
          <h1 className="lg:text-[56px] md:text-[45px] text-[32px] font-bold text-white ">
            Hi, I'm Swapnil Zakade
          </h1>

          <h3 className="md:text-[32px] text-2xl text-my-theme font-bold ">
            Fullstack Developer
          </h3>
          <p className="text-[16px]  text-center md:text-left text-white md:my-[20px] my-2 leading-[1.2] ">
            "Enthusiastic fullstack developer eager to turn innovative ideas
            into reality through coding magic. Passionate about crafting
            intuitive web experiences. Dedicated to mastering both ends of web
            development, aiming to build innovative and user-friendly
            applications that leave a mark."
          </p>
          <div className="border-b-4 border-b-my-theme w-[100%]"></div>
          <div>
            <button className="h-[50px] w-[170px] bg-[#00abf0] rounded-2xl text-dark-blue font-extrabold text-[19PX] items-center tracking-tight my-4">
              View My Resume
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="lg:w-[400px] md:w-[350px] w-[380px] lg:ml-12 h-auto mt-6 ">
          <img src={codeboy} alt="codeboy" />
        </div>
        {/* Social Links */}
        <div className="absolute md:bottom-[40px] bottom-5 flex justify-between px-2 py-2 border-b-my-theme border-b-2 ">
          <NavLink to="">
            <FaFacebookF
              size={35}
              color="#00abf0"
              className="border-[2px] border-my-theme rounded-full p-1.5 mr-3 bg-transparent"
            />
          </NavLink>
          <NavLink to="">
            <FaTwitter
              size={35}
              color="#00abf0"
              className="border-[2px] border-my-theme rounded-full p-1.5 mr-3 bg-transparent "
            />
          </NavLink>
          <NavLink to="">
            <FaLinkedinIn
              size={35}
              color="#00abf0"
              className="border-[2px] border-my-theme rounded-full p-1.5 mr-3 bg-transparent "
            />
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Home;
