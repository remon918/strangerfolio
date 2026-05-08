import React from 'react';

const About = () => {
    return (
        <section className='text-white'>
            {/* Section Title */}
            <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest border-b-2 border-purple-600 inline-block mx-auto w-fit">
                About Me
            </h2>

            <div className="mt-8">
                {/* Heading Specialist */}
                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                    UI/UX Specialist And Web Developer
                </h3>
                
                {/* Introduction Paragraph */}
                <p className="italic text-gray-400 mb-8 leading-relaxed">
                    A passionate developer from Bangladesh, building beautiful and functional web experiences. 
                    I focus on creating clean code and intuitive designs that solve real-world problems.
                </p>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-10">
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500 font-bold text-xl">›</span>
                        <p><span className="font-bold">Birthday:</span> 1 August 2006</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500 font-bold text-xl">›</span>
                        <p><span className="font-bold">Age:</span> 19</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500 font-bold text-xl">›</span>
                        <p><span className="font-bold">Website:</span> www.strangerfolio.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500 font-bold text-xl">›</span>
                        <p><span className="font-bold">Degree:</span> Computer Science (Student)</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500 font-bold text-xl">›</span>
                        <p><span className="font-bold">Phone:</span> +880 13195 71230</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500 font-bold text-xl">›</span>
                        <p><span className="font-bold">Email:</span> hello@example.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500 font-bold text-xl">›</span>
                        <p><span className="font-bold">City:</span> Dhaka, Bangladesh</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500 font-bold text-xl">›</span>
                        <p><span className="font-bold">Freelance:</span> Available</p>
                    </div>
                </div>

                {/* Closing Description */}
                <p className="text-gray-300 leading-relaxed border-l-4 border-purple-600 pl-4 bg-white/5 py-4">
                    I believe that every project is an opportunity to learn and innovate. 
                    Whether its designing a user-friendly interface or architecting a robust backend system, 
                    I strive for excellence in every line of code I write. My goal is to build digital products 
                    that are not only visually stunning but also technically sound and scalable.
                </p>
            </div>
        </section>
    );
};

export default About;