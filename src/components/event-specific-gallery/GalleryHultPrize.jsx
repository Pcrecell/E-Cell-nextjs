"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const HeroSection = () => {

  return (
    <div className="relative mt-16 px-2 sm:px-3">
      <div className="relative w-full rounded-t-[80px] sm:rounded-t-[140px] border border-white overflow-hidden bg-black p-[2px] sm:p-[3px] h-[300px] sm:h-[calc(100vh-40px)] flex items-center justify-center">
        {/* Responsive Image */}
        <img
          src="https://ik.imagekit.io/d73k0qzwc/DSC_0551%202.png"
          alt="HultPrize Panel Discussion"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* E-SUMMIT Text Overlay */}
        <div className="absolute bottom-4 left-4 z-10">
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold font-[Bebas Neue] text-white tracking-wider">
            HULT-PRIZE
          </h1>
        </div>
      </div>
    </div>
  );
};

const StatsSection = ({ mode, onHoverChange, selectedMode, onModeSelect }) => {
  const statsData = {
    default: {
      count: 100,
      plusSize: "text-[80px]",
      mainSize: "text-[130px]",
      label: "CHANGEMAKER TEAMS IN OUR PAST EVENT",
    },
    alt: {
      count: 30,
      plusSize: "text-[60px]",
      mainSize: "text-[100px]",
      label: "PITCH SESSIONS CONNECTED",
    },
  };

  const current = statsData[mode || "default"];

   const handleHover = (type) => {
     onHoverChange(type);
   };

   const handleClick = (type) => {
     onModeSelect(type);
   };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-16 px-4 items-start">
      {/* Left Text Section */}
            {/* CTA Buttons */}
      <div className="flex flex-col items-center text-center space-y-10">
      <div className="mt-4 flex flex-row gap-4 px-4 sm:px-6 items-center justify-center">
        <button
          onMouseEnter={() => handleHover("default")}
          onMouseLeave={() => handleHover(selectedMode)}
          onClick={() => handleClick("default")}
          className={`px-6 py-2 rounded-full font-[syne] text-sm sm:text-base transition-colors ${
            (mode === "default") 
              ? "bg-[#FE0EE0] text-white" 
              : "bg-neutral-800 text-white"
          }`}
        >
          TEAMS
        </button>
        <button
          onMouseEnter={() => handleHover("alt")}
          onMouseLeave={() => handleHover(selectedMode)}
          onClick={() => handleClick("alt")}
          className={`px-6 py-2 rounded-full font-[syne] text-sm sm:text-base transition-colors ${
            (mode === "alt") 
              ? "bg-[#FE0EE0] text-white" 
              : "bg-neutral-800 text-white"
          }`}
        >
          SPEAKERS
        </button>
      </div>
        <div className="flex flex-col items-center space-y-3">
          <p className="text-[#FF0EE0] text-3xl sm:text-5xl font-bold tracking-wide">
            KIIT E-CELL
          </p>
          <p className="text[#FF0EE0] text-2xl sm:text-3xl font-semibold">
            presents
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-2"
          >
            <p className="font-extrabold text-white flex items-end justify-center">
              <span className={`leading-none ${current.mainSize}`}>
                {current.count}
              </span>
              <span
                className={`text-[#FF0EE0] ml-2 leading-none ${current.plusSize}`}
              >
                +
              </span>
            </p>

            <p className="text-white text-base sm:text-lg mt-4 tracking-wide">
              {current.label}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Center pink hultprize Logo Block */}
      <div className="flex justify-center items-center">
        <img
          src="https://ik.imagekit.io/d73k0qzwc/Group%206.png"
          alt="HultPrize"
          className="z-10 w-[180px] sm:w-[240px] md:w-[500px] object-contain"
        />
      </div>

      {/* Right Cards + Paragraph */}
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-row gap-4 w-full">
          <div className="w-1/2 overflow-hidden rounded-xl">
            <img
              src="https://ik.imagekit.io/d73k0qzwc/DSC04603%201.png"
              alt="Networking Event"
              className="w-full h-[260px] object-cover"
            />
          </div>
          <div className="w-1/2 overflow-hidden rounded-xl">
            <img
              src="https://ik.imagekit.io/d73k0qzwc/DSC04639%20(1)%201.png"
              alt="Pitch Presentation"
              className="w-full h-[260px] object-cover"
            />
          </div>
        </div>
        <p className="text-white text-sm sm:text-base text-left leading-relaxed max-w-[700px] mt-1">
          The Hult Prize at KIIT is part of a global student competition that
          challenges teams to build startups addressing pressing social issues.
          It empowers aspiring entrepreneurs to create innovative, impact-driven
          solutions through sustainable business models and collaborative
          problem-solving.
        </p>
        <a
          href="/hult-prize"
          className="bg-[#FE0EE0] hover:bg-[#ab459d] text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors flex items-center justify-center text-center"
          tabIndex={0}
          style={{ display: 'inline-block' }}
        >
          CHECK OUR WEBSITE
        </a>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  return (
    <div className="flex flex-col lg:flex-row my-12 w-full">
      {/* Left Image: 70% width with full edge-to-edge fit */}
      <div className="w-full lg:w-[70%] h-[400px] lg:h-[500px]">
        <img
          src="https://ik.imagekit.io/d73k0qzwc/DSC_0100%201.png"
          alt="Auditorium"
          className="w-full h-full object-contain m-0"
        />
      </div>

      {/* Right Text Block: 30% width */}
      <div className="w-full lg:w-[30%] bg-black bg-opacity-80 p-8 lg:p-12 flex flex-col justify-center">
        <div className="text-white text-left">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The Hult Prize journey begins with idea generation and team
            building, followed by mentorship, workshops, and pitch events. The
            initiative nurtures entrepreneurial thinking with a focus on social
            good, equipping students with the skills and mindset to turn
            purpose-driven ideas into viable, real-world ventures.
          </p>

          <div className="mb-2">
            <span className="text-white text-6xl lg:text-[150px] font-bold">
              100
            </span>
            <span className="text-[#FF0EE0] text-4xl lg:text-[100px] font-bold ml-1">
              +
            </span>
          </div>

          <p className="text-white text-base lg:text-lg tracking-wide mt-2">
            IMPACT IDEAS PRESENTED
          </p>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <div className="my-12 px-4">
      {/* Desktop: All 3 images in a row */}
      <div className="hidden lg:flex gap-4">
        <div className="flex-1 h-[450px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/d73k0qzwc/DSC04456%201.png"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 h-[450px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/d73k0qzwc/DSC_0478%201.png"
            alt="Awards Ceremony"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 h-[450px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/d73k0qzwc/DSC_0478%202.png"
            alt="Awards Ceremony 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile: First image full width, then 2 images in a row */}
      <div className="lg:hidden space-y-4">
        {/* First image - full width */}
        <div className="w-full h-[250px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/d73k0qzwc/DSC04456%201.png"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Bottom 2 images in a row */}
        <div className="flex gap-2">
          <div className="flex-1 h-[200px] overflow-hidden">
            <img
              src="https://ik.imagekit.io/d73k0qzwc/DSC_0478%201.png"
              alt="Awards Ceremony"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 h-[200px] overflow-hidden">
            <img
              src="https://ik.imagekit.io/d73k0qzwc/DSC_0478%202.png"
              alt="Awards Ceremony 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Page with State
const HultPrizePage = () => {
  const [hovered, setHovered] = useState("default");
  const [selectedMode, setSelectedMode] = useState("default");

  const handleHoverChange = (mode) => {
    setHovered(mode);
  };

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    setHovered(mode);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-full mx-auto">
        <HeroSection />
        <StatsSection 
          mode={hovered} 
          onHoverChange={handleHoverChange}
          selectedMode={selectedMode}
          onModeSelect={handleModeSelect}
        />
        <SpeakersSection />
        <GallerySection />
      </div>
    </div>
  );
};

export default HultPrizePage;