"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // Ref for the container
  const boxRef = useRef(null);

  useEffect(() => {
    // Expand on scroll
    gsap.to(boxRef.current, {
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      margin: "0px",
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%", // Start expanding earlier
        end: "top 25%",
        scrub: 1.5, // Smooth transition
        markers: true, // Debugging markers
      },
    });

    // Shrink on scroll
    gsap.to(boxRef.current, {
      width: "50vw",
      height: "50vh",
      borderRadius: "20px",
      margin: "50px auto",
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "bottom 50%", // Start shrinking later
        end: "bottom 0%", // Smooth shrinking transition
        scrub: 1.5, // Smooth transition
      },
    });
  }, []);

  return (
    <section className="w-full h-screen relative flex items-center justify-center">
      <div
        ref={boxRef}
        className="bg-[#354555] w-[50vw] h-[50vh] rounded-[20px] shadow-2xl flex items-center justify-center text-center text-white text-3xl font-bold"
      >
        Our Services
      </div>
    </section>
  );
};

export default Services;
