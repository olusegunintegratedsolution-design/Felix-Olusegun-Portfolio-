import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  Sliders, 
  Terminal, 
  Server, 
  Database, 
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Frontend', 'Backend & Server', 'Databases & Storage', 'Tools & Deployment'];

  const allSkills = SKILL_CATEGORIES.flatMap(cat => 
    cat.skills.map(s => ({ ...s, category: cat.category }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className={`py-20 transition-colors duration-200 border-t ${
      isDarkMode ? 'bg-[#080c14] border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            04. Skills & Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technologies I <span className="text-indigo-400">Master</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Solid hands-on experience in React, PHP, MySQL, JavaScript, TypeScript, and modern responsive CSS.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className={`flex flex-wrap items-center gap-1.5 p-1 rounded-xl border ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? isDarkMode ? 'bg-indigo-600 text-white shadow-xs' : 'bg-blue-600 text-white shadow-xs'
                    : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Skills' : cat.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border focus:outline-hidden transition-colors ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-white focus:border-indigo-500' 
                  : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
            />
          </div>

        </div>

        {/* Interactive Skills Grid with Animated Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-5 rounded-2xl border transition-all ${
                isDarkMode 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Skill Top Bar */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                    isDarkMode ? 'bg-slate-800 text-indigo-400' : 'bg-blue-100 text-blue-700'
                  }`}>
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{skill.name}</h4>
                    <span className="text-[11px] text-slate-400">{skill.experience} experience</span>
                  </div>
                </div>

                <div className="text-sm font-mono font-bold text-indigo-400 tabular-nums">
                  {skill.level}%
                </div>
              </div>

              {/* Progress Bar (Matching CodeCraft reference) */}
              <div className={`w-full h-2 rounded-full overflow-hidden ${
                isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
              }`}>
                <div 
                  className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-indigo-500 to-purple-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Summary Note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Focused on clean code, dependable server architecture with PHP & MySQL, and responsive user experiences with React.
        </div>

      </div>
    </section>
  );
};
