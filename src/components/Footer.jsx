import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Calendar,
  Clock,
  Newspaper,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/siyam-bhuiyan",
      icon: <Github className="w-5 h-5" />,
      description: "View source code and projects",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/siyam-bhuiyan",
      icon: <Linkedin className="w-5 h-5" />,
      description: "Professional networking",
    },
    {
      name: "Portfolio",
      url: "https://siyam-portfolio.dev",
      icon: <Globe className="w-5 h-5" />,
      description: "Live portfolio website",
    },
  ];

  const quickLinks = [
    { name: "About", section: "hero" },
    { name: "Projects", section: "projects" },
    { name: "Skills", section: "skills" },
    { name: "Achievements", section: "achievements" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="px-6 py-12">
        {/* Newspaper Style Header */}
        <div className="text-center border-b border-gray-700 pb-8 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Newspaper className="w-6 h-6" />
            <h3 className="headline-font text-2xl font-bold">
              THE DEVELOPER TIMES
            </h3>
            <Newspaper className="w-6 h-6" />
          </div>
          <div className="text-gray-400 text-sm">
            Your Daily Source for Innovation and Technical Excellence
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="headline-font text-lg font-bold border-b border-gray-700 pb-2">
              EDITORIAL OFFICE
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <div className="font-medium">Email Editor</div>
                  <a
                    href="mailto:siyambhuiyan@iut-dhaka.edu"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    siyambhuiyan@iut-dhaka.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-green-400" />
                <div>
                  <div className="font-medium">Newsroom</div>
                  <a
                    href="tel:+8801752982995"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    +880 1752982995
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-red-400" />
                <div>
                  <div className="font-medium">Headquarters</div>
                  <div className="text-sm text-gray-400">
                    Boardbazar, Gazipur
                    <br />
                    Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="headline-font text-lg font-bold border-b border-gray-700 pb-2">
              SECTIONS
            </h4>

            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.section}`}
                  className="block text-sm text-gray-400 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="text-xs text-gray-500">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-3 h-3" />
                  <span>Published: {currentDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  <span>Last Updated: Today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="headline-font text-lg font-bold border-b border-gray-700 pb-2">
              FOLLOW THE STORY
            </h4>

            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <div className="text-blue-400">{social.icon}</div>
                  <div>
                    <div className="font-medium">{social.name}</div>
                    <div className="text-xs text-gray-500">
                      {social.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="text-xs text-gray-500">
                Stay connected for the latest updates on projects, achievements,
                and technical innovations.
              </div>
            </div>
          </div>

          {/* Subscription Box */}
          <div className="space-y-4">
            <h4 className="headline-font text-lg font-bold border-b border-gray-700 pb-2">
              SUBSCRIBE
            </h4>

            <div className="bg-gray-800 p-4 border border-gray-700">
              <div className="mb-3">
                <div className="font-medium text-sm mb-1">Get Updates</div>
                <div className="text-xs text-gray-400">
                  Stay informed about new projects and achievements
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-600 text-white text-sm 
                           focus:border-blue-500 focus:outline-none"
                />
                <button
                  className="w-full bg-blue-600 text-white py-2 text-sm font-medium 
                                 hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-500">
              🔒 Your email is secure. No spam, just quality updates.
            </div>
          </div>
        </div>

        {/* Featured Quote */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <blockquote className="text-center">
            <p className="text-lg italic text-gray-300 mb-4">
              "Technology is best when it brings people together and solves real
              problems. Every line of code is an opportunity to make the world a
              little better."
            </p>
            <footer className="text-gray-500">
              — Siyam Bhuiyan, Founder & Chief Developer
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>© {currentYear} The Developer Times</span>
            <span>•</span>
            <span>Portfolio Edition</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <div className="flex items-center gap-1 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Bangladesh</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <div className="text-xs text-gray-500">
            This portfolio is a special edition of The Developer Times,
            showcasing the journey and achievements of Siyam Bhuiyan in the
            world of technology and innovation.
          </div>
        </div>
      </div>

      {/* Ornamental Bottom Border */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"></div>
    </footer>
  );
};

export default Footer;
