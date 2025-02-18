import {
  FaCode,
  FaMicrochip,
  FaGlobe,
  FaSearch,
  FaPlane,
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "WebApiProject",
      icon: <FaCode />,
      description:
        "A classic React frontend and .NET Core backend application.",
      link: "https://github.com/Rostbif/WebApiProject",
    },
    {
      id: 2,
      name: "Microservices-WebSocket",
      icon: <FaMicrochip />,
      description:
        "A project to practice microservices, WebSockets, and graph manipulations using .NET Core.",
      link: "https://github.com/Rostbif/Microservices-WebSocket",
    },
    {
      id: 3,
      name: "OfirAdanyWebsite",
      icon: <FaGlobe />,
      description:
        "A personal website built to practice the MERN stack (MongoDB, Express, React, Node) and ASP.NET Core.",
      link: "https://github.com/Rostbif/OfirAdanyWebsite",
    },
    {
      id: 4,
      name: "WebCrawler",
      icon: <FaSearch />,
      description:
        "A simple web crawler CLI built with Node.js that extracts image URLs from a given website.",
      link: "https://github.com/Rostbif/WebCrawler",
    },
    {
      id: 5,
      name: "FlightsWebServer",
      icon: <FaPlane />,
      description:
        "A web server to pull information about flights using Node.js and Express.",
      link: "https://github.com/Rostbif/FlightsWebServer",
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      {/* <hr className="mb-8" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
          >
            <div className="flex items-center mb-2">
              <div className="mr-2">{project.icon}</div>
              <h4 className="text-2xl font-bold">{project.name}</h4>
            </div>
            <p className="flex-grow">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
