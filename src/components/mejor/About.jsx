"use client"
import { motion } from "framer-motion";

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2, // Ekta element er por arekta ashbe
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
  className="text-white my-30 scroll-mt-10"
  id="about"
  initial="hidden"
  whileInView="visible"
  // once: false dilei prottekbar scroll korle animation hobe
  viewport={{ once: false, amount: 0.2 }} 
  variants={containerVariants}
>
      {/* Section Title */}
      <div className="text-center">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-8 uppercase tracking-widest border-b-2 border-purple-600 inline-block mx-auto w-fit"
        >
          About Me
        </motion.h2>
      </div>

      <div className="mt-8">
        {/* Heading Specialist */}
        <motion.h3 
          variants={itemVariants}
          className="text-2xl font-bold text-purple-400 mb-4"
        >
          UI/UX Specialist And Web Developer
        </motion.h3>

        {/* Introduction Paragraph */}
        <motion.p 
          variants={itemVariants}
          className="italic text-gray-400 mb-8 leading-relaxed"
        >
          I am a passionate developer from Bangladesh, building beautiful and
          functional web experiences. I focus on creating clean code and
          intuitive designs that solve real-world problems.
        </motion.p>

        {/* Personal Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-10">
          {[
            { label: "Website", value: "www.strangerfolio.com" },
            { label: "Degree", value: "Computer Science (Student)" },
            { label: "Phone", value: "+880 13195 71230" },
            { label: "Email", value: "mdremonhossen7778@gmail.com" },
            { label: "City", value: "Dhaka, Bangladesh" },
            { label: "Freelance", value: "Available" },
            { label: "Focus", value: "BackEnd Development" },
            { label: "Status", value: "Available for Hire", isStatus: true },
          ].map((info, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }} // Mouse nibele ektu move korbe
              className="flex items-center space-x-2 cursor-pointer"
            >
              <span className="text-purple-500 font-bold text-xl">›</span>
              <p>
                <span className="font-bold">{info.label}:</span>{" "}
                <span className={info.isStatus ? "text-green-400" : ""}>
                  {info.value}
                </span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Description */}
        <motion.p 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="text-gray-300 leading-relaxed border-l-4 border-purple-600 pl-4 bg-white/5 py-4 shadow-lg transition-colors hover:bg-white/10"
        >
          I believe that every project is an opportunity to learn and innovate.
          Whether its designing a user-friendly interface or architecting a
          robust backend system, I strive for excellence in every line of code I
          write. My goal is to build digital products that are not only visually
          stunning but also technically sound and scalable.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;