"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

// Register GSAP Plugin (ensure this only runs on the client)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioScroll() {
  // Refs for the animated container and the outer scroll container
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Array of project names to display
  const projects = [
    "Agino Tech",
    "Sindhu Eye Hospitals",
    "National Video and Photo Studio",
  ];

  useEffect(() => {
    // This will only run on the client
    setIsMobile(window.innerWidth < 768);

    if (!isMobile && containerRef.current && outerRef.current) {
      // Calculate the horizontal scroll distance.
      // For 3 slides, we want to move by (3-1) * 100vw = 200vw.
      const scrollDistance = (projects.length - 1) * window.innerWidth;

      gsap.to(containerRef.current, {
        x: -scrollDistance, // Translates the container by the computed scroll distance
        ease: "none",
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          // The end is dynamically set based on the computed scroll distance.
          end: `+=${scrollDistance}`,
          scrub: 2,
          pin: true,
          markers: true, // Remove or set to false in production
        },
      });
    }
  }, [isMobile, projects.length]);

  return (
    <section className="w-full flex items-center justify-center my-8">
      {/* Outer container for the portfolio section */}
      <div className="bg-[#354555] text-white rounded-[20px] w-[90vw] min-h-[80vh] p-6 md:p-20 relative overflow-hidden">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Portfolio
        </h2>

        {/* GSAP Horizontal Scroll Container */}
        <div ref={outerRef} className="relative w-full overflow-x-hidden">
          <div
            ref={containerRef}
            className={`${isMobile ? "flex flex-col" : "flex"} h-screen`}
            style={isMobile ? {} : { width: `${projects.length * 100}vw` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-screen h-screen flex items-center justify-center relative"
              >
                {/* Marquee Background */}
                <div className="absolute z-0 top-1/2 -translate-y-1/2 w-full text-center text-9xl font-bold text-gray-200 whitespace-nowrap opacity-20">
                  <Marquee gradient={false} speed={100}>
                    {project} &nbsp;
                  </Marquee>
                </div>
                {/* Portfolio Card */}
                <div className="portfolio-card z-2 w-80 h-96 bg-white shadow-xl rounded-xl flex items-center justify-center text-2xl font-bold p-4 m-4">
                  {project}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
