import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Sammy",
      tags: ["Open source contribution", "SwiftUI"],
      description:
        "Sammy is a native iOS client for the Lemmy platform, a federated social link aggregator. Built entirely in Swift, it will offer a seamless UX with features like customizable feeds and real-time notifications. This app is not affiliated with LemmyNet or its developers.",
      githuburl: "https://github.com/GiaKhanh16/Sammy",
    },
    {
      title: "Bearclaw Gaming",
      tags: ["Mobile Developer - React Native"],
      description:
        "An app that centralizes tournament and event hosting for gamers. The main goal is to build a platform that represents the profile and skills of a gamer and connects them to the world.",
      githuburl: "https://bearclawesports.co/bcg",
    },
    {
      title: "Fetch",
      tags: ["A custom image caching in SwiftUI"],
      description:
        "Fetch is a project where I played around with File Manager in SwiftUI where you can have access to system file storage. I created an efficient caching/fetching system. Watch demo here:",
      link: {
        url: "https://www.youtube.com/watch?v=l0wIheNqv_Y",
        text: "Link",
      },
      githuburl: "https://github.com/GiaKhanh16/Fetch",
    },
    {
      title: "CourtBooker",
      tags: ["ExpressJS server"],
      description:
        "The Tennis Club Booking App is a web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). I wanted to build the backend features from scratch like CRUD features or authentication.",
      githuburl: "https://github.com/GiaKhanh16/CourtBooker",
    },
  ];
  const images = ["/123.png", "/123.png", "/123.png"];

  return (
    <div className="flex flex-col gap-3 px-3 sm:px-4 w-full max-w-3xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 p-3 sm:p-4 rounded-lg hover:shadow-sm transition-shadow duration-200 hover:bg-slate-100/20"
        >
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center gap-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <div className="flex flex-row flex-wrap gap-1">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs sm:text-sm font-medium text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.githuburl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Image
                src="/github.png"
                alt="GitHub icon"
                width={18}
                height={18}
                className="sm:w-5 sm:h-5 transition-transform duration-300 hover:scale-110 object-contain"
              />
            </a>
          </div>
          <div className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {project.description}
            {project.link && (
              <a
                href={project.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1 font-medium"
              >
                {project.link.text}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
