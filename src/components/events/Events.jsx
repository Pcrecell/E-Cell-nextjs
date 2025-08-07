"use client"

// import NoiseImage from "../../assets/Images/noise.png";
// import GridImage from "../../assets/Images/grid.png";
import { ecell_events } from "../../../public/images/image-links";
import EventCarousel from "./EventCarousel";
import HorizontalCardScroll from "./HorizontalCardScroll";
import { Anton } from "next/font/google"

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})



const Events = () => {


  return (
    <div className="relative w-full min-h-[200vh] bg-[#0E0E0E] overflow-hidden">
      {/* Grid Background - Applied to entire Events page */}
      <div
        className="pointer-events-none select-none z-1 absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${ecell_events.grid.link})`,
          backgroundSize: "auto 200vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        }}
      />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden">

        {/* Noise */}
        <img
          src={ecell_events.noise_background.link}
          alt={ecell_events.noise_background.alt}
          loading={ecell_events.noise_background.loading}
          fetchPriority="high"
          className="absolute w-[5000px] h-[765px] top-[-200px] left-[-120px] opacity-100 pointer-events-none select-none z-10 rotate-180"
        />

        {/* Events Heading */}
        <div className="absolute bottom-10 sm:bottom-[12vh] md:bottom-8 left-4 sm:left-8 md:left-16 z-20">
          <h1 className={`text-white font-{anton} text-[30vw] md:text-7xl md:text-[150px] lg:text-[200px] font-normal tracking-[-0.03em] leading-none ${anton.className}`}>
            Events
          </h1>
        </div>

        {/* Horizontal Card Scroll Section */}
        <div className="absolute top-[17vh] md:top-[10vh] left-0 w-full md:left-[14%] right-0 md:w-[86%] h-full z-10">
          <HorizontalCardScroll />
        </div>
      </div>

      {/* Actual Carousel section */}
      <div className="w-full top-[4vh]">
        <EventCarousel />
      </div>
    </div>
  );
};

export default Events;
