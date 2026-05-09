"use client";

import React from 'react';

const Education = () => {
    // Education Data with GPA option
    const educationData = [
        {
            level: "HSC (Higher Secondary Certificate)",
            institution: "Dhaka Board / Pangsha Government College",
            status: "Completed / University Candidate",
            details: "Focusing on Science background. Preparing for University admission including Top Universities of Bangladesh.",
            year: "2024 - 2026",
            gpa: "N/A" // এখানে আপনার GPA বসান
        },
        {
            level: "SSC (Secondary School Certificate)",
            institution: "Kazi Abdul Majed Academy",
            status: "Passed",
            details: "Completed with a strong foundation in Science and Mathematics.",
            year: "2022 - 2024",
            gpa: "4.11" // এখানে আপনার GPA বসান
        }
    ];

    // Web Development Journey Data (Same as before)
    const learningData = [
        {
            title: "Full-Stack Development",
            description: "Building dynamic applications using React.js and Next.js. Currently focusing on Server Components and modern architecture.",
            skills: ["Next.js", "React.js", "JavaScript ES6+"]
        },
        {
            title: "Backend & Database",
            description: "Implementing authentication with Better Auth and managing data using MongoDB databases.",
            skills: ["MongoDB", "Better Auth", "Node.js"]
        },
    ];

    return (
        <section className="text-white scroll-mt-10 mt-30 mb-20" id="education">
            <div className="">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest border-b-2 border-purple-600 inline-block mx-auto w-fit">
                        Education & Learning
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Left Side: Academic Education */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="text-2xl">🎓</span>
                            <h3 className="text-2xl font-semibold text-purple-400">Academic Education</h3>
                        </div>
                        
                        <div className="relative border-l-2 border-purple-600/30 pl-8 space-y-12">
                            {educationData.map((edu, index) => (
                                <div key={index} className="relative">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-purple-600 rounded-full border-4 border-[#050505]"></div>
                                    
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all shadow-xl">
                                        {/* Year and GPA Row */}
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-purple-500 text-sm font-bold uppercase">{edu.year}</span>
                                            <span className="text-xs font-mono bg-purple-600/20 text-purple-300 px-2 py-0.5 rounded border border-purple-600/30">
                                                GPA: {edu.gpa}
                                            </span>
                                        </div>
                                        
                                        <h4 className="text-xl font-bold mt-1">{edu.level}</h4>
                                        <p className="text-gray-400 text-sm mb-3">{edu.institution}</p>
                                        <p className="text-gray-300 leading-relaxed italic text-sm">
                                            {edu.details}
                                        </p>
                                        <div className="mt-4 inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                                            {edu.status}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Web Development Summary */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="text-2xl">💻</span>
                            <h3 className="text-2xl font-semibold text-purple-400">Web Development Journey</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {learningData.map((item, index) => (
                                <div key={index} className="bg-[#111] p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.07] transition-all">
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all"></div>
                                    
                                    <h4 className="text-lg font-bold mb-3 flex items-center">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill, sIndex) => (
                                            <span key={sIndex} className="text-[10px] px-2 py-1 bg-purple-600/10 border border-purple-600/20 rounded text-purple-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Current Focus Highlight */}
                        <div className="mt-10 p-6 bg-gradient-to-r from-purple-900/20 to-transparent border-l-4 border-purple-600 rounded-r-xl">
                            <h5 className="text-sm font-bold uppercase text-purple-400 mb-2">Current Focus</h5>
                            <p className="text-gray-300 text-sm italic">
                                Mastering Next.js Server Components and building full-stack applications with MongoDB.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;