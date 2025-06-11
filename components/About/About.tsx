import React from "react";

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
  return (
    <div className="flex justify-center px-5">
      <div className="max-w-prose w-full flex flex-col gap-4">
        <h1 className="text-xl font-semibold">About Me 👨‍💻</h1>
        <div className="flex flex-col gap-3">
          <div className="text-slate-700 font-light">
            I live in Houston, Tx but can re-locate. Studied Computer Science at
            UMKC. I enjoy writing beautiful front end and beautiful backend. I
            want to make the most beautiful-est UXUI and useful apps in the
            world and fun and cool and unique and simple with great people. I
            have been working in the tennis industry because I love tennis, I've
            wrote some apps for tennis, I enjoyed it and I want to transition to
            full time software engineer.
          </div>
        </div>

        <h1 className="text-xl font-semibold">What Am I Building? ⌨️</h1>
        <div className="gap-3 flex flex-col">
          <div className="text-slate-700 font-light">
            The world really do need a REALLY good software for tennis court
            reservation and stuff so I'm doing that with a team.
          </div>
        </div>
        <h1 className="text-xl font-semibold">My Favorite Techologies:</h1>
        <div className="mt-2 flex flex-row flex-wrap gap-3 max-w-full">
          {chips.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-slate-200 bg-slate-900 rounded-full "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
