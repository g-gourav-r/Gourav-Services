"use client";
import React from "react";

const Services = () => {
  // Content Variables
  const cardData = [
    {
      title: "Web Development",
      subtitle: "Custom & Responsive",
      description:
        "We build custom websites that look great and work well on all devices. Whether you need an online store or a unique web app, we make sure it’s fast and user-friendly.",
    },
    {
      title: "SEO & Marketing",
      subtitle: "Boost Visibility",
      description:
        "Our SEO and digital marketing services help your site rank higher. We optimise content and enhance visibility to bring more visitors and customers.",
    },
    {
      title: "Local Google Setup",
      subtitle: "Local Reach",
      description:
        "We create and verify your Google Business profile, making it easier for local customers to find you on Google Maps and local searches.",
    },
    {
      title: "Tags & Analytics",
      subtitle: "Data-Driven Decisions",
      description:
        "Understand visitor behaviour with Google Tags & Analytics. We set up tracking tools to help you make better marketing decisions.",
    },
  ];

  return (
    <section className="w-full min-h-screen relative flex items-center justify-center overflow-auto my-8">
      <div className="bg-[#354555] text-white rounded-[20px] flex flex-col items-center justify-around text-center w-[90vw] min-h-[80vh] p-6 md:p-20 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#57aba4] to-[#3c8e82]">
            Services
          </span>
        </h2>
        <p className="text-base md:text-lg">
          Discover how our expert services in website development, SEO, Google
          Maps optimisation, and business setup can help you attract more
          customers and grow your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#d3c7af] w-full rounded-[20px] overflow-hidden shadow-xl relative transition-transform transform hover:scale-105 min-h-[350px] flex flex-col"
            >
              <div className="p-6 flex flex-col h-full justify-around">
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold text-[#2f3a4c] mb-1">
                    {card.title}
                  </h1>
                  <p className="text-[#2f3a4c] tracking-widest font-medium text-sm">
                    {card.subtitle}
                  </p>
                  {/* Decorative Line */}
                  <div className="border-b-2 border-[#2f3a4c] w-10 mx-auto my-2" />
                </div>
                {/* Added Margin for Space Between Subtitle and Content */}
                <p className="text-[#2f3a4c] text-sm mt-4">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
