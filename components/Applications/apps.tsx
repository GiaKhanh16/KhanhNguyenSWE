"use client";

import React from "react";
import Image from "next/image";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

function Applications() {
  const apps = [
    {
      name: "MyTennisApp",
      icon: "/icon.png",
      smallIcon: ["/123.png", "/github.png"],
      features: [
        { text: "Match statistics & insights", icon: "📊" },
        { text: "Tournament scheduling", icon: "📅" },
        { text: "Leaderboards & achievements", icon: "🏅" },
        { text: "Player profiles and friend system", icon: "🤝" },
      ],
      chips: ["React Native", "Zustand", "Tailwind"],
    },
    {
      name: "CourtSide",
      icon: "/goodtry.png",
      smallIcon: ["/123.png", "/github.png"],
      features: [
        { text: "Live match updates", icon: "⚽" },
        { text: "Team management", icon: "👥" },
        { text: "Training schedules", icon: "🏋️" },
        { text: "Fan community", icon: "💬" },
      ],
      chips: ["NextJS", "ExpressJS", "Postgres"],
    },
    {
      name: "TennisNumbers",
      icon: "/day.png",
      smallIcon: ["/123.png", "/github.png"],
      features: [
        { text: "Live match updates", icon: "⚽" },
        { text: "Team management", icon: "👥" },
        { text: "Training schedules", icon: "🏋️" },
        { text: "Fan community", icon: "💬" },
      ],
      chips: ["SwiftUI", "SwiftData", "Swift Chart"],
    },
  ];

  return (
    <div className="flex flex-col  space-y-10">
      {apps.map((app, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex flex-row gap-10 align-center">
            <div className="font-medium text-gray-500 text-lg self-start text-start">
              {app.name}
            </div>
            <div className="flex items-center justify-center gap-3">
              {app.smallIcon.map((iconSrc, index) => (
                <img
                  key={index}
                  src={iconSrc}
                  width={20}
                  height={20}
                  alt={`${app.name} Small Icon ${index}`}
                  className="transition-transform duration-300 hover:scale-125 object-contain cursor-pointer"
                  style={{ display: "block" }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <Image
              src={app.icon}
              width={115}
              height={110}
              alt={`${app.name} Icon`}
              className="rounded-xl mt-5"
            />
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-6">
              {app.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  {feature.icon} {feature.text}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="mt-5">SwiftUi - React Native - Zustand</div> */}
          <div className="mt-5 flex flex-row gap-3">
            {app.chips.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full transition-colors duration-200 hover:bg-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Applications;
{
  /* <h2 className="text-xl font-semibold text-slate-700 mb-2">
                Welcome to {app.name}
              </h2> */
}
