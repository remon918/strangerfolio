"use client";
import React, { useState } from "react";
import Link from "next/link";

const DropDown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col gap-1.5 p-2 focus:outline-none z-[110] relative"
        suppressHydrationWarning={true} 
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Dropdown Menu Overlay */}
      {menuOpen && (
        <>
          {/* Background overlay to close menu on click outside */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]" 
            onClick={() => setMenuOpen(false)}
          ></div>
          
          <ul className="absolute right-0 mt-4 w-60 bg-[#141414] border border-white/10 rounded-2xl shadow-2xl z-[105] py-3 animate-in fade-in slide-in-from-top-5 duration-200">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Education", path: "/education" },
              { label: "Skill", path: "/skill" },
              { label: "Projects", path: "/projects" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.path} 
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <div className="px-5 mt-2">
                <button className="w-full bg-purple-600 py-3 rounded-xl font-bold text-white">
                    Hire Me
                </button>
            </div>
          </ul>
        </>
      )}
    </div>
  );
};

export default DropDown;