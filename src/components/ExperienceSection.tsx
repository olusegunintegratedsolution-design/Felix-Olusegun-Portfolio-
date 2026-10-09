import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="experience" className={`py-20 transition-colors duration-200 border-t ${
      isDarkMode ? 'bg-[#080c14] border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            06. Career Journey & Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work <span className="text-indigo-400">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            My hands-on experience building web applications, databases, and client solutions over the past 6+ years.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-800 before:-translate-x-1/2">
          {WORK_EXPERIENCE.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-6 md:gap-12`}
              >
                {/* Center Node Icon */}
                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 ${
                  idx === 0 
                    ? 'bg-indigo-600 border-indigo-400 text-white' 
                    : isDarkMode 
                      ? 'bg-slate-900 border-slate-700 text-slate-400' 
                      : 'bg-white border-slate-300 text-slate-600'
                }`}>
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Content Card */}
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                    isDarkMode 
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}>
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-100">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono font-medium text-indigo-400">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-slate-300 mb-3">
                      {exp.company} <span className="text-slate-500">· {exp.location}</span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-5">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/40">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
