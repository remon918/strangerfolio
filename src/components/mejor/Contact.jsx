"use client";
import { useRef } from "react";
import {
  FaEnvelope, FaFacebook, FaGithub,
  FaInstagram, FaLinkedin, FaWhatsapp,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// ─── Reusable hook ────────────────────────────────────────────────────────────
// once:false → scroll করে ফিরে আসলেও animation আবার চলবে
// amount:0.2 → element এর ২০% দেখা গেলেই trigger হবে
const useScrollView = (amount = 0.2) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount });
  return { ref, isInView };
};

// ─── Variants ────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay } },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay } },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay } },
});

const scaleUp = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay } },
});

// ─── Social card list ─────────────────────────────────────────────────────────
const socials = [
  {
    href: "https://wa.me/8801319571230",
    icon: <FaWhatsapp className="text-green-500 w-8 h-8" />,
    label: "WhatsApp",
    title: "Chat On WhatsApp",
    arrowColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-400/40",
  },
  {
    href: "https://www.instagram.com/pjetive_electrana",
    icon: <FaInstagram className="text-pink-500 w-8 h-8" />,
    label: "Instagram",
    title: "Follow On Instagram",
    arrowColor: "text-pink-400",
    hoverBorder: "hover:border-pink-400/40",
  },
  {
    href: "https://www.facebook.com/pajetibha.ilekatrana",
    icon: <FaFacebook className="text-blue-500 w-8 h-8" />,
    label: "Facebook",
    title: "Connect On Facebook",
    arrowColor: "text-blue-400",
    hoverBorder: "hover:border-blue-400/40",
  },
  {
    href: "https://www.linkedin.com/in/remon-hossen",
    icon: <FaLinkedin className="text-cyan-300 w-8 h-8" />,
    label: "LinkedIn",
    title: "Professional Profile",
    arrowColor: "text-cyan-300",
    hoverBorder: "hover:border-cyan-300/40",
  },
  {
    href: "https://github.com/remon918",
    icon: <FaGithub className="text-gray-300 w-8 h-8" />,
    label: "GitHub",
    title: "See My Projects",
    arrowColor: "text-gray-300",
    hoverBorder: "hover:border-gray-300/40",
  },
  {
    href: "mailto:remonhossen7778@gmail.com?subject=Project Inquiry&body=Hello Remon,",
    icon: <FaEnvelope className="text-red-400 w-8 h-8" />,
    label: "Email",
    title: "Send An Email",
    arrowColor: "text-red-400",
    hoverBorder: "hover:border-red-400/40",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  // Section-level refs
  const { ref: headingRef, isInView: headingInView }     = useScrollView(0.3);
  const { ref: socialsRef, isInView: socialsInView }     = useScrollView(0.1);
  const { ref: formRef,    isInView: formInView    }     = useScrollView(0.1);

  return (
    <div id="contact" className="text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-5">

        {/* ── Heading ── */}
        <div ref={headingRef} className="text-center mb-16">

          

          <motion.h1
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            className="text-4xl md:text-4xl font-black leading-tight"
          >
            Let’s Build
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              Something Amazing
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-md leading-relaxed"
          >
            Have a project idea, business inquiry, or just want to say hi? Fill
            out the form and I’ll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ══ Left — Socials ══ */}
          <div ref={socialsRef}>

            {/* Sub-heading */}
            <motion.div
              variants={fadeLeft(0)}
              initial="hidden"
              animate={socialsInView ? "visible" : "hidden"}
              className="mb-8"
            >
              <p className="uppercase tracking-[5px] text-purple-400 text-sm mb-3">
                Social Media
              </p>
             
            </motion.div>

            {/* Social cards — প্রতিটি card আলাদা delay তে আসে */}
            <div className="space-y-3">
              {socials.map(({ href, icon, label, title, arrowColor, hoverBorder }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeLeft(i * 0.08)}
                  initial="hidden"
                  animate={socialsInView ? "visible" : "hidden"}
                  whileHover={{ x: 6 }}          // hover এ ডানে সরে যাবে
                  className={`group flex items-center justify-between bg-white/5 border border-white/10 ${hoverBorder} rounded-3xl px-3 py-3 transition duration-300`}
                >
                  <div className="flex items-center gap-3">
                    <div>{icon}</div>
                    <div>
                      <p className="text-gray-400 text-xs">{label}</p>
                      <h3 className="text-md font-bold mt-1">{title}</h3>
                    </div>
                  </div>
                  <span className={`${arrowColor} text-3xl group-hover:translate-x-1 transition`}>→</span>
                </motion.a>
              ))}

              {/* Available badge */}
              <motion.div
                variants={fadeUp(socials.length * 0.08 + 0.1)}
                initial="hidden"
                animate={socialsInView ? "visible" : "hidden"}
                className="group flex items-center justify-between bg-green-700/5 border border-green-400/40 rounded-3xl px-2 py-2 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 rounded-[2rem] px-3 py-3 w-fit">
                  {/* Animated pulsing dot */}
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3df389] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3df389] shadow-[0_0_10px_#3df389]" />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-[#3df389] font-semibold text-md leading-tight">
                      Available for Work
                    </h3>
                    <p className="text-gray-500 text-xs">
                      Open to freelance &amp; full-time opportunities
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ══ Right — Form ══ */}
          <div ref={formRef} className="mt-15 lg:mt-0">

            {/* Sub-heading */}
            <motion.div
              variants={fadeRight(0)}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              className="mb-8"
            >
              <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-3">
                Contact Form
              </p>
              
            </motion.div>

            {/* Form card */}
            <motion.div
              variants={scaleUp(0.15)}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-500/20 blur-2xl rounded-[40px]" />

              <form className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-4 md:p-6 space-y-3">

                {/* Fields — staggered fade-up */}
                {[
                  { label: "Your Name",  type: "text",  placeholder: "Enter your name"  },
                  { label: "Your Email", type: "email", placeholder: "Enter your email" },
                  { label: "Subject",    type: "text",  placeholder: "Project subject"  },
                ].map(({ label, type, placeholder }, i) => (
                  <motion.div
                    key={label}
                    variants={fadeUp(0.25 + i * 0.1)}
                    initial="hidden"
                    animate={formInView ? "visible" : "hidden"}
                  >
                    <label className="text-sm text-gray-300 block mb-2">{label}</label>
                    <input
                      suppressHydrationWarning
                      type={type}
                      placeholder={placeholder}
                      className="w-full bg-black/30 border border-white/10 rounded-2xl px-3 py-2 outline-none focus:border-cyan-400 transition"
                    />
                  </motion.div>
                ))}

                <motion.div
                  variants={fadeUp(0.55)}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                >
                  <label className="text-sm text-gray-300 block mb-2">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Write your message..."
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  suppressHydrationWarning
                  variants={fadeUp(0.65)}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-2xl font-semibold text-lg bg-linear-to-r from-cyan-500 to-purple-500 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}