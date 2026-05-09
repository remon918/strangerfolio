"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button, Card, CardContent, Chip } from "@heroui/react";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Tiles Gallery",
    description:
      "A modern premium e-commerce platform with category filtering, smooth animations and elegant UI experience.",
    image: "https://i.ibb.co.com/Ddn013m/Screenshot-2026-05-09-230125.png",
    live: "https://dbl-ceranics.vercel.app",
    github: "https://github.com/remon918/DBL-CERANICS",
    tech: ["Next.js", "Tailwind", "MongoDB", "HeroUI"],
  },

  {
    id: 2,
    title: "Dragon News Portal",
    description:
      "A fully responsive real-time news platform with authentication, category based news filtering and API integration.",
    image: "https://i.ibb.co.com/WNJx2XtF/Screenshot-2026-05-09-233501.png",
    live: "https://dragon-news-delta-two.vercel.app",
    github: "https://github.com/remon918/dragon-news",
    tech: ["Tailwind", "React", "API", "HeroUI"],
  },

  {
    id: 3,
    title: "TechWave Podcast",
    description:
      "A modern podcast and music-inspired landing page with vibrant gradients, animated sound waves, responsive design and smooth user experience.",
    image: "https://i.ibb.co.com/G42jskcM/Screenshot-2026-05-09-234015.png",
    live: "https://remon918.github.io/Batch-13-Assignment-02",
    github: " https://github.com/remon918/Batch-13-Assignment-02",
    tech: ["HTML", "Tailwind CSS", "DaisyUI"],
  },

  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A futuristic developer portfolio showcasing projects, animations, responsive layouts and premium user experience.",
    image: "https://i.ibb.co.com/C5WsD4w0/Screenshot-2026-05-09-223237.png",
    live: "https://strangerfolio.vercel.app",
    github: "https://github.com/remon918/strangerfolio",
    tech: ["Next.js", "HeroUI", "Tailwind", "Framer Motion"],
  },

  {
    id: 5,
    title: "GitHub Issue Tracker",
    description:
      "A sleek and responsive issue tracking platform inspired by GitHub. Features issue management, filtering system, priority labels and modern dashboard UI.",

    image: "https://i.ibb.co.com/9JWsLNJ/Screenshot-2026-05-09-231304.png",

    live: "https://remon918.github.io/ASSIGNMENT-05",

    github: " https://github.com/remon918/ASSIGNMENT-05",

    tech: ["HTML", "Tailwind CSS", "DaisyUI", "JavaScript (ES6)"],
  },

  {
    id: 6,
    title: "G3 Architect Landing Page",
    description:
      "A clean and modern architecture landing page featuring responsive layouts, bold typography, smooth navigation and professional UI design.",
    image: "https://i.ibb.co.com/jvzBWvbq/Screenshot-2026-05-09-235408.png",
    live: "https://remon918.github.io/g3-architect",
    github: "https://github.com/remon918/g3-architect",
    tech: ["HTML", "CSS", "Responsive Design"],
  },

  {
    id: 7,
    title: "KeenKeeper Social Connect",
    description:
      "A modern social communication platform where friends can connect through real-time messaging, audio calls, video calls and seamless interactive conversations in a responsive UI.",
    image: "https://i.ibb.co.com/hJKLpWxd/Screenshot-2026-05-10-002117.png",
    live: "https://keenkeeper-omega.vercel.app",
    github: " https://github.com/remon918/Assignment-07",
    tech: ["Next.js", "Tailwind CSS", "DaisyUI", "JavaScript (ES6)"],
  },

  {
    id: 8,
    title: "DigiTools - Digital Workflow Platform",
    description:
      "A modern AI-powered digital tools platform offering premium design assets, templates, and productivity software all in one place. Features a clean navigation with cart functionality, and a bold hero section to supercharge your digital workflow.",
    image: "https://i.ibb.co.com/vCxspsXC/Screenshot-2026-05-10-001246.png",
    live: " https://digitoolsite.netlify.app",
    github: "https://github.com/remon918/Assignment-6",
    tech: ["React", "Tailwind CSS", "AI Tools API", "DaisyUI"],
  },

  {
    id: 9,
    title: "Payoo - Digital Payment Platform",
    description:
      "A modern mobile financial service platform where users can manage their balance, add money, cashout, send money, pay bills, get bonuses, and track transactions — all in a clean and intuitive dashboard UI. `4 Digit Pin = `444`` ",
    image: "https://i.ibb.co.com/SXkJ1S33/Screenshot-2026-05-10-002943.png",
    live: "https://remon918.github.io/payoo-mobile-bank",
    github: "https://github.com/remon918/payoo-mobile-bank",
    tech: ["Javascript (ES6)", "Tailwind CSS", "DaisyUI"],
  },
];

const Projects = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 70,
    },

    show: (i) => ({
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  const [isMounted, setIsMounted] = useState(false);

  // NEW
  const [showAll, setShowAll] = useState(false);

  // NEW
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen" />;
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden my-40 text-white mb-20 md:scroll-mt-10 pt-10"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-[40%] left-[40%] w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl md:text-4xl font-bold uppercase tracking-widest border-b-2 border-purple-600 inline-block pb-2"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base"
        >
          Some modern and premium projects crafted with passion, performance and
          clean user experience.
        </motion.p>
      </motion.div>

      {/* Cards */}
      {/* Cards */}
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
        <AnimatePresence mode="wait">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={fadeUp}
              initial={{
                opacity: 0,
                y: 120,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 120,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index >= 4 ? (index - 4) * 0.12 : 0,
              }}
              whileHover={{
                y: -12,
              }}
            >
              <Card className="bg-white/3 border border-white/10 hover:border-purple-500/40 transition-all duration-500 group overflow-hidden backdrop-blur-xl">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="w-full h-65 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        delay: 0.2,
                      }}
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2 mb-5"
                    >
                      {project.tech.map((tech, index) => (
                        <motion.div
                          key={index}
                          whileHover={{
                            scale: 1.08,
                            y: -3,
                          }}
                        >
                          <Chip
                            variant="flat"
                            className="bg-purple-600/10 text-purple-300 border border-purple-500/20"
                          >
                            {tech}
                          </Chip>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.7,
                      }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                      }}
                      viewport={{ once: true }}
                      className="text-gray-400 leading-relaxed text-sm mb-8"
                    >
                      {project.description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.3,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      {/* Live */}
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                      >
                        <Button
                          suppressHydrationWarning
                          radius="full"
                          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6"
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <TbExternalLink size={18} />
                            View Website
                          </a>
                        </Button>
                      </motion.div>

                      {/* GitHub */}
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                      >
                        <Button
                          suppressHydrationWarning
                          radius="full"
                          variant="bordered"
                          className="border-white/20 border text-white hover:border-purple-500 hover:text-purple-400"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <FaGithub size={18} />
                            GitHub Repo
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More / View Less Button */}
      <div className="flex justify-center mt-14">
        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setShowAll(!showAll)}
          className="relative overflow-hidden border border-cyan-400/40 px-12 py-4 text-cyan-300 font-semibold tracking-[0.2em] uppercase rounded-md backdrop-blur-xl bg-white/5 hover:bg-cyan-500/10 transition-all duration-500"
        >
          <span className="relative z-10">
            {showAll ? "Collapse The Vault" : "View More Projects"}
          </span>

          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
