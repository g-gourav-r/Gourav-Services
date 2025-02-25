"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "I’m not technical. How can I manage my website?",
      answer:
        "A user manual will be provided to guide you through the process, making it easy to manage your website. Plus, full support will be available to help maintain and update your website for an entire year!",
    },
    {
      question: "How much does a website cost?",
      answer:
        "The cost depends on the design, features, and hosting plan. A customized quote can be provided based on specific needs.",
    },
    {
      question: "Will my website work on mobile phones?",
      answer:
        "Yes! The website will be fully responsive and optimized for all devices, including mobiles, tablets, and desktops.",
    },
    {
      question: "Can I update my website content myself?",
      answer:
        "Absolutely! The website will be set up with a user-friendly content management system (CMS), making it easy to update content whenever needed.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the complexity of the site. A basic website may take just a few days, while a more advanced one can take a few weeks.",
    },
    {
      question: "Will my website show up on Google?",
      answer:
        "Yes, it will be optimized for search engines (SEO) to improve visibility and ranking on Google.",
    },
    {
      question: "What if I need changes after the website is live?",
      answer:
        "No problem! Updates and ongoing support can be provided whenever needed.",
    },
    {
      question: "Can I connect my website to social media?",
      answer:
        "Definitely! Social media links, feeds, and sharing options can be integrated to keep everything connected.",
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full min-h-screen relative flex items-center justify-center overflow-auto my-8">
      <div className="bg-[#354555] text-white rounded-[20px] flex flex-col items-center justify-start text-center w-[90vw] min-h-[80vh] p-6 md:p-20 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#57aba4] to-[#3c8e82]">
              Questions
            </span>
          </h2>
          <p className="text-base md:text-lg">
            Find answers to your questions below.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="w-full space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="border-b border-gray-500 pb-2 transition-all"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 text-blue-400 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-200 text-base pb-4">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
