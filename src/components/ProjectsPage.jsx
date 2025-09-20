import React from "react";
import { ChevronRight, User, Calendar } from "lucide-react";

const ProjectsPage = ({ newsArticles }) => (
  <section id="projects" className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2 border-b-4 border-black inline-block pb-2">
        TECHNOLOGY NEWS
      </h1>
      <p className="text-gray-600 text-lg mt-4">
        Latest Developments in Software Innovation
      </p>
    </div>

    {/* Newspaper-style 2-column layout */}
    <div className="space-y-12">
      {newsArticles.map((article, index) => (
        <article
          key={article.id}
          className="bg-white border-4 border-black shadow-lg"
        >
          <div
            className={`grid ${
              index % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2"
            } gap-0`}
          >
            {/* Article Image - alternating sides */}
            <div
              className={`${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              } relative overflow-hidden`}
            >
              <img
                src={article.image}
                alt={article.headline}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div
              className={`${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              } p-6 md:p-8 flex flex-col justify-center`}
            >
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-bold font-serif leading-tight mb-3">
                  {article.headline}
                </h2>

                <h3 className="text-lg md:text-xl text-gray-600 mb-4 italic font-serif">
                  {article.subheading}
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 flex-wrap">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed mb-6 text-justify">
                {article.content}
              </div>

              {/* Tech Tags */}
              <div className="border-t border-gray-200 pt-4">
                <div className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">
                  Technologies Used:
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-sm border border-blue-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More Button */}
              <div className="mt-6">
                <button className="bg-black text-white px-4 py-2 text-sm font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                  READ FULL STORY
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ProjectsPage;
