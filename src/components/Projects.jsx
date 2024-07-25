import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import Card from "./Card";
import portfolio from "../../src/images/portfolio.png";
import FinanceApp from "../../src/images/FinanceAppImage.png";
import weatherApp from "../../src/images/WeatherApp.png";
import tictactoe from "../../src/images/Tictacttoe.png";
import twitterClone from "../../src/images/TwitterClone.png";
import youtubeClone from "../../src/images/YoutubeClone.png";

import reactLogo from "../../src/images/ReactLogo.jpg";
import nextLogo from "../../src/images/NextLogo.jpg";
import nodeLogo from "../../src/images/NodeLogo.jpg";
import expressLogo from "../../src/images/ExpressLogo.jpg";
import tailwindLogo from "../../src/images/TailwindLogo.jpg";
import muiLogo from "../../src/images/MuiLogo.jpg";
import mongodb from "../../src/images/MongoLogo.jpg";
import viteLogo from "../../src/images/ViteLogo.jpg";
import reactQuery from "../../src/images/react_query.jpg";

const Projects = () => {
  const projectsDatas = [
    {
      id: 1,
      title: "Twitter Clone",
      description: [
        "Developed a fully responsive Twitter clone using React JS, Tailwind CSS, Daisy UI, and React Query for efficient data fetching.",
        "Implemented Backend using Node JS and Express JS, with MongoDB for database management.",
      ],
      tech: [
        { src: reactLogo, alt: "React Js" },
        { src: viteLogo, alt: "Vite" },
        { src: reactQuery, alt: "React Query" },
        { src: tailwindLogo, alt: "Tailwind CSS" },
        { src: nodeLogo, alt: "Node.js" },
        { src: expressLogo, alt: "Express.js" },
        { src: mongodb, alt: "MongoDB" },
      ],
      imageSrc: twitterClone,
      githubLink: "https://github.com/swapnilz07/twitter-clone-mern",
      liveLink: "https://tic-tac-toe-beta-flame.vercel.app/",
    },
    {
      id: 2,
      title: "Youtube Clone",
      description: [
        "Built a YouTube API-powered application using React JS and Tailwind CSS for a fully responsive experience..",
      ],
      tech: [
        { src: reactLogo, alt: "React Js" },
        { src: tailwindLogo, alt: "Tailwind CSS" },
      ],
      imageSrc: youtubeClone,
      githubLink: "https://github.com/swapnilz07/twitter-clone-mern",
      liveLink: "https://tic-tac-toe-beta-flame.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      description: [
        "Live Weather Forecasts : Real-time updates on current weather conditions..",
      ],
      tech: [
        { src: nextLogo, alt: "Next js" },
        { src: reactLogo, alt: "React" },
        { src: tailwindLogo, alt: "Tailwind CSS" },
      ],
      imageSrc: weatherApp,
      githubLink: "https://github.com/swapnilz07/Weather-App",
      liveLink: "https://weather-app-iota-mauve.vercel.app/",
    },
    {
      id: 4,
      title: "My Portfolio",
      description: [
        "A cool website showing all my interesting coding projects!",
        "A nice place to see the cool stuff I've made with code.",
        "Check out my skills and projects in a fun and visual way!",
      ],
      tech: [
        { src: reactLogo, alt: "React" },
        { src: viteLogo, alt: "Vite" },
        { src: tailwindLogo, alt: "Tailwind CSS" },
        { src: nodeLogo, alt: "Node.js" },
        { src: expressLogo, alt: "Express.js" },
        { src: mongodb, alt: "MongoDB" },
      ],
      imageSrc: portfolio,
      githubLink: "https://github.com/swapnilz07/Portfolio/",
      liveLink: "https://portfolio-mu-eosin-52.vercel.app/",
    },
    {
      id: 5,
      title: "Finance App",
      description: [
        "Develop a functional finance-based web application for clients.",
        "Bank and NBFC Exploration : Discover top finance solutions.",
        "Secure Authentication : User data protection with secure login.",
      ],
      tech: [
        { src: reactLogo, alt: "React" },
        { src: muiLogo, alt: "Material UI" },
        { src: nodeLogo, alt: "Node.js" },
        { src: expressLogo, alt: "Express.js" },
        { src: mongodb, alt: "MongoDB" },
      ],
      imageSrc: FinanceApp,
      githubLink: "https://github.com/swapnilz07/finance-app-client-side",
      liveLink: "",
    },
    {
      id: 6,
      title: "Tic Tac Toe",
      description: [
        "Developed a classic Tic Tac Toe game using React.",
        "Created an interactive user interface allowing players to click on cells to make their moves.",
      ],
      tech: [
        { src: reactLogo, alt: "React Js" },
        { src: tailwindLogo, alt: "Tailwind CSS" },
      ],
      imageSrc: tictactoe,
      githubLink: "https://github.com/swapnilz07/tic-tac-toe",
      liveLink: "https://tic-tac-toe-beta-flame.vercel.app/",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto items-center md:px-[75px] px-[30px] py-28"
      >
        {projectsDatas.map((project, index) => (
          <Card key={index} {...project} openModal={() => openModal(project)} />
        ))}
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 mx-1">
          <div className="bg-dark-blue p-8 rounded-lg relative">
            <h2 className="text-2xl text-my-theme font-semibold">
              {selectedProject.title}
            </h2>
            <ul className="list-disc ml-4">
              {selectedProject.description.map((point, index) => (
                <li key={index} className="text-base text-my-theme">
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-4">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 mr-4"
              >
                GitHub
              </a>
              {/* GitHub Link Button */}
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Live Link
              </a>
            </div>

            {/* Divider */}
            <hr className="my-4 border-gray-500" />

            <div className="flex justify-center mt-2">
              {selectedProject.tech &&
                selectedProject.tech.map((techItem, index) => (
                  <div key={index} className="relative inline-block">
                    <img
                      className="h-10 w-14 mr-2"
                      src={techItem.src}
                      alt={techItem.alt}
                      title={techItem.alt}
                    />
                    <span className="absolute -top-0 left-full bg-black text-white text-xs px-1 py-0.5 rounded whitespace-nowrap opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 transform translate-y-[-100%]">
                      {techItem.alt}
                    </span>
                  </div>
                ))}
            </div>

            <button
              className="absolute top-2 right-2 text-my-theme hover:text-sky-700"
              onClick={closeModal}
            >
              <FaTimes size={30} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
