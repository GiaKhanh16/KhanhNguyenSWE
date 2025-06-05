"use client";
import { useState } from "react";
import { motion } from "motion/react";

const menuItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Project" },
  { id: "about", label: "About" },
];

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState("about");

  return (
    // <div className="min-h-screen bg-[#1a2332] flex items-center justify-center p-8">
    <nav className="space-y-4 ">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-6 cursor-pointer group"
          onClick={() => setActiveItem(item.id)}
        >
          {/* Line */}
          <motion.div
            className={"w-[1px] h-[1.5px] rounded-2xl"}
            initial={false}
            animate={{
              width: activeItem === item.id ? 70 : 40,
              backgroundColor: activeItem === item.id ? "#020617" : "#6b7280",
            }}
            transition={{ duration: 0.1 }}
          />

          {/* Text */}
          <motion.span
            className={"text-sm font-medium tracking-wider  "}
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
    // </div>
  );
}
