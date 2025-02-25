"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const LooseThread = () => {
  // Optional: safeguard against window being undefined,
  // though with "use client" this should be fine.
  const controlPointInitialX =
    typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const svgRef = useRef<SVGSVGElement | null>(null);
  const controlPointRef = useRef({ x: controlPointInitialX, y: 50 });
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    // Function to update the path dynamically
    const updatePath = () => {
      const startX = window.innerWidth * 0.1;
      const startY = 50;
      const endX = window.innerWidth * 0.9;
      const endY = 50;

      path?.setAttribute(
        "d",
        `M ${startX},${startY} Q ${controlPointRef.current.x},${controlPointRef.current.y} ${endX},${endY}`
      );
    };

    // Mouse move to follow the midpoint
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(controlPointRef.current, {
        x: clientX,
        y: clientY - svg!.getBoundingClientRect().top,
        duration: 0.2,
        ease: "power2.out",
        onUpdate: updatePath,
      });
    };

    // Mouse leave to bounce back the midpoint
    const handleMouseLeave = () => {
      gsap.to(controlPointRef.current, {
        x: window.innerWidth / 2,
        y: 50,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        onUpdate: updatePath,
      });
    };

    // Event Listeners
    svg?.addEventListener("mousemove", handleMouseMove);
    svg?.addEventListener("mouseleave", handleMouseLeave);

    updatePath(); // Initial Path

    return () => {
      svg?.removeEventListener("mousemove", handleMouseMove);
      svg?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="hidden md:flex w-full h-[100px] items-center justify-center">
      <svg ref={svgRef} width="100%" height="100" className="overflow-visible">
        <path
          ref={pathRef}
          stroke="#354555"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default LooseThread;
