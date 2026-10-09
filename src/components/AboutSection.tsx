import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Award, 
  Code, 
  Heart, 
  Compass, 
  Target 
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { downloadCvFile } from '../utils/downloadCv';
import techLaptopImg from '../assets/images/tech_laptop_workspace_1791525812281.jpg';

interface AboutSectionProps {
  isDarkMode: boolean;
  onNavigate: (section: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'journey' | 'principles' | 'stack'>('journey');

  const checkmarks = [
    { title: "Experienced Full-Stack Developer", desc: "6+ years building real-world websites and web systems" },
    { title: "Solid Tech Stack", desc: "React, JavaScript, PHP, MySQL, and Tailwind CSS" },
    { title: "Direct Communication", desc: "Fast replies on WhatsApp and clear project updates" },
    { title: "Reliable & On-Time Delivery", desc: "10 completed web projects for 15 happy clients" },
  ];

  return (
    <section id="about" className={`py-20 transition-colors duration-200 border-t ${
      isDarkMode ? 'bg-[#080c14] border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            02. About Me & Executive Story
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            I'm Passionate About Creating <span className="text-indigo-400">Digital Solutions</span> That Scale
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Bridging technical excellence and purposeful product design to solve real-world problems.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Container with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src={techLaptopImg}
                alt="Developer workspace and IT solutions"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge (Matching Reference 1 & 2) */}
            <div className={`absolute -bottom-6 -right-4 sm:right-6 p-5 rounded-2xl border shadow-xl flex items-center gap-4 ${
              isDarkMode 
                ? 'bg-slate-900/95 border-indigo-500/40 text-white' 
                : 'bg-white border-blue-500/30 text-slate-900 shadow-blue-500/10'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono">6+ Years</div>
                <div className="text-xs text-slate-400 font-medium">Of Verified Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Tabs & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Segmented Tabs */}
            <div className={`inline-flex p-1 rounded-xl border ${
              isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setActiveTab('journey')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'journey'
                    ? isDarkMode ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-blue-600 shadow-sm'
                    : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                My Journey
              </button>
              <button
                onClick={() => setActiveTab('principles')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'principles'
                    ? isDarkMode ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-blue-600 shadow-sm'
                    : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Engineering Principles
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'stack'
                    ? isDarkMode ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-blue-600 shadow-sm'
                    : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Core Mission
              </button>
            </div>

            {/* Tab Narrative Content */}
            <div className={`p-6 rounded-2xl border leading-relaxed ${
              isDarkMode ? 'bg-slate-900/50 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              {activeTab === 'journey' && (
                <div className="space-y-3">
                  <p>
                    I studied Computer Science at the University of Lagos and discovered a strong passion for solving real business problems through web technology. 
                    Over the past 6+ years, I have worked as a full-stack developer helping business owners, startups, and creative teams establish powerful web presence.
                  </p>
                  <p>
                    My core strength lies in combining responsive frontend interfaces in React and Tailwind CSS with secure, dependable server logic written in PHP and MySQL databases.
                  </p>
                </div>
              )}

              {activeTab === 'principles' && (
                <div className="space-y-3">
                  <p>
                    <strong>1. Clean & Maintainable Code:</strong> I write readable, organized code so that any developer or client can easily maintain and extend their website in the future.
                  </p>
                  <p>
                    <strong>2. Fast Load Times:</strong> A slow website loses customers. I optimize image assets, database queries, and scripts to ensure pages load swiftly on mobile and desktop.
                  </p>
                  <p>
                    <strong>3. Mobile-First & Responsive:</strong> Over 70% of web traffic comes from smartphones. Every website I build looks crisp, polished, and fully functional on every screen size.
                  </p>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-3">
                  <p>
                    My mission is to help clients launch websites that don't just look great, but also convert visitors into paying customers. 
                    Whether you need a custom business website, an e-commerce platform, or database maintenance, I communicate clearly every step of the way.
                  </p>
                </div>
              )}
            </div>

            {/* Bullet Proof Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {checkmarks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">{item.title}</div>
                    <div className="text-[11px] text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('experience')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-800 hover:bg-slate-700 text-white' 
                    : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
                }`}
              >
                <span>View Full Career Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => downloadCvFile()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (.docx)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
