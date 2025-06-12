import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function About() {
  const chips = [
    "Swift",
    "Python",
    "Javascript/TypeScript",
    "ReactJS",
    "SwiftUI",
    "Zustand",
    "Postgres",
    "Tailwind",
    "ExpressJS",
    "SwiftData",
    "AsyncStorage",
    "Swift Testing",
    "XCTest",
    "Swift Concurrency",
    "Testflight",
    "ActivityKit",
  ];
  const images = ["/Gallery/coding.jpg", "/Gallery/coding4.jpg", "/Gallery/me2.jpg"];
  return (
    <div className="flex justify-center px-5 pb-10">
      <div className="max-w-prose w-full flex flex-col gap-4">
        <h1 className="text-xl font-semibold">About Me 👨‍💻</h1>
        <div className="flex flex-col gap-3">
          <div className="text-slate-700 font-light">
            I want to make a living writing code or playing around with techs in
            general. I build apps with lots of emphasis on look, it&apos;s the
            most important thing, look is. I love beautiful stuff, also love A5
            Wagyu, my work is definitely A5 Wagyu. Living in Houston but would
            love to remote work.
          </div>
        </div>

        <h1 className="text-xl font-semibold">What Am I Building? ⌨️</h1>
        <div className="gap-3 flex flex-col">
          <div className="text-slate-700 font-light">
            The world really does need a REALLY good software for tennis court
            reservation and stuff so I&apos;m doing that with a team.
          </div>
        </div>
        <h1 className="text-xl font-semibold">My Favorite Technologies:</h1>
        <div className="mt-2 flex flex-row flex-wrap gap-3 max-w-full">
          {chips.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-slate-200 bg-slate-900 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-row mt-4">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: -50,
                rotate: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? 3 : -3,
              }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Image
                src={image}
                width={200}
                height={100}
                alt="about"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
// I live in Houston, TX but can relocate. Studied Computer Science at
// UMKC. I enjoy writing beautiful front-end and back-end code. I
// want to make the most beautiful UX/UI and useful apps in the
// world that are fun, cool, unique, and simple, with great people. I
// have been working in the tennis industry because I love tennis.
// I have written some apps for tennis, enjoyed it, and want to
// transition to a full-time software engineer role.
