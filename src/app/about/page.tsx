'use client'

import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from 'lucide-react';
import { TeamCard } from "../../components/About/team-card";
import teamData from "../../data/TeamMembers.json";
import useTypingEffect from "../../hooks/typinghook";
import type { TeamMember } from "../../types/team"

interface TeamSection {
  title: string;
  bgColorStyle: {
    background: string;
  };
  members: TeamMember[];
}

interface ScrollableSectionProps {
  section: TeamSection;
}

function ScrollableSection({ section }: ScrollableSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  const isSingleMember = section.members.length === 1;

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <div className="w-full text-center">
          <h2 className="text-white text-2xl font-semibold whitespace-pre-line mb-2">
            {section.title}
          </h2>
        </div>
        {section.members.length > 1 && (
          <button
            onClick={scroll}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Scroll right"
            data-testid={`scroll-button-${section.title}`}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
      <div
        ref={scrollRef}
        className={`flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-6 ${
          isSingleMember ? "justify-center" : ""
        }`}
      >
        {section.members.map((member) => (
          <TeamCard
            key={member.name}
            member={member}
            gradient={section.bgColorStyle.background}
          />
        ))}
      </div>
    </div>
  );
}

const TeamSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const typedHeading = useTypingEffect("Meet Our Team", 100, isVisible);
  const typedDescription = useTypingEffect(
    "Our diverse team of experts is dedicated to fostering innovation and excellence in technology and education.",
    20,
    isVisible
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "-100px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div
        ref={containerRef}
        className="relative h-screen w-full flex justify-center items-center flex-col"
        style={{
          backgroundImage: "url('/Assets/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {typedHeading}
            <span className="animate-blink ml-1">|</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            {typedDescription}
          </p>
        </div>
      </div>

      {/* Team Sections */}
      <div className="py-20 space-y-20 px-4 md:px-8 lg:px-16">
        {teamData.map((section: TeamSection) => (
          <ScrollableSection key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
