import React from "react";

const WhyDoYouNeedAWebsite = () => {
  const reasons = [
    {
      title: "Build Credibility and Trust",
      description:
        "A professional website establishes your brand’s credibility, making your business appear more trustworthy and reliable.",
    },
    {
      title: "Reach a Wider Audience",
      description:
        "A website makes your business accessible to a global audience, expanding your reach beyond local customers.",
    },
    {
      title: "Showcase Services",
      description:
        "Display your products or services with detailed descriptions, images, and customer testimonials, influencing purchasing decisions.",
    },
    {
      title: "Available 24/7",
      description:
        "Your website acts as a digital storefront that's open 24/7, allowing potential customers to learn about your business anytime, anywhere.",
    },
    {
      title: "Effective Marketing Tool",
      description:
        "A website integrates with digital marketing strategies like SEO, social media, and email marketing, driving more traffic and leads.",
    },
    {
      title: "Gain Customer Insights",
      description:
        "Tools like Google Analytics help you understand customer behavior, preferences, and needs, enabling data-driven decisions.",
    },
  ];

  return (
    <section className="w-full min-h-screen relative flex items-center justify-center overflow-auto my-8">
      <div className="bg-[#354555] text-white rounded-[20px] flex flex-col items-center justify-around text-center w-[90vw] min-h-[80vh] p-6 md:p-20 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Do You Need a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#57aba4] to-[#3c8e82]">
            Website ?
          </span>
        </h2>
        <p className="text-base md:text-lg">
          Discover the key reasons why having a website is essential for your
          business growth and success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#d3c7af] shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div
                className={` text-white p-6 min-h-[80px] flex items-center justify-center`}
              >
                <h3 className="text-2xl font-bold text-[#354555]">
                  {reason.title}
                  <div className="border-b-2 border-[#2f3a4c] w-10 mx-auto mt-5" />
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDoYouNeedAWebsite;
