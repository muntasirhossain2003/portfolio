import React from "react";
import { Zap, User, Calendar, MapPin } from "lucide-react";

const HomePage = () => (
  <section id="home" className="max-w-7xl mx-auto px-4 py-8">
    {/* Breaking News Banner */}
    <div className="bg-red-600 text-white p-3 mb-8 rounded-sm">
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 animate-pulse" />
        <span className="font-bold text-sm md:text-base">BREAKING NEWS:</span>
        <span className="text-sm md:text-base">
          Local Developer Siyam Bhuiyan Continues Championship Streak in
          National Tech Competitions
        </span>
      </div>
    </div>

    {/* Hero Story with Large Image */}
    <div className="mb-12">
      <article className="bg-white border-4 border-black shadow-2xl">
        {/* Large Hero Image */}
        <div className="relative hero-image-height overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=500&fit=crop"
            alt="Tech Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="bg-red-600 px-3 py-1 text-xs font-bold inline-block mb-3">
              TECHNOLOGY SPOTLIGHT
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-4">
              Rising Tech Star Dominates Bangladesh's Innovation Landscape
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl">
              Computer Science Student from IUT Continues Winning Streak with
              Revolutionary Applications
            </p>
          </div>
        </div>

        {/* Story Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 flex-wrap">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              By Staff Reporter
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              December 15, 2024
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Dhaka, Bangladesh
            </span>
          </div>

          <div className="text-gray-800 leading-relaxed space-y-6 text-lg">
            <p>
              <span className="float-left text-7xl font-bold mr-4 mt-2 leading-none text-red-600">
                I
              </span>
              n a remarkable display of technical innovation and entrepreneurial
              spirit, Siyam Bhuiyan, a Computer Science student at Islamic
              University of Technology, has emerged as one of Bangladesh's most
              promising technology developers, securing multiple championship
              titles in national competitions while creating applications that
              address critical societal challenges.
            </p>

            <p>
              The 22-year-old developer from Boardbazar, Gazipur, recently
              captured national attention by winning the prestigious MIST
              INVENTIOUS 4.1 hackathon, defeating 44 competing teams with his
              revolutionary "Unisphere" campus management platform. This victory
              adds to an impressive collection of achievements that positions
              Bhuiyan as a leading voice in Bangladesh's emerging technology
              sector.
            </p>

            <blockquote className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50 italic text-xl">
              "What distinguishes Siyam's work is not just technical excellence,
              but his ability to identify real-world problems and create
              scalable solutions that make a genuine impact on people's lives."
              <footer className="text-sm text-gray-600 mt-2 not-italic">
                — Dr. Rahman Ahmed, Professor of Computer Science at IUT
              </footer>
            </blockquote>

            <p>
              His portfolio spans diverse domains including environmental
              sustainability, education technology, and artificial intelligence
              applications. Each project demonstrates a unique blend of
              cutting-edge technology and practical problem-solving that has
              caught the attention of industry leaders and academic institutions
              across the country.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 bg-gray-50 p-6 border-2 border-gray-300">
            <h3 className="text-xl font-bold font-serif mb-4">At a Glance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600">6+</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">3</div>
                <div className="text-sm text-gray-600">Championship Titles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-gray-600">Users Impacted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">10+</div>
                <div className="text-sm text-gray-600">
                  Technologies Mastered
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default HomePage;
