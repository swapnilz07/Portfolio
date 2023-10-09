import React, { useState } from "react";
import codeboy from "../images/codeboy.png";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandBootstrap,
  TbBrandTailwind,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandRedux,
  TbBrandGit,
  TbBrandGithub,
} from "react-icons/tb";

import { SiExpress } from "react-icons/si";

function AboutMe() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center md:px-[75px] px-[30px] py-20">
        {/* Image Section */}
        <div className="  lg:w-[440px] md:w-[350px] w-[370px] lg:ml-6 h-auto ">
          <img src={codeboy} alt="my profile" className="h-[600px]" />
        </div>
        {/* About Me Section */}
        <div className=" lg:w-[750px] md:w-[480px] w-[370px] h-[100%] ml-5 mt-20">
          <h1 className="text-[40px] text-white font-bold font-serif">
            About Me
          </h1>
          <p className="text-white mt-2">
            <span className="text-my-theme font-bold text-[17px]">
              Hello! my name is Swapnil
            </span>{" "}
            a passionate MERN Full Stack Developer.With a strong foundation in
            both front-end and back-end technologies, I specialize in building
            dynamic and responsive user interfaces using React and harnessing
            the versatility of Node.js and Express.js on the server side.
            MongoDB is my go-to database for storing and retrieving data
            efficiently.
          </p>
          <p className="mt-2 text-white">
            <span className="text-my-theme font-bold text-[17px]">
              As a fullstack Developer
            </span>{" "}
            I enjoy making interactive and user-friendly websites/web apps. My
            goal is to always build things that are scalable and interactive for
            Users.
          </p>

          <p className="mt-2 text-white">
            <span className="text-my-theme font-bold mt-2 ">
              Get in touch :{" "}
            </span>{" "}
            <a
              href="mailto:swapnil.zakade.33@gmail.com"
              className="hover:underline hover:text-my-theme hover:font-semibold"
            >
              swapnil.zakade.33@gmail.com
            </a>
          </p>

          {/* Tabs Section */}
          <div className="flex flex-col">
            <div className=" flex justify-around text-white text-[18px] mt-5 border-my-theme rounded-lg p-2 border-2">
              <button
                className={`${
                  activeTab === 1 ? "active text-my-theme " : ""
                } after:content-[''] `}
                onClick={() => handleTabClick(1)}
              >
                Skills
              </button>
              <button
                className={`${activeTab === 2 ? "active text-my-theme" : ""}`}
                onClick={() => handleTabClick(2)}
              >
                Education
              </button>
              <button
                className={`${activeTab === 3 ? "active text-my-theme" : ""}`}
                onClick={() => handleTabClick(3)}
              >
                Experience
              </button>
            </div>
            {/* Tabs data section */}
            <div className="text-white  ">
              {activeTab === 1 && (
                <div className="grid grid-cols-5 mt-10 grid-rows-4 gap-3 justify-items-center">
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandJavascript className="text-[45px] hover:text-[#F0DB4F] hover:scale-125" />
                    <p className="text-[18px] font-bold">Javascript</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandHtml5 className="text-[45px] hover:text-[#f06529] hover:scale-125" />
                    <p className="text-[18px] font-bold">HTML</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandCss3 className="text-[45px] hover:text-[#2965f1] hover:scale-125" />
                    <p className="text-[18px] font-bold">CSS</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandBootstrap className="text-[45px] hover:text-[#563d7c] hover:scale-125" />
                    <p className="text-[18px] font-bold">Bootstrap</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandTailwind className="text-[45px] hover:text-my-theme hover:scale-125" />
                    <p className="text-[18px] font-bold">Tailwindcss</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandReact className="text-[45px] hover:text-[#61dafb] hover:scale-125" />
                    <p className="text-[18px] font-bold ">React Js</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandNodejs className="text-[45px] hover:text-[#8cc84b] hover:scale-125" />
                    <p className="text-[18px] font-bold">Node Js</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <SiExpress className="text-[45px] hover:text-[#6c6c6c] hover:scale-125" />
                    <p className="text-[18px] font-bold">Express Js</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandMongodb className="text-[45px] hover:text-[#47a248] hover:scale-125" />
                    <p className="text-[18px] font-bold">MongoDB</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandMysql className="text-[45px] hover:text-[#00758f] hover:scale-125" />
                    <p className="text-[18px] font-bold">MySQL</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandRedux className="text-[45px] hover:text-[#764abc] hover:scale-125" />
                    <p className="text-[18px] font-bold">Redux</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandGit className="text-[45px] hover:text-[#f05032] hover:scale-125" />
                    <p className="text-[18px] font-bold">Git</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <TbBrandGithub className="text-[45px]  hover:text-black hover:scale-125" />
                    <p className="text-[18px] font-bold">Github</p>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="mt-5 w-full">
                  <div className=" pl-5 pt-5">
                    {/* <p className="text-xl font-semibold">2023</p>
                    <p className="mb-4 text-2xl text-my-theme whitespace-nowrap">
                      Bachelors of Science in Information Technology
                    </p>

                    <h1 className="text-xl font-semibold ">2015</h1>
                    <p className="mb-4 text-2xl whitespace-nowrap text-my-theme">
                      HSC (Higher Secondary Certificate)
                    </p>

                    <h1 className="text-xl font-semibold">2013</h1>
                    <p className="mb-4 text-2xl whitespace-nowrap text-my-theme">
                      SSC (Secondary School Certificate )
                    </p> */}

                    <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
                      {/* Stack 1 */}
                      <div className="col-span-4 w-full h-full ">
                        <div className="w-full h-full bg-my-theme  rounded-md p-2 md:pl-4">
                          <h1 className="text-white text-lg font-medium pt-2">
                            2023
                          </h1>
                          <p className="text-dark-blue font-bold ">
                            Bachelor of Science in Information Technology
                          </p>
                          <p className="text-dark-blue text-sm font-semibold underline">
                            Mumbai University
                          </p>
                        </div>
                      </div>
                      <div className="relative col-span-1 flex justify-center items-center">
                        <div className="h-full w-1 bg-my-theme"></div>
                        <div className="absolute w-6 h-6 rounded-full font-bold bg-my-theme z-10 text-white text-center">
                          1
                        </div>
                      </div>
                      <div className="col-span-4 w-full h-full"></div>
                      {/* stack 2 */}
                      <div className="col-span-4 w-full h-full"></div>
                      <div className="relative col-span-1 flex justify-center items-center">
                        <div className="h-full w-1 bg-my-theme"></div>
                        <div className="absolute w-6 h-6 rounded-full font-bold bg-my-theme z-10 text-white text-center">
                          2
                        </div>
                      </div>
                      <div className="col-span-4 w-full h-full ">
                        <div className="w-full h-full bg-my-theme  rounded-md p-2 md:pl-4">
                          <h1 className="text-white text-lg font-medium pt-2">
                            2015
                          </h1>
                          <p className="text-dark-blue font-bold ">
                            HSC (Higher Secondary Certificate)
                          </p>
                          <p className="text-dark-blue text-sm font-semibold underline">
                            Mumbai University
                          </p>
                        </div>
                      </div>
                      {/* stack 3 */}
                      <div className="col-span-4 w-full h-full ">
                        <div className="w-full h-full bg-my-theme  rounded-md p-2 md:pl-4">
                          <h1 className="text-white text-lg font-medium pt-2">
                            2013
                          </h1>
                          <p className="text-dark-blue font-bold">
                            SSC (Secondary School Certificate )
                          </p>
                          <p className="text-dark-blue text-sm font-semibold underline">
                            Mumbai University
                          </p>
                        </div>
                      </div>
                      <div className="relative col-span-1 flex justify-center items-center">
                        <div className="h-full w-1 bg-my-theme"></div>
                        <div className="absolute w-6 h-6 font-bold rounded-full bg-my-theme z-10 text-white text-center">
                          3
                        </div>
                      </div>
                      <div className="col-span-4 w-full h-full"></div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="mt-5">
                  <p className="pl-5 pt-5">
                    Looking for job as a MERN stack developer or react js
                    developer
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
