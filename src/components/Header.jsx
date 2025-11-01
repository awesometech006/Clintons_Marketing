import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-black text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <a to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-[#feda75] font-bold text-lg">90 Caliber</span>
          </div>
        </a>

        {/* Nav Links - UPDATED */}
        <nav className="flex items-center space-x-8">
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
      </div>
    </header>
  );
}

export default Header;