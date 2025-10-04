import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <span className="text-[#a8ff60] font-bold text-lg">📁 90caliber.io</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your one-stop destination for premium digital products with full
            resell rights. Start, scale, and succeed with 90 Caliber.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/products" className="hover:text-[#a8ff60]">Browse Products</Link></li>
            <li><Link to="/pricing" className="hover:text-[#a8ff60]">Pricing</Link></li>
            <li><Link to="/case-studies" className="hover:text-[#a8ff60]">Case Studies</Link></li>
            <li><Link to="/faq" className="hover:text-[#a8ff60]">FAQ</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/terms" className="hover:text-[#a8ff60]">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#a8ff60]">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-[#a8ff60]">Cookie Policy</Link></li>
            <li><Link to="/contact" className="hover:text-[#a8ff60]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/plr-rights" className="hover:text-[#a8ff60]">PLR Rights</Link></li>
            <li><Link to="/mrr-rights" className="hover:text-[#a8ff60]">MRR Rights</Link></li>
            <li><Link to="/success-stories" className="hover:text-[#a8ff60]">Success Stories</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 mt-8 py-6 px-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-center md:text-left">
            <p>© 2024 90 Caliber. All rights reserved.</p>
            <p className="text-xs text-gray-600">Coaching Marketing Kit LLC</p>
          </div>

          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-[#a8ff60]">Twitter</a>
            <a href="#" className="hover:text-[#a8ff60]">LinkedIn</a>
            <a href="#" className="hover:text-[#a8ff60]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
