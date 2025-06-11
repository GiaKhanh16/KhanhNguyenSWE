"use client";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import Applications from "@/components/Applications/apps";
import About from "@/components/About/About";
import Projects from "@/components/Project/projects";
import Gallery from "@/components/Gallery/Gallery";
import Image from "next/image";

const menuItems = [
  { id: "Applications", label: "Applications" },
  { id: "Projects", label: "Projects" },
  { id: "Gallery", label: "Gallery" },
  { id: "About", label: "About" },
];

const social = [
  { icon: "githubblye.png", url: "https://github.com/GiaKhanh16" },
  {
    icon: "linkedin.png",
    url: "https://www.linkedin.com/in/khanh-nguyen-8006a6359/",
  },
  { icon: "mail.png", url: "mailto:ngiakhanh18@gmail.com" },
  {
    icon: "cv.png",
    url: "https://www.canva.com/design/DAGqBba4LAw/ckKM_II4hgDvmR4ZOUcYXQ/edit?utm_content=DAGqBba4LAw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

export default function Home() {
  const [activeItem, setActiveItem] = useState("Applications");

  // Memoized renderContent to stabilize component output
  const renderContent = useMemo(() => {
    switch (activeItem) {
      case "Applications":
        return <Applications />;
      case "Projects":
        return <Projects />;
      case "About":
        return <About />;
      case "Gallery":
        return <Gallery />;
      default:
        return <Applications />;
    }
  }, [activeItem]);

  return (
    <div
      className="flex flex-col md:flex-row min-w-screen h-screen"
      // style={backgroundStyles}
    >
      {/* Sidebar that scrolls with the page */}
      <div className="ml-[10%] mt-[9%] lg:flex-[40%]">
        <div className="text">
          <div className="flex flex-row gap-2">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg">
              SwiftUI
            </div>
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg">
              React
            </div>
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg">
              Full Stack
            </div>
          </div>

          <h1 className="relative text-5xl font-bold my-5 py-1">
            <span className="bg-gradient-to-r from-black to-[#001E80] bg-clip-text text-transparent">
              Khánh Nguyễn
            </span>
          </h1>
        </div>
        <div className="mt-[5%] ">
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 cursor-pointer group"
                onClick={() => setActiveItem(item.id)}
              >
                <motion.div
                  className={"w-[1px] h-[1.5px] rounded-2xl"}
                  initial={false}
                  animate={{
                    width: activeItem === item.id ? 70 : 40,
                    backgroundColor:
                      activeItem === item.id ? "#020617" : "#6b7280",
                  }}
                  transition={{ duration: 0.15 }}
                />

                <motion.span
                  className={"text-sm font-medium tracking-wider"}
                  initial={false}
                  animate={{
                    color: activeItem === item.id ? "#020617" : "#9ca3af",
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {item.label}
                </motion.span>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-row gap-5 cursor-pointer">
          {social.map((item, index) => (
            <Image
              key={index}
              src={item.icon}
              alt={`water`}
              width={25}
              height={25}
              className="transform transition-transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-1"
              onClick={() => window.open(item.url, "_blank")}
            />
          ))}
        </div>
      </div>
      <div className="content ml-5 flex pl-3 mt-[9%] lg:flex-[60%] lg:w-full pb-10  ">
        <motion.div
          key={activeItem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1 }}
        >
          {renderContent}
        </motion.div>
      </div>
    </div>
  );
}
