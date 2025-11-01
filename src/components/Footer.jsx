import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // Replaced border-t with "relative" to hold the new gradient border div
    <footer className="relative bg-black text-white">
      {/* This is the new gradient top border that matches the CTA.
        It's an absolute div positioned at the top of the "relative" footer.
      */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            {/* Changed text color to Instagram Yellow */}
            <span className="text-[#feda75] font-bold text-lg">📁 90caliber.io</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            © 2025 Clinton’s Marketing Hub.
            Built by creators, for creators.
            Empowering the next generation of digital entrepreneurs.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {/* Changed hover color to Instagram Pink */}
            <li><Link to="/products" className="hover:text-[#d62976]">Browse Products</Link></li>
            <li><Link to="/pricing" className="hover:text-[#d62976]">Pricing</Link></li>
            <li><Link to="/case-studies" className="hover:text-[#d62976]">Case Studies</Link></li>
            <li><Link to="/faq" className="hover:text-[#d62976]">FAQ</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/terms" className="hover:text-[#d62976]">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#d62976]">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-[#d62976]">Cookie Policy</Link></li>
            <li><Link to="/contact" className="hover:text-[#d62976]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/plr-rights" className="hover:text-[#d62976]">PLR Rights</Link></li>
            <li><Link to="/mrr-rights" className="hover:text-[#d62976]">MRR Rights</Link></li>
            <li><Link to="/success-stories" className="hover:text-[#d62976]">Success Stories</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 mt-8 py-6 px-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-center md:text-left">
            <p>© 2025 Clinton's Marketing Hub.</p>
            <p className="text-xs text-gray-600">Built by creators, for creators.</p>
            <p className="text-xs text-gray-600">Empowering the next generation of digital entrepreneurs.</p>
          </div>

          <div className="flex space-x-6 text-gray-400">
            {/* Changed hover color to Instagram Pink */}
            <a href="#" className="hover:text-[#d62976]">Twitter</a>
            <a href="#" className="hover:text-[#d62976]">LinkedIn</a>
            <a href="#" className="hover:text-[#d62976]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;