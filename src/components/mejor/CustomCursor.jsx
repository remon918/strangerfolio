"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      setTrail((prev) => [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
        },
      ].slice(-12)); // last 12 dots
    };

    const handleMouseOver = (e) => {
      if (
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.closest(".hover-item")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    let animationFrame;

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${mouse.current.x}px, ${mouse.current.y}px)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Trail */}
      {trail.map((dot, index) => {
        const size = (trail.length - index) * 0.5 + 3;

        return (
          <div
            key={dot.id}
            className="fixed top-0 left-0 rounded-full bg-purple-400 pointer-events-none z-[9998]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: index / trail.length,
              transform: `translate(${dot.x}px, ${dot.y}px)`,
              boxShadow: "0 0 10px #a855f7",
              transition: "all 0.15s linear",
            }}
          />
        );
      })}

      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`
            rounded-full border border-purple-400
            shadow-[0_0_20px_#a855f7]
            flex items-center justify-center
            transition-all duration-300
            ${
              isHovering
                ? "w-9 h-9"
                : "w-6 h-6"
            }
          `}
        >
          <div
            className={`
              rounded-full bg-white shadow-[0_0_12px_white]
              transition-all duration-300
              ${
                isHovering
                  ? "w-3 h-3"
                  : "w-2 h-2"
              }
            `}
          />
        </div>
      </div>

      <style jsx global>{`
        * {
          cursor: none;
        }
      `}</style>
    </>
  );
}