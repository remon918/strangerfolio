import Navbar from "@/components/mejor/Navbar";

const particles = Array.from({ length: 40 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  duration: `${Math.random() * 5 + 4}s`,
  size: `${Math.random() * 6 + 2}px`,
  color: ["bg-purple-600", "bg-emerald-500", "bg-amber-400", "bg-cyan-400"][
    Math.floor(Math.random() * 4)
  ],
}));

export default function Home({ children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f] font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,37,210,0.18),transparent_45%)] pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_40%)] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className={`absolute bottom-[-20px] rounded-full ${p.color} animate-float`}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
              boxShadow: "0 0 12px rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* Website Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="w-[94%] md:w-[85%] mx-auto">{children}</div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Sora:wght@300;400;600&display=swap');

        * {
          font-family: 'Sora', sans-serif;
        }

        @keyframes float {
          0% {
            transform: translateY(0) scale(.5);
            opacity: 0;
          }

          10% {
            opacity: .8;
          }

          90% {
            opacity: .4;
          }

          100% {
            transform: translateY(-110vh) scale(1.4);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .animate-fade-in {
          animation: fade-in .8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
