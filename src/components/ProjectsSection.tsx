import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  Layers, 
  Globe 
} from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Corporate & Agency',
    'E-Commerce',
    'Web Application',
    'Fintech',
    'Healthcare',
    'Real Estate',
  ];

  const filteredProjects = activeCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className={`py-20 transition-colors duration-200 border-t ${
      isDarkMode ? 'bg-[#090d16] border-slate-800/80 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              05. Featured Projects & Live Webpages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Webpages & Projects <span className="text-indigo-400">I've Built</span>
            </h2>
            <p className="mt-2 text-slate-400 text-base max-w-xl">
              Showcasing 9 live web projects built for real businesses. Click on any project to visit the live website or inspect the details.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className={`flex flex-wrap items-center gap-1.5 p-1 rounded-xl border self-start md:self-auto ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? isDarkMode ? 'bg-indigo-600 text-white shadow-xs' : 'bg-blue-600 text-white shadow-xs'
                    : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Webpages (9)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (9 Showcase Webpages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const indexNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={project.id}
                className={`flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-950/50' 
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl shadow-xs'
                }`}
              >
                <div>
                  {/* Screenshot / Interface Container */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Number Tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-mono font-bold text-slate-200">
                      {indexNumber}
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-indigo-600/90 text-white text-[11px] font-semibold backdrop-blur-md">
                      {project.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                            isDarkMode 
                              ? 'bg-slate-950 border-slate-800 text-slate-300' 
                              : 'bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (Direct Live Link & Details) */}
                <div className="p-6 pt-0 space-y-2">
                  {/* Direct Live Website Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm cursor-pointer"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Quick Overview button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer border ${
                      isDarkMode 
                        ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' 
                        : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};
