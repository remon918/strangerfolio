"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  // colorful glow particles
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // create particle
      const particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 4,
        color: [
          "#a855f7",
          "#22c55e",
          "#06b6d4",
          "#f59e0b",
        ][Math.floor(Math.random() * 4)],
      };

      setParticles((prev) => [...prev, particle]);

      // remove particle
      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => p.id !== particle.id)
        );
      }, 500);
    };

    // hover detect
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
      {/* Glow Trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 20px ${p.color}`,
          }}
        />
      ))}

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

        .particle {
          position: fixed;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 9998;

          animation: fadeOut 0.5s linear forwards;
        }

        @keyframes fadeOut {
          0% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
        }
      `}</style>
    </>
  );
}