import React, { useState } from "react";
import logo from "../images/manovaidya-logo (1).png";
import { Menu, X } from "lucide-react"; // Install: npm install lucide-react

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Solution", href: "#solution" },
    { name: "Models", href: "#models" },
    { name: "Contact", href: "#cta" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-[78px] bg-white border-b border-[#4b2bbb] backdrop-blur-md">
        <div className="max-w-[1665px] mx-auto h-full px-4 lg:px-10 flex items-center justify-between">
          
          {/* Mobile Menu Button (Left) */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-[40px] h-[40px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-[#4b2bbb]" />
          </button>

          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center justify-center md:justify-start flex-1 md:flex-none">
            <img
              src={logo}
              alt="Manovaidya Logo"
              className="h-[40px] md:h-[42px] w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-[38px] flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#54566e] text-[16px] hover:text-[#4b2bbb] transition-colors"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex w-auto justify-end">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center h-[40px] px-[20px] rounded-[10px] bg-[#4b2bbb] text-white text-[14px] font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.18)] hover:bg-[#3a1f9e] transition-all hover:scale-105"
            >
              Schedule Call
            </a>
          </div>

          {/* Mobile Right Spacer (for balance) */}
          <div className="md:hidden w-[40px]"></div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img
            src={logo}
            alt="Manovaidya Logo"
            className="h-[35px] w-auto object-contain"
          />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-[#4b2bbb]" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-3 text-[#54566e] text-[16px] font-medium rounded-lg hover:bg-[#f3f0ff] hover:text-[#4b2bbb] transition-all"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Schedule Call Button */}
          <div className="pt-4 mt-2 border-t border-gray-200">
            <a
              href="#schedule"
              className="flex items-center justify-center w-full h-[44px] px-[20px] rounded-[10px] bg-[#4b2bbb] text-white text-[14px] font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.18)] hover:bg-[#3a1f9e] transition-all"
              onClick={closeMenu}
            >
              Schedule Call
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}