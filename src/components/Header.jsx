import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SVG for Hamburger Icon
  const HamburgerIcon = (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  );

  // SVG for Close Icon (X)
  const CloseIcon = (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );

  return (
    <header className="w-full bg-black text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section - Corrected <a> to <Link> */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-[#feda75] font-bold text-lg">90 Caliber</span>
          </div>
        </Link>

        {/* Desktop Nav Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/about"
            className="text-sm font-medium hover:text-[#d62976] transition-colors"
          >
            About
          </Link>
          <Link
            to="/creator"
            className="text-sm font-medium hover:text-[#d62976] transition-colors"
          >
            Creator
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium hover:text-[#d62976] transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/community"
            className="text-sm font-medium hover:text-[#d62976] transition-colors"
          >
            Community
          </Link>
          <Link
            to="/roadmap"
            className="text-sm font-medium hover:text-[#d62976] transition-colors"
          >
            Future Roadmap
          </Link>
        </nav>

        {/* Hamburger Menu Button - Visible on mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white focus:outline-none"
          >
            {HamburgerIcon}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {/* Uses a transition for a smooth slide-in effect */}
      <div
        className={`fixed inset-0 bg-black z-50 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-800">
          {/* Mobile Menu Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-[#feda75] font-bold text-lg">90 Caliber</span>
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white focus:outline-none"
          >
            {CloseIcon}
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col items-center justify-center h-full space-y-8 -mt-16">
          <Link
            to="/about"
            className="text-2xl font-medium hover:text-[#d62976] transition-colors"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            About
          </Link>
          <Link
            to="/creator"
            className="text-2xl font-medium hover:text-[#d62976] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Creator
          </Link>
          <Link
            to="/pricing"
            className="text-2xl font-medium hover:text-[#d62976] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/community"
            className="text-2xl font-medium hover:text-[#d62976] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Community
          </Link>
          <Link
            to="/roadmap"
            className="text-2xl font-medium hover:text-[#d62976] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Future Roadmap
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;