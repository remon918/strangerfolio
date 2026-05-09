"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  // Education Data
  const educationData = [
    {
      level: "HSC (Higher Secondary Certificate)",
      institution: "Dhaka Board / Pangsha Government College",
      status: "Completed / University Candidate",
      details:
        "Focusing on Science background. Preparing for University admission including Top Universities of Bangladesh.",
      year: "2024 - 2026",
      gpa: "N/A",
    },
    {
      level: "SSC (Secondary School Certificate)",
      institution: "Kazi Abdul Majed Academy",
      status: "Passed",
      details:
        "Completed with a strong foundation in Science and Mathematics.",
      year: "2022 - 2024",
      gpa: "4.11",
    },
  ];

  // Learning Data
  const learningData = [
    {
      title: "Full-Stack Development",
      description:
        "Building dynamic applications using React.js and Next.js. Currently focusing on Server Components and modern architecture.",
      skills: ["Next.js", "React.js", "JavaScript ES6+"],
    },
    {
      title: "Backend & Database",
      description:
        "Implementing authentication with Better Auth and managing data using MongoDB databases.",
      skills: ["MongoDB", "Better Auth", "Node.js"],
    },
  ];

  return (
    <section
      className="relative overflow-hidden text-white scroll-mt-10 mt-30 mb-20 pt-10"
      id="education"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-[40%] left-[40%] w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-2xl md:text-4xl font-bold uppercase tracking-widest border-b-2 border-purple-600 inline-block mx-auto w-fit pb-2"
          >
            Education & Learning
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base"
          >
            My academic background and continuous journey in modern web
            development technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="space-y-8"
          >
            {/* Title */}
            <div className="flex items-center space-x-3 mb-6">
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-3xl"
              >
                🎓
              </motion.span>

              <h3 className="text-2xl font-semibold text-purple-400">
                Academic Education
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative border-l-2 border-purple-600/30 pl-8 space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 10px #9333ea",
                        "0 0 30px #9333ea",
                        "0 0 10px #9333ea",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="absolute -left-[41px] top-0 w-5 h-5 bg-purple-600 rounded-full border-4 border-[#050505]"
                  ></motion.div>

                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
                    {/* Year + GPA */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-500 text-sm font-bold uppercase">
                        {edu.year}
                      </span>

                      <span className="text-xs font-mono bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-600/30">
                        GPA: {edu.gpa}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mt-2">
                      {edu.level}
                    </h4>

                    <p className="text-gray-400 text-sm mb-3">
                      {edu.institution}
                    </p>

                    <p className="text-gray-300 leading-relaxed italic text-sm">
                      {edu.details}
                    </p>

                    <div className="mt-5 inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                      {edu.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="space-y-8"
          >
            {/* Title */}
            <div className="flex items-center space-x-3 mb-6">
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-3xl"
              >
                💻
              </motion.span>

              <h3 className="text-2xl font-semibold text-purple-400">
                Web Development Journey
              </h3>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6">
              {learningData.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="bg-[#111]/80 backdrop-blur-lg p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.07] transition-all duration-500 shadow-xl hover:shadow-purple-500/20"
                >
                  {/* Glow */}
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all duration-500"></div>

                  <h4 className="text-lg font-bold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>

                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, sIndex) => (
                      <motion.span
                        key={sIndex}
                        whileHover={{
                          scale: 1.12,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="text-[10px] px-3 py-1 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-300 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{
                scale: 1.02,
              }}
              className="mt-10 p-6 bg-linear-to-r from-purple-900/20 to-transparent border-l-4 border-purple-600 rounded-r-2xl backdrop-blur-lg"
            >
              <h5 className="text-sm font-bold uppercase text-purple-400 mb-2 tracking-wider">
                Current Focus
              </h5>

              <p className="text-gray-300 text-sm italic leading-relaxed">
                Mastering Next.js Server Components and building scalable
                full-stack applications with MongoDB and Better Auth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;