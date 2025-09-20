import React from "react";
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

const Footer = ({ scrollToSection }) => (
  <footer className="bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4 font-serif">
            THE TECH TRIBUNE
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Bangladesh's premier technology newspaper, covering innovation,
            development, and digital transformation since 1985.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
          <div className="space-y-3">
            {[
              { label: "Home", section: "home" },
              { label: "Tech News", section: "projects" },
              { label: "Awards", section: "achievements" },
              { label: "Tech Analysis", section: "about" },
              { label: "Contact", section: "contact" },
            ].map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">CONTACT INFO</h3>
          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              siyambhuiyan@iut-dhaka.edu
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +880 1752982995
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Boardbazar, Gazipur
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
          <div className="flex gap-4">
            <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
              <Github className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p className="text-lg">
          &copy; 1985-2024 The Tech Tribune. All rights reserved. | Dhaka,
          Bangladesh
        </p>
        <p className="text-sm mt-2">
          Established in the pursuit of technological excellence and innovation
          journalism.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
