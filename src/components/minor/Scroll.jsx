"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);

  // scroll detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(168,85,247,0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-14
            h-14
            rounded-full
            bg-linear-to-r
            from-purple-500
            to-fuchsia-600
            text-white
            flex
            items-center
            justify-center
            shadow-xl
            backdrop-blur-md
          "
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Scroll;