"use client";

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

  return (
    <section className="text-white scroll-mt-10 my-40" id="skill">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold uppercase tracking-widest border-b-2 border-purple-600 inline-block mx-auto w-fit">
          My Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Technical Skills (Progress Bars) */}
        <div>
          <h3 className="text-xl font-semibold mb-8">Coding Arsenal 🛠️</h3>
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div
                    className={`${skill.color} h-1.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all duration-1000`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Tools & Learning */}
        <div className="space-y-12">
          {/* Tools & Technologies with Marquee */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Tools & Technologies</h3>
            <div className="relative flex overflow-x-hidden group bg-white/5 py-6 rounded-xl border border-white/10">
              <div className="animate-marquee whitespace-nowrap flex">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="mx-4 px-6 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm hover:border-purple-500 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="absolute top-6 animate-marquee2 whitespace-nowrap flex">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="mx-4 px-6 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm hover:border-purple-500 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Currently Learning Section */}
          <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="font-bold flex items-center">
                Currently Working On
              </h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="text-purple-500 mr-2">→</span> Backend with
                Node.js & Express
              </li>

              <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="text-purple-500 mr-2">→</span> MongoDB Atlas &
                Aggregation
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="text-purple-500 mr-2">→</span> More Animation
                and Micro-Interactions
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Required CSS for Marquee in Tailwind */}
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
