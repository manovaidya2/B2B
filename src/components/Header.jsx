import React from "react";
import logo from "../images/manovaidya-logo (1).png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[78px] bg-white border-b border-[#4b2bbb] backdrop-blur-md">
      <div className="max-w-[1665px] mx-auto h-full px-4 lg:px-10 flex items-center justify-between">

        {/* Left spacer for mobile */}
        <div className="w-[40px] md:w-auto"></div>

        {/* Logo */}
        <div className="flex items-center justify-center flex-1 md:flex-none">
          <img
            src={logo}
            alt="Manovaidya Logo"
            className="h-[40px] md:h-[42px] w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-[38px] flex-1 justify-center">
          <a href="#about" className="text-[#54566e] text-[16px] hover:text-[#4b2bbb]">
            About
          </a>

          <a href="#solution" className="text-[#54566e] text-[16px] hover:text-[#4b2bbb]">
            Solution
          </a>

          <a href="#models" className="text-[#54566e] text-[16px] hover:text-[#4b2bbb]">
            Models
          </a>

          <a href="#contact" className="text-[#54566e] text-[16px] hover:text-[#4b2bbb]">
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="w-[40px] md:w-auto flex justify-end">
          <a
            href="#schedule"
            className="hidden md:inline-flex items-center justify-center h-[40px] px-[20px] rounded-[10px] bg-[#4b2bbb] text-white text-[14px] font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
          >
            Schedule Call
          </a>
        </div>

      </div>
    </header>
  );
}