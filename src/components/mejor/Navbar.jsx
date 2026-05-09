import { Button } from "@heroui/react";
import Link from "next/link";
import logo from "@/assets/logo100.png";
import DropDown from "../minor/DropDown";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="text-white bg-[#0a0a0a]/30 backdrop-blur-md sticky top-0 z-[100] border-b border-white/10 md:px-30">
      <div className="flex justify-between items-center mx-auto p-5 md:p-6">
        {/* Logo */}
        <Link
          href="#"
        >
          <Image
            src={logo}
            alt="Logo"
            width={160}
            height={107}
            className="inline-block mr-2 logoAnimate "
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-purple-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="#education"
            className="hover:text-purple-400 transition-colors"
          >
            Education
          </Link>
          <Link
            href="#skill"
            className="hover:text-purple-400 transition-colors"
          >
            Skill
          </Link>
          <Link
            href="#projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
          <Button
          suppressHydrationWarning
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 rounded-full transition-all">
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
