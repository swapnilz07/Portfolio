import codeboy from "../../src/images/codeboy.png";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const socialMediaData = [
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/swapnil-zakade/" },
    { icon: FaGithub, link: "https://github.com/swapnilz07" },
    // { icon: FaTwitter, link: "" },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/swapnil.z_07?igsh=MWl0d3ozNHUxNnNqNw==",
    },
  ];

  return (
    <>
      <section
        id="home"
        className="flex flex-col md:flex-row h-screen items-center md:px-[75px] px-[30px] py-20"
      >
        {/* My Name Section */}
        <div className="lg:w-[700px] md:w-[550px] md:items-start flex flex-col items-center ">
          <h1 className="lg:text-[56px] md:text-[45px] text-[32px] font-bold text-white ">
            Hi, I'm Swapnil Zakade
          </h1>

          <h3 className="md:text-[27px] text-lg text-my-theme font-bold whitespace-nwrap">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Passionate FullStack MERN Developer",
                1000,
                "I like Crafting intuitive web apps!",
                1000,
                "Bringing your ideas to life!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              startDelay={500}
              cursor={true}
              cursorChar="_"
              hideCursorAfterSequence={true}
              loopDelay={5000}
            />
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
            <button className="h-[50px] w-[170px] bg-my-theme hover:bg-dark-blue rounded-2xl text-dark-blue hover:text-my-theme hover:border-2 hover:border-my-theme font-extrabold text-[19PX] items-center tracking-tight my-4">
              View My Resume
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="lg:w-[400px] md:w-[350px] w-[380px]  lg:ml-52 h-auto mt-6">
          <img src={codeboy} alt="codeboy" />
        </div>
        <div className="absolute md:bottom-[40px] bottom-5 flex justify-between px-2 py-2 border-b-my-theme border-b-2 ">
          {socialMediaData.map((item, index) => (
            <NavLink key={index} to={item.link}>
              <item.icon
                size={40}
                className={
                  "border-[2px] text-my-theme  border-my-theme rounded-full p-1.5 mr-3 bg-transparent transition-all duration-300 hover:bg-my-theme hover:text-dark-blue hover:border-transparent hover:text-#081b29"
                }
              />
            </NavLink>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
