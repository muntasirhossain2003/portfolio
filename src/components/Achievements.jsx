import React from "react";
import {
  Trophy,
  Award,
  Star,
  Medal,
  Crown,
  Target,
  Users,
  Calendar,
} from "lucide-react";

const Achievements = () => {
  const majorAchievements = [
    {
      title: "Champion – MIST INVENTIOUS 4.1",
      detail:
        "Secured 1st place among 44 competing teams with Waste Zero Bangladesh",
      date: "2024",
      category: "Hackathon Victory",
      impact: "Environmental Innovation Award",
      prize: "Champion Trophy + Cash Prize",
      icon: <Crown className="w-8 h-8" />,
      featured: true,
    },
    {
      title: "Champion – Project Showcase",
      detail:
        "Achieved 1st place among 75 teams in university-wide competition",
      date: "2024",
      category: "Academic Excellence",
      impact: "University Recognition",
      prize: "Gold Medal + Certificate",
      icon: <Trophy className="w-8 h-8" />,
    },
    {
      title: "4th Runners Up – Waste Management Challenge",
      detail:
        "Ranked in Top 5 out of 60 teams in national environmental hackathon",
      date: "2024",
      category: "Environmental Tech",
      impact: "National Recognition",
      prize: "Certificate of Excellence",
      icon: <Medal className="w-8 h-8" />,
    },
  ];

  const competitionHistory = [
    {
      event: "IUT ICT Fest Hackathon",
      position: "Finalist",
      participants: "200+ teams",
      year: "2024",
      category: "Technology Innovation",
    },
    {
      event: "KUET BitFest Hackathon",
      position: "Finalist",
      participants: "150+ teams",
      year: "2024",
      category: "Software Development",
    },
    {
      event: "KUET Project Showcase",
      position: "Top 5",
      participants: "100+ projects",
      year: "2023",
      category: "Innovation Recognition",
    },
    {
      event: "National Programming Contest",
      position: "Participant",
      participants: "500+ programmers",
      year: "2023",
      category: "Competitive Programming",
    },
  ];

  const recognitions = [
    {
      title: "Outstanding Student Developer",
      issuer: "Islamic University of Technology",
      description:
        "Recognized for exceptional contribution to technology innovation",
    },
    {
      title: "Environmental Innovation Leader",
      issuer: "Bangladesh Tech Community",
      description: "Leading sustainable technology development initiatives",
    },
    {
      title: "Young Innovator Award",
      issuer: "Dhaka Tech Hub",
      description:
        "Recognition for breakthrough applications in multiple domains",
    },
  ];

  return (
    <section className="bg-white border-b-4 border-double border-gray-800">
      <div className="px-6 py-8">
        {/* Breaking News Style Header */}
        <div className="text-center mb-8">
          <div className="breaking-news mb-6">
            ★ CHAMPIONSHIP STREAK CONTINUES ★
          </div>
          <h2 className="section-headline text-red-700">
            AWARD-WINNING DEVELOPER
          </h2>
          <p className="sub-headline">
            Multiple Victory Streak Establishes Siyam Bhuiyan as Rising Tech
            Champion
          </p>
        </div>

        {/* Featured Achievement - Front Page Style */}
        <div className="mb-12">
          <div className="bg-yellow-100 border-4 border-yellow-500 vintage-shadow p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="headline-font text-4xl font-black text-gray-900 mb-4">
                HISTORIC VICTORY AT MIST INVENTIOUS 4.1
              </h3>
              <div className="text-xl text-gray-700 mb-4">
                44 Teams Defeated in Environmental Technology Competition
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="body-font text-gray-800 leading-relaxed space-y-4">
                  <p className="text-lg">
                    <span className="drop-cap">I</span>n a stunning display of
                    technical prowess and innovative thinking, Siyam Bhuiyan
                    emerged victorious at the prestigious MIST INVENTIOUS 4.1
                    hackathon, defeating 44 competing teams from across the
                    nation.
                  </p>

                  <p>
                    His winning project, "Waste Zero Bangladesh," impressed
                    judges with its comprehensive approach to environmental
                    sustainability, featuring AI-powered waste management,
                    interactive mapping, and gamified recycling systems.
                  </p>

                  <div className="bg-white p-4 border-l-4 border-yellow-500">
                    <blockquote className="italic text-gray-700">
                      "This victory represents not just technical excellence,
                      but a commitment to solving real-world problems through
                      innovative technology."
                    </blockquote>
                    <footer className="text-sm text-gray-600 mt-2">
                      — Competition Judge Panel
                    </footer>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 border-2 border-yellow-400">
                  <h4 className="font-bold text-gray-800 mb-3">
                    🎯 VICTORY DETAILS
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Event:</strong> MIST INVENTIOUS 4.1
                    </div>
                    <div>
                      <strong>Position:</strong> 1st Place Champion
                    </div>
                    <div>
                      <strong>Competitors:</strong> 44 Teams
                    </div>
                    <div>
                      <strong>Category:</strong> Environmental Technology
                    </div>
                    <div>
                      <strong>Prize:</strong> Champion Trophy + Cash Award
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 border-2 border-yellow-400">
                  <h4 className="font-bold text-gray-800 mb-3">
                    ⚡ WINNING PROJECT
                  </h4>
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold mb-1">
                      Waste Zero Bangladesh
                    </div>
                    <div>
                      AI-powered waste management platform with mapping,
                      gamification, and market systems
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {majorAchievements
            .filter((a) => !a.featured)
            .map((achievement, index) => (
              <div key={index} className="article-box">
                <header className="text-center mb-4">
                  <div className="text-yellow-600 mb-2">{achievement.icon}</div>
                  <h3 className="headline-font text-lg font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <div className="newspaper-badge text-xs mb-2">
                    {achievement.category}
                  </div>
                </header>

                <div className="body-font text-gray-800 text-sm leading-relaxed mb-4">
                  <p>{achievement.detail}</p>
                </div>

                <div className="bg-gray-50 p-3 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="font-semibold">Year:</span>
                    <span>{achievement.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Impact:</span>
                    <span>{achievement.impact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Award:</span>
                    <span>{achievement.prize}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Competition History */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="article-box">
            <h3 className="article-headline mb-6">COMPETITION TRACK RECORD</h3>

            <div className="space-y-4">
              {competitionHistory.map((comp, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 border-l-4 border-blue-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {comp.event}
                      </h4>
                      <div className="text-sm text-blue-600 font-medium">
                        {comp.position}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 border">
                      {comp.year}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div>
                      {comp.participants} • {comp.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200">
              <div className="text-center text-sm text-blue-800">
                <strong>7+ Major Competitions</strong> participated with
                consistent finalist performance
              </div>
            </div>
          </div>

          <div className="article-box">
            <h3 className="article-headline mb-6">PROFESSIONAL RECOGNITION</h3>

            <div className="space-y-4">
              {recognitions.map((recognition, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 border-l-4 border-green-500"
                >
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {recognition.title}
                  </h4>
                  <div className="text-sm text-green-600 font-medium mb-2">
                    {recognition.issuer}
                  </div>
                  <p className="text-sm text-gray-700">
                    {recognition.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200">
              <div className="text-center text-sm text-green-800">
                <strong>3 Professional Awards</strong> from leading tech
                organizations
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Statistics */}
        <div className="bg-gray-900 text-white p-8 text-center">
          <h3 className="headline-font text-2xl font-bold mb-6">
            ACHIEVEMENT STATISTICS
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                <Trophy className="w-8 h-8 mx-auto mb-1" />3
              </div>
              <div className="text-sm">Championship Wins</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <Star className="w-8 h-8 mx-auto mb-1" />
                7+
              </div>
              <div className="text-sm">Competition Participations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                <Award className="w-8 h-8 mx-auto mb-1" />
                5+
              </div>
              <div className="text-sm">Finalist Positions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                <Target className="w-8 h-8 mx-auto mb-1" />
                100%
              </div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6">
            <p className="text-lg italic">
              "Excellence is not a skill, it's an attitude that drives
              continuous achievement."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
