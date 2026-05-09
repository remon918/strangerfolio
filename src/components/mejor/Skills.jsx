"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    { name: "HTML5", percentage: 90, color: "bg-orange-500" },
    { name: "CSS3", percentage: 85, color: "bg-blue-500" },
    { name: "Tailwind CSS", percentage: 90, color: "bg-cyan-400" },
    { name: "JavaScript-ES6", percentage: 70, color: "bg-yellow-400" },
    { name: "React.js", percentage: 70, color: "bg-sky-400" },
    { name: "Next.js", percentage: 60, color: "bg-white" },
    { name: "MongoDB", percentage: 30, color: "bg-green-500" },
  ];

  const tools = [
    "VS Code",
    "GitHub",
    "Figma",
    "Chrome DevTools",
    "npm",
    "Vite",
    "Vercel",
    "Postman",
    "Firebase",
  ];

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
        delay: i * 0.15,
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
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="relative overflow-hidden text-white md:scroll-mt-10 my-30 pt-10"
      id="skill"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-[40%] left-[40%] w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-14"
      >
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl md:text-4xl font-bold uppercase tracking-widest border-b-2 border-purple-600 inline-block mx-auto w-fit pb-2"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base"
        >
          Technologies, tools, and frameworks I use to craft modern web
          experiences.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-3xl"
            >
              🛠️
            </motion.span>

            <h3 className="text-2xl font-semibold text-purple-400">
              Coding Arsenal
            </h3>
          </div>

          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{
                  scale: 1.02,
                }}
                className="bg-white/5 border border-white/10 backdrop-blur-lg p-3 rounded-2xl hover:border-purple-500/40 transition-all duration-500"
              >
                {/* Top Row */}
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-sm md:text-base">
                    {skill.name}
                  </span>

                  <span className="text-gray-400 text-sm">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.percentage}%`,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    className={`${skill.color} h-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="space-y-12"
        >
          {/* TOOLS */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-3xl"
              >
                ⚙️
              </motion.span>

              <h3 className="text-2xl font-semibold text-purple-400">
                Tools & Technologies
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
              className="relative flex overflow-x-hidden group bg-white/5 py-6 rounded-2xl border border-white/10 backdrop-blur-lg"
            >
              {/* Marquee 1 */}
              <div className="animate-marquee whitespace-nowrap flex">
                {tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    className="mx-4 px-6 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm hover:border-purple-500 transition-all duration-300 cursor-pointer"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              {/* Marquee 2 */}
              <div className="absolute top-6 animate-marquee2 whitespace-nowrap flex">
                {tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    className="mx-4 px-6 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm hover:border-purple-500 transition-all duration-300 cursor-pointer"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CURRENTLY LEARNING */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.02,
              y: -10,
            }}
            className="bg-[#111]/80 backdrop-blur-lg p-8 rounded-2xl border border-white/5 relative overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>

            {/* Window Dots */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <h4 className="font-bold text-lg flex items-center">
                Currently Working On
              </h4>
            </div>

            {/* List */}
            <ul className="space-y-5">
              {[
                "Backend with Node.js & Express",
                "MongoDB Atlas & Aggregation",
                "More Animation and Micro-Interactions",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{
                    x: 10,
                  }}
                  className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="text-purple-500 mr-3 text-lg">→</span>

                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;