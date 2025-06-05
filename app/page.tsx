"use client";
import { useState } from "react";
import { motion } from "motion/react";
// import { backgroundStyles } from "./layout";
import { BentoGrid, BentoGridItem } from "@/components/bento";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import LayoutGridDemo from "@/components/Grid/layoutdemo";
import { WobbleCardDemo } from "@/components/Woble/demo";
import Test from "./apple/page";
import Applications from "@/components/Applications/apps";
import About from "@/components/About/About";

const menuItems = [
  { id: "Applications", label: "Applications" },
  { id: "Writing", label: "Writing" },
  { id: "About", label: "About" },
];

const social = [
  { icon: "githubblye.png", url: "" },
  { icon: "linkedin.png", url: "" },
  { icon: "mail.png", url: "" },
  { icon: "cv.png", url: "" },
];

export default function Home() {
  const [activeItem, setActiveItem] = useState("Applications");

  // Function to render content based on active item
  const renderContent = () => {
    switch (activeItem) {
      case "Applications":
        return <Applications />;
      case "Writing":
        return (
          <BentoGrid className="max-w-4xl mx-auto md:grid borderd w-full pr-10">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.car_description}
                modal_description={item.modal_description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        );
      case "About":
        return <About />;
      default:
        return <WobbleCardDemo />;
    }
  };

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
                  transition={{ duration: 0.1 }}
                />

                <motion.span
                  className={"text-sm font-medium tracking-wider"}
                  initial={false}
                  animate={{
                    color: activeItem === item.id ? "#020617" : "#9ca3af",
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {item.label}
                </motion.span>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-row gap-5 cursor-pointer">
          {social.map((item, index) => (
            <img
              key={index}
              src={item.icon}
              className="w-[25px] transform transition-transform duration-300 ease-in-out hover:scale-125 hover:-translate-y-1"
              onClick={() => window.open(item.url, "_blank")} // Opens URL in a new tab
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
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src="./test4.png"
      className="w-full h-full rounded-xl object-[center_35%] object-cover"
    />
  </div>
);

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const items = [
  {
    title: "How I coded MyTennisApp",
    car_description:
      "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    modal_description: <DummyContent />,
  },
  {
    title: "TennisNumbers",
    car_description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    modal_description: <DummyContent />,
  },
  {
    title: "SwiftUI vs React Native",
    car_description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    modal_description: <DummyContent />,
  },
  {
    title: "The Power of Communication",
    car_description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    modal_description: <DummyContent />,
  },
  {
    title: "The Pursuit of Knowledge",
    car_description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    modal_description: <DummyContent />,
  },
];
