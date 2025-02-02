"use client";

import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

// Import all images
import EventsIcon from "/public/Assets/Events.png";
import ProjectsIcon from "/public/Assets/Projects.png";
import UpskillIcon from "/public/Assets/Upskill.png";
import NetworkingIcon from "/public/Assets/Networking.png";
import MentorshipIcon from "/public/Assets/Mentorship.png";
import VisionIcon from "/public/Assets/Vision.png";

const cardData = [
  { icon: EventsIcon, name: "Events", description: "Check out the events lined up for you and join what you like. We would love for you to engage with us!" },
  { icon: ProjectsIcon, name: "Projects", description: "Explore your interests by building projects. For more inspiration, look into some of the most interesting projects that we have already worked on." },
  { icon: UpskillIcon, name: "Upskill", description: "Widen your horizons and work on anything that interests you! Continue to improve with the help of the community. We got your back!" },
  { icon: NetworkingIcon, name: "Community", description: "Get to know the family! We would love to interact with you ;" },
  { icon: MentorshipIcon, name: "Mentorship", description: "We have arranged diverse platforms for you to ping us with your doubts. Feel free to reach out to us on any of these platforms." },
  { icon: VisionIcon, name: "Vision", description: "Enabling any student, from any department, from any background, to learn and love programming, to an extent where they can step up to teach others" },
];

const WhatDefinesUsComponent = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-background">
      <h2 className="text-4xl font-bold text-primary mb-8 text-center">What Defines Us</h2>
      <div className="grid grid-cols-3 gap-8 w-full max-w-6xl lg:grid-cols-2 md:grid-cols-1">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="perspective-1000 h-[300px] md:h-[250px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-full h-full text-center transition-transform duration-600 transform-style-3d hover:rotate-y-180">
              <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-6 rounded-lg bg-white/10 shadow-md">
                <Image src={card.icon} alt="" className="w-[200px] h-[200px] mb-4 object-contain filter drop-shadow-lg md:w-[180px] md:h-[180px]" unoptimized/>
                <h3 className="text-2xl font-bold text-foreground mb-2 md:text-xl">{card.name}</h3>
              </div>
              <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-6 rounded-lg bg-primary rotate-y-180">
                <p className="text-base text-background leading-relaxed md:text-sm">{card.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatDefinesUsComponent;
