import React from "react";
import {
  ChevronRight,
  Users,
  Clock,
  Mail,
  Phone,
  MapPin,
  Github,
} from "lucide-react";

const ContactPage = ({ scrollToSection }) => (
  <section id="contact" className="max-w-7xl mx-auto px-4 py-12">
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2 border-b-4 border-black inline-block pb-2">
        CONTACT INFORMATION
      </h1>
      <p className="text-gray-600 text-lg mt-4">
        Get in Touch for Collaboration Opportunities
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Details */}
      <div className="space-y-6">
        <div className="bg-white border-4 border-black shadow-lg">
          <div className="bg-red-600 text-white p-4">
            <h2 className="text-2xl font-bold font-serif">DIRECT CONTACT</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-lg">Email Address</div>
                <div className="text-gray-600">siyambhuiyan@iut-dhaka.edu</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-lg">Phone Number</div>
                <div className="text-gray-600">+880 1752982995</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="font-semibold text-lg">Location</div>
                <div className="text-gray-600">
                  Boardbazar, Gazipur, Bangladesh
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Github className="w-6 h-6 text-gray-800" />
              </div>
              <div>
                <div className="font-semibold text-lg">GitHub Profile</div>
                <div className="text-gray-600">Available upon request</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-4 border-yellow-400 shadow-lg p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-yellow-600" />
            COLLABORATION OPPORTUNITIES
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              "Full-Stack Web Development Projects",
              "Mobile Application Development",
              "AI/ML Integration Solutions",
              "Hackathon Team Collaborations",
              "Open Source Contributions",
              "Technical Consulting",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-yellow-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white border-4 border-black shadow-lg">
        <div className="bg-red-600 text-white p-4">
          <h2 className="text-2xl font-bold font-serif">SEND MESSAGE</h2>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-2 text-lg">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-4 border-2 border-gray-300 focus:border-red-500 focus:outline-none text-lg"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-lg">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-4 border-2 border-gray-300 focus:border-red-500 focus:outline-none text-lg"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-lg">
                Subject
              </label>
              <input
                type="text"
                className="w-full p-4 border-2 border-gray-300 focus:border-red-500 focus:outline-none text-lg"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-lg">
                Message
              </label>
              <textarea
                rows="6"
                className="w-full p-4 border-2 border-gray-300 focus:border-red-500 focus:outline-none resize-vertical text-lg"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 px-6 text-lg font-semibold hover:bg-red-700 transition-colors border-2 border-red-600 hover:border-red-700"
            >
              SEND MESSAGE
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600 text-center">
              Response time: Within 24 hours during business days
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Office Hours */}
    <div className="mt-12 bg-white border-4 border-black shadow-lg">
      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold font-serif text-center">
          AVAILABILITY SCHEDULE
        </h2>
      </div>
      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 border-2 border-gray-300">
            <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold text-xl mb-2">WEEKDAYS</h3>
            <p className="text-gray-600 text-lg">9:00 AM - 6:00 PM</p>
            <p className="text-sm text-gray-500">Monday - Friday</p>
          </div>
          <div className="p-6 bg-gray-50 border-2 border-gray-300">
            <Clock className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="font-bold text-xl mb-2">WEEKENDS</h3>
            <p className="text-gray-600 text-lg">10:00 AM - 4:00 PM</p>
            <p className="text-sm text-gray-500">Saturday - Sunday</p>
          </div>
          <div className="p-6 bg-gray-50 border-2 border-gray-300">
            <Clock className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="font-bold text-xl mb-2">TIME ZONE</h3>
            <p className="text-gray-600 text-lg">Bangladesh Standard Time</p>
            <p className="text-sm text-gray-500">UTC +6:00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;
