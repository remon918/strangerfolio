"use client";
import React, { useRef } from "react";
import banner from "@/assets/user.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { Button } from "@heroui/react";
import { TbExternalLink } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";

const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  return { ref, isInView };
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut", delay },
  }),
};

const Banner = () => {
  const { ref: sectionRef, isInView } = useScrollAnimation();
  return (
    <div className="text-white" ref={sectionRef}>
      <div className="flex justify-around items-center gap-25 my-15 md:my-40 md:flex-row flex-col-reverse">
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="text-xs font-bold mb-4 text-pink-400 block"
          >
            Welcome Here 💐
            <br /> I am,
          </motion.span>

          <h2 className="text-xl font-bold mt-2">
            {/* Name lines */}
            <div className="flex gap-4 flex-col">
              <motion.span
                variants={fadeLeft}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.15}
                className="text-5xl md:text-7xl font-black tracking-wide"
              >
                REMON
              </motion.span>

              <motion.span
                variants={fadeLeft}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.3}
                className="text-5xl md:text-7xl font-black tracking-wide bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                HOSSAIN
              </motion.span>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.5}
              className="text-lg md:text-xl font-semibold mt-6 text-gray-400 h-10"
            >
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
            </motion.div>
          </h2>

          {/* Description */}
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.65}
            className="text-gray-400 mt-3"
          >
            A React developer from Bangladesh, obsessed with clean UI and smooth
            animations.
          </motion.h3>

          <div className="flex items-center gap-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.8}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                suppressHydrationWarning
                radius="full"
                className="bg-purple-600/70 hover:bg-purple-700 text-white font-semibold px-6 py-6 mt-8"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <TbExternalLink size={18} />
                </a>
              </Button>
            </motion.div>
            <motion.div
                variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.8}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                suppressHydrationWarning
                radius="full"
                className="bg-blue-900/10 hover:bg-blue-700 text-white font-semibold px-6 py-6 mt-8 border border-blue-100/20"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me
                  <RiContactsFill />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* ===== Right Image ===== */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
        >
          <Image
            src={banner}
            alt="Banner"
            className="
              w-90 h-90 rounded-full
              shadow-[0_0_40px_#7e22ce]
              border border-purple-600
              object-cover
            "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
