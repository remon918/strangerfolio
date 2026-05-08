"use client";
import React from "react";
import banner from "@/assets/user.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="text-white">
      <div className="flex justify-around items-center gap-25 my-10 md:my-55 md:flex-row flex-col-reverse">
        
        {/* Left Content */}
        <div>
          <h2 className="text-xl font-bold">
            
            <span className="text-xs font-bold text-pink-400 block">
              Welcome Here 💐<br /> I am,
            </span>

            <br />

            {/* Name */}
            <div className="flex gap-4 flex-col">
              <span className="text-5xl md:text-7xl font-black tracking-wide">
                REMON
              </span>

              <span className="text-5xl md:text-7xl font-black tracking-wide">
                HOSSAIN
              </span>
            </div>


            {/* Typing Animation */}
            <div className="text-lg md:text-xl font-semibold mt-6 text-gray-400 h-[40px]">
              I am a{" "}
              
              <TypeAnimation
                sequence={[
                  "Frontend Developer.",
                  2000,

                  "MERN Stack Developer.",
                  2000,

                  "React Specialist.",
                  2000,

                  "UI/UX Specialist.",
                  2000,

                  "Next.js Developer.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-purple-400"
              />
            </div>
          </h2>
          <h3 className="text-gray-400">
            A React developer from Bangladesh, obsessed with clean UI and smooth animations.
          </h3>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src={banner}
            alt="Banner"
            className="
              w-70 h-70 rounded-full
              shadow-[0_0_40px_#7e22ce]
              border border-purple-600
              object-cover
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;