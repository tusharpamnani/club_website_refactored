"use client"
import React from "react";

const data = [
  {
    imgUrl: "/Assets/Mentorship.png",
    title: "Mentorship",
    content:
      "We have arranged diverse platforms for you to ping us with your doubts. Feel free to reach out to us on any of these platforms.",
  },
  {
    imgUrl: "/Assets/Networking.png",
    title: "Networking",
    content:
      "Get to know the family! We would love to interact with you.",
  },
  {
    imgUrl: "/Assets/Projects.png",
    title: "Projects",
    content:
      "Explore your interests by building projects. For more inspiration, look into some of the most interesting projects that we have already worked on.",
  },
  {
    imgUrl: "/Assets/Upskill.png",
    title: "Upskill",
    content:
      "Widen your horizons and work on anything that interests you! Continue to improve with the help of the community. We got your back!",
  },
  {
    imgUrl: "/Assets/Vision.png",
    title: "Vision",
    content:
      "Enabling any student, from any department, from any background, to learn and love programming, to an extent where they can step up to teach others.",
  },
  {
    imgUrl: "/Assets/Events.png",
    title: "Events",
    content:
      "Check out the events lined up for you and join what you like. We would love for you to engage with us!",
  },
];

const AimComponent = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mt-10">Our Goals</h1>
      <div className="w-full flex gap-1 flex-wrap justify-evenly items-center">
        {data.map((item, index) => (
          <AimCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

interface AimCardProps {
  imgUrl: string;
  title: string;
  content: string;
}

const AimCard = ({ imgUrl, title, content }: AimCardProps) => {
  return (
    <div className="relative img-container text-white px-3 py-6 rounded-lg shadow-lg flex flex-col items-center text-center w-full md:w-1/3 lg:w-1/4">
      {/* Image */}
      <img
        src={imgUrl}
        alt={title}
        height="250px"
        width="250px"
        style={{
          animationFillMode:"forwards",
          filter:
            "drop-shadow(0 0 1.5rem #069F9F) drop-shadow(0 0 4.5rem #069F9F)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.classList.add("spin-bounce")

        }}
        onMouseOut={(e)=>{
          e.currentTarget.classList.remove("spin-bounce")
        }}
        className="mb-4 transition-all"
      />

      {/* Title with subtle effect */}
      <h1 className="text-gray-300 text-2xl font-semibold tracking-wider uppercase">
        {title}
      </h1>
      <div className="w-3/4 border-b border-gray-500 my-2"></div>

      {/* Content */}
      <p className="text-gray-400 text-lg leading-relaxed text-justify px-6">
        {content}
      </p>
    </div>
  );
};

export default AimComponent;
