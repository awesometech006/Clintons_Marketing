import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-black text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-[#a8ff60] font-bold text-lg">90 Caliber</span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center space-x-8">
          <Link
            to="/templates"
            className="text-sm font-medium hover:text-[#a8ff60] transition-colors"
          >
            Templates
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium hover:text-[#a8ff60] transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/faq"
            className="text-sm font-medium hover:text-[#a8ff60] transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-[#a8ff60] transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
