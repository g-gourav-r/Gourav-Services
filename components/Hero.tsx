"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import { sampleArcs, globeConfig } from "../data/index";

// Dynamically import the globe component with no SSR
const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

const Hero = () => {
  // Refs for animation targets
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Heading Animation - Slide in from left
    tl.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    )
      // Paragraph Animation - Fade up
      .fromTo(
        paragraphRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      // Globe Animation - Scale and fade in
      .fromTo(
        globeRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=1"
      );
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-wrap md:flex-nowrap w-full h-screen overflow-hidden"
    >
      {/* Left Side: Text Section */}
      <div className="w-full h-full md:w-1/2 p-8 flex items-center justify-center flex-col text-start">
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-800"
        >
          Accelerate Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#57aba4] to-[#3c8e82]">
            Business Growth
          </span>{" "}
          and Reach More Customers
        </h1>
        <p ref={paragraphRef} className="text-lg md:text-xl text-gray-600 mt-4">
          Take your business to the next level with a powerful online presence.
          Connect with your audience, boost visibility, and drive rapid growth.
          Let us help you succeed in the digital world.
        </p>
      </div>

      {/* Right Side: Globe Section */}
      <div className="w-full h-full md:w-1/2 p-4 relative overflow-hidden">
        <div
          ref={globeRef}
          className="absolute inset-0 m-auto flex items-center justify-center w-full h-full"
        >
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute w-full bottom-0 inset-x-0 h-40 pointer-events-none select-none z-40" />
      </div>
    </section>
  );
};

export default Hero;
