import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-3">
            Contact
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Let’s Build
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              Something Amazing
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Have a project idea, business inquiry, or just want to say hi? Fill
            out the form and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side Form */}

          {/* Right Side Socials */}
          <div>
            <div className="mb-8">
              <p className="uppercase tracking-[5px] text-purple-400 text-sm mb-3">
                Social Media
              </p>

              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                To Reach Me
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
                  In Social Media
                </span>
              </h2>
            </div>

            <div className="space-y-5">
              <a
                href="https://wa.me/8801319571230"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/5 border border-white/10 hover:border-cyan-400/40 rounded-3xl px-7 py-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                    <div className="">
                    <FaWhatsapp  className="text-green-500 w-8 h-8"/>
                  </div>
                  <div className="">
                   <p className="text-gray-400 text-sm">WhatsApp</p>
                  <h3 className="text-2xl font-bold mt-1">Chat On WhatsApp</h3>
                  </div>
                  
                </div>

                <span className="text-cyan-400 text-3xl group-hover:translate-x-1 transition">
                  →
                </span>
              </a>

              <a
                href="https://www.instagram.com/pjetive_electrana"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/5 border border-white/10 hover:border-pink-400/40 rounded-3xl px-7 py-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="">
                    <FaInstagram  className="text-pink-500 w-8 h-8"/>
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-sm">Instagram</p>
                  <h3 className="text-2xl font-bold mt-1">
                    Follow On Instagram
                  </h3>
                  </div>
                </div>

                <span className="text-pink-400 text-3xl group-hover:translate-x-1 transition">
                  →
                </span>
              </a>

              <a
                href="https://www.facebook.com/pajetibha.ilekatrana"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/5 border border-white/10 hover:border-blue-400/40 rounded-3xl px-7 py-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="">
                    <FaFacebook className="text-blue-500 w-8 h-8 "/>
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-sm">Facebook</p>
                  <h3 className="text-2xl font-bold mt-1">
                    Connect On Facebook
                  </h3>
                  </div>
                </div>

                <span className="text-blue-400 text-3xl group-hover:translate-x-1 transition">
                  →
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/remon-hossen"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/5 border border-white/10 hover:border-cyan-300/40 rounded-3xl px-7 py-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="">
                    <FaLinkedin className="text-cyan-300 w-8 h-8"/>
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                  <h3 className="text-2xl font-bold mt-1">
                    Professional Profile
                  </h3>
                  </div>
                </div>

                <span className="text-cyan-300 text-3xl group-hover:translate-x-1 transition">
                  →
                </span>
              </a>

              <a
                href="https://github.com/remon918"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/5 border border-white/10 hover:border-gray-300/40 rounded-3xl px-7 py-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="">
                    <FaGithub className="text-gray-300 w-8 h-8"/>
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-sm">GitHub</p>
                  <h3 className="text-2xl font-bold mt-1">See My Projects</h3>
                  </div>
                </div>

                <span className="text-gray-300 text-3xl group-hover:translate-x-1 transition">
                  →
                </span>
              </a>

              <a
                href="mailto:remonhossen7778@gmail.com?subject=Project Inquiry&body=Hello Remon,"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/5 border border-white/10 hover:border-red-400/40 rounded-3xl px-7 py-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="">
                    <FaEnvelope className="text-red-400 w-8 h-8"/>
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-sm">Email</p>
                  <h3 className="text-2xl font-bold mt-1">Send An Email</h3>
                  </div>
                </div>

                <span className="text-red-400 text-3xl group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
              <a className="group flex items-center justify-between bg-green-700/5 border border-green-400/40 rounded-3xl px-7 py-3 transition duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 rounded-[2rem] px-6 py-4 w-fit">
                  {/* Green Status Dot */}
                  <div className="w-3 h-3 rounded-full shadow-[0_0_10px_#3df389]" />

                  <div className="flex flex-col">
                    {/* Main Text */}
                    <h3 className="text-[#3df389] font-semibold text-lg leading-tight">
                      Available for Work
                    </h3>
                    {/* Subtext */}
                    <p className="text-gray-500 text-sm">
                      Open to freelance & full-time opportunities
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-15 lg:mt-0">
            <div className="mb-8 ">
              <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-3">
                Contact Form
              </p>

              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                Send Me A
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                  Quick Message
                </span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-500/20 blur-2xl rounded-[40px]"></div>

              <form className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-10 space-y-6">
                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Your Name
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Your Email
                  </label>
                  <input
                    suppressHydrationWarning
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Subject
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    placeholder="Project subject"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  suppressHydrationWarning
                  className="w-full py-4 rounded-2xl font-semibold text-lg bg-linear-to-r from-cyan-500 to-purple-500 hover:scale-[1.02] transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
