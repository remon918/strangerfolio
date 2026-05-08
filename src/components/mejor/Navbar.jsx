import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import DropDown from '../minor/DropDown';

const Navbar = () => {
    return (
        <nav className='text-white bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-[100] border-b border-white/10 md:px-30'>
            <div className="flex justify-between items-center mx-auto p-5 md:p-6">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Strangerfolio
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-purple-400 transition-colors">About</Link>
                    <Link href="/education" className="hover:text-purple-400 transition-colors">Education</Link>
                    <Link href="/skill" className="hover:text-purple-400 transition-colors">Skill</Link>
                    <Link href="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
                    <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 rounded-full transition-all">
                        Hire Me
                    </Button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <DropDown />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;