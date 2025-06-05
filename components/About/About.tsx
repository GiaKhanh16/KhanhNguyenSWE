import React from "react";

function About() {
  return (
    <div className="flex justify-center px-4">
      <div className="max-w-prose w-full flex flex-col gap-4">
        <h1 className="text-xl font-bold">About Me 👨‍💻</h1>
        <div className="flex flex-col gap-3">
          <div className="text-slate-700 font-light">
            I want to make the most beautiful-est and useful apps in the world
            and fun and cool and unique and simple. I Studied Computer Science
            at UMKC. I’m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </div>
        </div>

        <h1 className="text-xl font-bold">What Am I Coding?</h1>
        <div className="gap-3 flex flex-col">
          <div className="text-slate-700 font-light">
            The world really do need a REALLY good software for tennis court
            reservation and stuff so I'm doing that with a team.
          </div>
        </div>
        <h1 className="text-xl font-bold">My Tech Stack:</h1>
      </div>
    </div>
  );
}

export default About;
