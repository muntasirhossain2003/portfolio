import React from "react";
import { Trophy } from "lucide-react";

const AchievementsPage = ({ achievements }) => (
  <section id="achievements" className="max-w-7xl mx-auto px-4 py-12">
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2 border-b-4 border-black inline-block pb-2">
        AWARDS & RECOGNITION
      </h1>
      <p className="text-gray-600 text-lg mt-4">
        Championship Record in National Competitions
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {achievements.map((achievement, index) => (
        <article
          key={index}
          className="bg-white border-4 border-black shadow-lg"
        >
          {/* Award Image/Icon */}
          <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=200&fit=crop"
              alt="Trophy"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Trophy className="w-16 h-16 text-white" />
            </div>
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs font-bold">
              {achievement.position}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold font-serif mb-3 text-center">
              {achievement.event}
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
              {achievement.detail}
            </p>

            <div className="text-center pt-4 border-t border-gray-200">
              <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                Competition Achievement
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* Achievement Timeline */}
    <div className="mt-16 bg-white border-4 border-black shadow-lg p-8">
      <h2 className="text-3xl font-bold font-serif text-center mb-8">
        ACHIEVEMENT TIMELINE
      </h2>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-center gap-6 p-4 border-b border-gray-200 last:border-b-0"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Trophy className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-lg">{achievement.event}</h4>
              <p className="text-red-600 font-semibold">
                {achievement.position}
              </p>
              <p className="text-gray-600 text-sm">{achievement.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsPage;
