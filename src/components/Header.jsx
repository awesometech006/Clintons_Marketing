import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-black text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <a to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-[#a8ff60] font-bold text-lg">90 Caliber</span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="flex items-center space-x-8">
          <a
            href="#about"
            class="text-sm font-medium hover:text-[#a8ff60] transition-colors"
          >
            About
          </a>
          <a
            href="#creator"
            className="text-sm font-medium hover:text-[#a8ff60] transition-colors"
          >
            Creator
          </a>
          <a
            href="#community"
            className="text-sm font-medium hover:text-[#a8ff60] transition-colors"
          >
            Community
          </a>
          <a
           href="#pricing"
            className="text-sm font-medium hover:text-[#a8ff60] transition-colors"
          >
            Pricing
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
