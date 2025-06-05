"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

// Define the component sections with their titles
const componentSections = [
  {
    id: "bento",
    title: "Bento",
    component: BentoComponent,
  },
  {
    id: "cards",
    title: "Cards",
    component: CardsComponent,
  },
  {
    id: "gallery",
    title: "Gallery",
    component: GalleryComponent,
  },
  {
    id: "stats",
    title: "Statistics",
    component: StatsComponent,
  },
];

// export default function StickyTitleScroll() {
//   const [activeSection, setActiveSection] = useState("bento");
//   const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Set up intersection observer to detect which section is in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       {
//         root: containerRef.current,
//         threshold: 0.6, // Section is considered in view when 60% visible
//       }
//     );

//     // Observe all section elements
//     Object.values(sectionRefs.current).forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="flex h-[40rem] w-full gap-8 rounded-lg bg-slate-900 p-8">
//       {/* Scrollable component area (left side) */}
//       <div className="w-64 shrink-0">
//         <div className="sticky top-8">
//           <motion.div
//             key={activeSection}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="rounded-lg bg-slate-800 p-8 shadow-lg"
//           >
//             <h2 className="text-3xl font-bold text-white">
//               {
//                 componentSections.find(
//                   (section) => section.id === activeSection
//                 )?.title
//               }
//             </h2>
//           </motion.div>
//         </div>
//       </div>
//       <div
//         ref={containerRef}
//         className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600"
//       >
//         {componentSections.map((section) => (
//           <div
//             key={section.id}
//             id={section.id}
//             ref={(el) => (sectionRefs.current[section.id] = el)}
//             className="mb-24 min-h-[30rem]"
//           >
//             <section.component />
//           </div>
//         ))}
//       </div>

//       {/* Sticky title area (right side) */}
//     </div>
//   );
// }
export default function StickyTitleScroll() {
  const [activeSection, setActiveSection] = useState("bento");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.log("Container ref is not set");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            `Section ${entry.target.id} intersecting:`,
            entry.isIntersecting
          );
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.45, // Lowered threshold for better sensitivity
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log("Active section updated:", activeSection);
  }, [activeSection]);

  return (
    <div className="flex h-[40rem] w-full gap-8 rounded-lg bg-slate-900 p-8">
      {/* left side */}
      <div className="w-64 shrink-0">
        <div className="sticky top-8">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-slate-800 p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-white">
              {
                componentSections.find(
                  (section) => section.id === activeSection
                )?.title
              }
            </h2>
          </motion.div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600"
      >
        {componentSections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="mb-24 min-h-[30rem]"
          >
            <section.component />
          </div>
        ))}
      </div>
    </div>
  );
}

// Component implementations
function BentoComponent() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
      <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
        <img
          src="/placeholder.svg?height=400&width=600"
          alt="Featured image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="overflow-hidden rounded-xl">
        <img
          src="/placeholder.svg?height=200&width=300"
          alt="Image 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="overflow-hidden rounded-xl">
        <img
          src="/placeholder.svg?height=200&width=300"
          alt="Image 2"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function CardsComponent() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-xl bg-slate-800 p-6 shadow-lg">
          <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500"></div>
          <h3 className="mb-2 text-xl font-semibold text-white">
            Card Title {i}
          </h3>
          <p className="text-slate-300">
            This is a sample card with some content that demonstrates the
            layout.
          </p>
        </div>
      ))}
    </div>
  );
}

function GalleryComponent() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="aspect-square overflow-hidden rounded-lg">
          <img
            src={`/placeholder.svg?height=300&width=300&text=Image ${i}`}
            alt={`Gallery image ${i}`}
            className="h-full w-full object-cover transition-transform hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}

function StatsComponent() {
  const stats = [
    { label: "Users", value: "10.2k", change: "+12%" },
    { label: "Revenue", value: "$45.8k", change: "+8%" },
    { label: "Conversion", value: "3.2%", change: "+2%" },
    { label: "Growth", value: "120%", change: "+24%" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl bg-slate-800 p-6 shadow-lg">
          <p className="text-sm font-medium text-slate-400">{stat.label}</p>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <span className="ml-2 text-sm font-medium text-green-500">
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
