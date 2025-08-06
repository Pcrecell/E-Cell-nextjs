"use client"

import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import RotatingText from './RotatingText';

const heroSectionVid = "https://ik.imagekit.io/fhervghik/E-Cell%20Website/3.webm/ik-video.mp4";

const HeroSection = () => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = heroSectionVid;
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    const preloadWithFetch = async () => {
      try {
        await fetch(heroSectionVid, {
          priority: 'high',
          mode: 'cors'
        });
      } catch (error) {
        console.log('Fetch preload failed, falling back to video element preload');
      }
    };

    preloadWithFetch();

    const video = document.createElement('video');
    video.src = heroSectionVid;
    video.preload = 'auto'; // Ensure full preload
    video.oncanplaythrough = () => setVideoLoaded(true);
    video.load();

    const handlePageLoad = () => setPageLoaded(true);
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
      return () => {
        window.removeEventListener('load', handlePageLoad);
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (videoLoaded && pageLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [videoLoaded, pageLoaded]);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] fixed inset-0 z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#38bdf8]"></div>
      </div>
    );
  }

  return (
    <section className="relative flex items-center min-h-screen w-full bg-black">
      <div
        className="absolute left-[-10vw] bottom-[-120px] w-screen md:w-[600px] h-[350px] pointer-events-none rounded-full"
        style={{
          background: 'rgba(120,196,226,0.5)',
          filter: 'blur(300px)',
          zIndex: 15,
        }}
      />
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute md:top-[10%] top-10 md:bottom-0 bottom-auto lg:left-auto md:left-[20%] left-[35%] md:transform-none transform -translate-x-1/2 md:w-full w-auto scale-90 md:right-[-55%] right-auto z-10 flex justify-center md:justify-start items-center md:pl-8">
          <video
            src={heroSectionVid}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-contain pointer-events-none"
            style={{
              maxHeight: '120vh',
              maxWidth: '100vw',
              minWidth: '1200px',
              width: '150%',
              height: 'auto',
              opacity: 1,
              transform: 'translateX(7%) translateY(3%) scale(1.3)',
            }}
          />
        </div>

        <div
          className={`relative z-30 w-full pt-[17vh] pl-4 md:px-8 lg:px-16 transition-opacity duration-1000 flex items-start md:items-center justify-start md:justify-start min-h-screen mt-8 md:mt-0 ${
            !loading ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative max-w-5xl text-left">
            <h1 className="mb-8 md:mb-16">
              <div className="text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] mb-2 md:mb-2">
                Empowering
              </div>
              <div className="text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] mb-2 md:mb-2">
                the Next Generation
              </div>
              <div className="text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1]">
                <span className="flex items-center gap-2">
                  of <span className="inline-block">&nbsp;</span>
                  <RotatingText
                    texts={['Entrepreneurs', 'Innovaters', 'Founders', 'Leaders']}
                    mainClassName="inline-flex items-center px-2 sm:px-2 md:px-3 bg-[#38bdf8] text-black overflow-hidden py-0.5 sm:py-1 rounded-lg transition-all duration-500 align-middle"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.020}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />
                </span>
              </div>
            </h1>
            <div className="mb-8 md:mb-12">
              <p className="text-sm md:text-base lg:text-xl xl:text-xl text-gray-300 leading-relaxed mb-1 md:mb-2">
                Fueling ideas. Building leaders.
              </p>
              <p className="text-sm md:text-base lg:text-xl xl:text-xl text-gray-300 leading-relaxed">
                Driving innovation from campus to the world.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <div className="mb-6 md:mb-10">
                <button
                  className="px-5 py-2 sm:px-8 sm:py-3 rounded-md text-sm font-bold transition duration-200 inline-block text-center cursor-pointer bg-white border-2 border-white text-black hover:scale-105 mb-6"
                  style={{ boxShadow: '0 4px 24px black' }}
                  onClick={() => navigate("/aboutus")}
                >
                  Explore More
                </button>
              </div>
              <div className="mb-6 md:mb-10">
                <button
                  className="px-5 py-2 sm:px-8 sm:py-3 rounded-md text-sm font-bold transition duration-200 inline-block text-center cursor-pointer bg-none hover:bg-[#38bdf8] border-2 border-[#38bdf8] text-white hover:scale-105 mb-6"
                  style={{ boxShadow: '0 4px 24px black' }}
                  onClick={() => navigate("/events")}
                >
                  Our Intiatives
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;