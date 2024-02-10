import { useState } from "react";

import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandBootstrap,
  TbBrandTailwind,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandNextjs,
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

  const icons = [
    { icon: TbBrandJavascript, name: "Javascript", color: "#F0DB4F" },
    { icon: TbBrandHtml5, name: "HTML", color: "#f06529" },
    { icon: TbBrandCss3, name: "CSS", color: "#2965f1" },
    { icon: TbBrandBootstrap, name: "Bootstrap", color: "#563d7c" },
    { icon: TbBrandTailwind, name: "Tailwindcss", color: "#38b2ac" },
    { icon: TbBrandReact, name: "React Js", color: "#61dafb" },
    { icon: TbBrandNodejs, name: "Node Js", color: "#8cc84b" },
    { icon: SiExpress, name: "Express Js", color: "#6c6c6c" },
    { icon: TbBrandMongodb, name: "MongoDB", color: "#47a248" },
    { icon: TbBrandNextjs, name: "Next.js", color: "white" },
    { icon: TbBrandRedux, name: "Redux", color: "#764abc" },
    { icon: TbBrandGit, name: "Git", color: "#f05032" },
    { icon: TbBrandGithub, name: "Github", color: "black" },
  ];

  return (
    <>
      <section
        id="about"
        className="flex flex-col md:flex-row h-screen md:px-[75px] px-[30px] py-20"
      >
        <div className="pt-5 md:pt-28 md:max-w-[350px] lg:max-w-screen-md">
          <h1 className="md:text-[35px] lg:text-[50px] text-[30px] text-white font-bold font-serif md:text-left text-center">
            About Me
          </h1>
          <p className="text-white md:text-[14px] lg:text-[17px] text-[18px] md:text-left text-center ">
            <span className="text-my-theme font-bold md:text-[16px] lg:text-[22px] text-[20px]">
              Hello! my name is Swapnil
            </span>{" "}
            a passionate MERN Full Stack Developer.With a strong foundation in
            both front-end and back-end technologies, I specialize in building
            dynamic and responsive user interfaces using React and harnessing
            the versatility of Node.js and Express.js on the server side.
            MongoDB is my go-to database for storing and retrieving data
            efficiently.
          </p>
          <p className="text-white md:text-[14px] lg:text-[17px] text-[18px] md:text-left text-center md:pt-3">
            <span className="text-my-theme font-bold  md:text-[16px] lg:text-[22px] text-[20px]">
              As a fullstack Developer
            </span>{" "}
            I enjoy making interactive and user-friendly websites/web apps. My
            goal is to always build things that are scalable and interactive for
            Users.
          </p>
          <p className="text-white md:text-[14px] lg:text-[17px] text-[18px] md:text-left text-center md:pt-3">
            <span className="text-my-theme font-bold mt-2 md:text-[16px] lg:text-[22px] text-[20px]">
              Get in touch :{" "}
            </span>{" "}
            <a
              href="mailto:swapnil.zakade.33@gmail.com"
              className="hover:underline hover:text-my-theme hover:font-semibold"
            >
              swapnil.zakade.33@gmail.com
            </a>
          </p>
        </div>

        {/* Tabs Section */}
        <div
          id="about"
          className="flex flex-col pt-5 md:pt-28 h-[550px] w-full md:w-[600px] md:ml-14"
        >
          <div className="flex justify-evenly text-white lg:text-[18px] border-my-theme rounded-lg p-2 border-2">
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
          <div className="text-white">
            {activeTab === 1 && (
              <div className="grid grid-cols-5 pt-2 grid-rows-4 gap-3 justify-items-center">
                {icons.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                  >
                    <item.icon
                      className={`text-[60px] md:text-[45px] hover:scale-125`}
                      style={{ color: item.color }}
                    />
                    <p className="text-[18px] font-bold hidden lg:block">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="pt-3">
                <div className="">
                  <div className="max-w-7xl mx-auto grid grid-cols-9">
                    {/* Stack 1 */}
                    <div className="col-span-4 w-full h-full">
                      <div className="w-full h-full bg-my-theme rounded-md p-2 md:pl-4">
                        <h1 className="text-white text-lg font-medium">2023</h1>
                        <p className="text-dark-blue font-bold">Bsc IT</p>
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
                    <div className="col-span-4 h-full"></div>
                    <div className="relative col-span-1 flex justify-center items-center">
                      <div className="h-full w-1 bg-my-theme"></div>
                      <div className="absolute w-6 h-6 rounded-full font-bold bg-my-theme z-10 text-white text-center">
                        2
                      </div>
                    </div>
                    <div className="col-span-4 w-full h-full ">
                      <div className="w-full h-full bg-my-theme  rounded-md p-2 md:pl-4">
                        <h1 className="text-white text-lg font-medium">2015</h1>
                        <p className="text-dark-blue font-bold ">HSC</p>
                        <p className="text-dark-blue text-sm font-semibold underline">
                          Mumbai University
                        </p>
                      </div>
                    </div>
                    {/* stack 3 */}
                    <div className="col-span-4 w-full h-full">
                      <div className="w-full h-full bg-my-theme p-2 rounded-md md:pl-4">
                        <h1 className="text-white text-lg font-medium pt-2">
                          2013
                        </h1>
                        <p className="text-dark-blue font-bold">SSC</p>
                        <p className="text-dark-blue text-sm font-semibold underline pb-2">
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
              <div className="pt-2">
                <h4 className="text-md underline  text-my-theme font-bold">
                  - CAPRITECH GLOBAL SERVICES PRIVATE LIMITED
                </h4>
                <p className="text-sm">( From July 28th to present )</p>
                <ul className="list-disc pl-6">
                  <li className="pt-2">
                    Developing MERN stack applications for web and mobile
                    platforms, leveraging Next.js for enhanced performance and
                    SEO optimization.
                  </li>
                  <li className="pt-2">
                    Building responsive and user-friendly web interfaces using
                    React.js and Next.js.
                  </li>
                  <li className="pt-2">
                    Working on React Native applications using Expo CLI to
                    create user-friendly mobile applications.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
