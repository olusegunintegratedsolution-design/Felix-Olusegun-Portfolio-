import React, { useState, useRef } from 'react';
import { 
  Download, 
  ArrowUpRight, 
  Copy, 
  Check, 
  CheckCircle2, 
  Calendar, 
  Code, 
  Smile, 
  Trophy,
  Sparkles,
  Camera,
  RotateCcw
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { downloadCvFile } from '../utils/downloadCv';
import defaultDeveloperPortrait from '../assets/images/felix_portrait.jpg';

interface HeroSectionProps {
  isDarkMode: boolean;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode, onNavigate }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Allow dynamic custom picture with instant fallback to the new professional portrait
  const [currentPortrait, setCurrentPortrait] = useState<string>(() => {
    return localStorage.getItem('custom_developer_portrait') || defaultDeveloperPortrait;
  });

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCurrentPortrait(reader.result);
          try {
            localStorage.setItem('custom_developer_portrait', reader.result);
          } catch (err) {
            console.warn('Could not save photo to localStorage', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPortrait(defaultDeveloperPortrait);
    localStorage.removeItem('custom_developer_portrait');
  };

  const developerCodeSnippet = `const developer = {
  name: "Felix Olusegun",
  role: "Full-Stack Web Developer",
  skills: ["React", "PHP", "MySQL", "JavaScript"],
  passion: "Building reliable web solutions",
  status: "Available for new projects"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(developerCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownload = async () => {
    const res = await downloadCvFile();
    if (res.success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }
  };

  const techBadges = [
    { name: "React.js", symbol: "⚛", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
    { name: "PHP", symbol: "PHP", color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20" },
    { name: "MySQL", symbol: "SQL", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "JavaScript", symbol: "JS", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
    { name: "HTML5", symbol: "H5", color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
    { name: "CSS3", symbol: "C3", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { name: "Tailwind CSS", symbol: "TW", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
    { name: "TypeScript", symbol: "TS", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
    { name: "Git & GitHub", symbol: "Git", color: "text-red-500 bg-red-500/10 border-red-500/20" },
  ];

  const stats = [
    { 
      id: "years", 
      value: DEVELOPER_PROFILE.yearsExperience, 
      label: "Years Experience", 
      icon: Calendar,
      color: "text-indigo-400"
    },
    { 
      id: "projects", 
      value: DEVELOPER_PROFILE.projectsCompleted, 
      label: "Projects Completed", 
      icon: Code,
      color: "text-cyan-400"
    },
    { 
      id: "clients", 
      value: DEVELOPER_PROFILE.happyClients, 
      label: "Happy Clients", 
      icon: Smile,
      color: "text-emerald-400"
    },
    { 
      id: "satisfaction", 
      value: DEVELOPER_PROFILE.clientSatisfaction, 
      label: "Client Satisfaction", 
      icon: Trophy,
      color: "text-amber-400"
    },
  ];

  return (
    <section id="home" className={`relative overflow-hidden pt-12 pb-16 transition-colors duration-200 ${
      isDarkMode ? 'bg-[#090d16]' : 'bg-slate-50'
    }`}>
      {/* Ambient background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            
            {/* Kicker Tag */}
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border ${
                isDarkMode 
                  ? 'bg-indigo-950/60 border-indigo-800/80 text-indigo-300' 
                  : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Senior Full-Stack & IT Solutions</span>
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-balance">
                <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>Hi, I'm </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300' 
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
                }`}>
                  {DEVELOPER_PROFILE.shortName}
                </span>
                <br />
                <span className={isDarkMode ? 'text-slate-200' : 'text-slate-900'}>
                  I build things for the web.
                </span>
              </h1>
            </div>

            {/* Lead Description */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {DEVELOPER_PROFILE.bio}
            </p>

            {/* Action Buttons: View Work & Download CV (.docx) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg cursor-pointer ${
                  isDarkMode 
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/25 hover:shadow-indigo-600/40' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25 hover:shadow-blue-600/40'
                }`}
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Prominent Download CV (.docx) Button */}
              <button
                onClick={handleDownload}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all border cursor-pointer ${
                  downloadSuccess
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                    : isDarkMode
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600'
                      : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-300 shadow-sm'
                }`}
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                    <span>CV Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className={`w-4 h-4 ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`} />
                    <span>Download CV</span>
                    <span className={`text-xs px-2 py-0.5 rounded font-mono font-bold ${
                      isDarkMode ? 'bg-indigo-950/80 text-indigo-300' : 'bg-blue-50 text-blue-700'
                    }`}>
                      .docx
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Technologies I Work With */}
            <div className="pt-4 space-y-2.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Technologies I Work With
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {techBadges.map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border transition-transform hover:-translate-y-0.5 ${
                      isDarkMode 
                        ? 'bg-slate-900/90 border-slate-800 text-slate-300' 
                        : 'bg-white border-slate-200 text-slate-700 shadow-xs'
                    }`}
                  >
                    <span className={`text-[11px] font-bold font-mono px-1 rounded ${tech.color}`}>
                      {tech.symbol}
                    </span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Developer Portrait & Floating Interactive Code Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Visual Aura Frame */}
            <div className="relative w-full max-w-md flex flex-col items-center">
              
              {/* Circular Ambient Halo */}
              <div className="absolute inset-0 m-auto w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-400/20 blur-xl pointer-events-none" />

              {/* Developer Portrait Image with Interactive Customizer */}
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-slate-800 shadow-2xl group">
                <img
                  src={currentPortrait}
                  alt={DEVELOPER_PROFILE.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full shadow-inner"
                />

                {/* Hidden File Input for Custom Upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleCustomPhotoUpload}
                  className="hidden"
                />

                {/* Edit Photo Floating Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload / Change picture to your photo"
                  className="absolute bottom-2 right-4 p-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-transform hover:scale-110 border-2 border-slate-900 cursor-pointer flex items-center justify-center z-30"
                >
                  <Camera className="w-4 h-4" />
                </button>

                {/* Reset button if custom photo is loaded */}
                {currentPortrait !== defaultDeveloperPortrait && (
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    title="Reset to default portrait"
                    className="absolute top-2 right-4 p-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white shadow-md transition-transform hover:scale-110 border border-slate-700 cursor-pointer z-30 text-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Floating Code Card (Matching CodeCraft Inspiration) */}
              <div className={`relative z-20 -mt-10 w-full rounded-xl border p-4 shadow-2xl transition-all ${
                isDarkMode 
                  ? 'bg-slate-900/95 border-slate-700/80 text-slate-200 backdrop-blur-md' 
                  : 'bg-white/95 border-slate-200 text-slate-800 shadow-slate-200/50 backdrop-blur-md'
              }`}>
                {/* Header with macOS style dots and Code label */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/40 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-slate-400 ml-1">developer.config.ts</span>
                  </div>
                  
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy code snippet"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code body */}
                <pre className="mt-3 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                  <code>
                    <span className="text-purple-400">const</span> developer = {'{\n'}
                    {'  '}name: <span className="text-emerald-300">"Felix Olusegun"</span>,{'\n'}
                    {'  '}skills: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"PHP"</span>, <span className="text-amber-300">"MySQL"</span>],{'\n'}
                    {'  '}passion: <span className="text-emerald-300">"Building real web solutions"</span>,{'\n'}
                    {'  '}cv: <span className="text-indigo-400">"Felix_CV.docx"</span>{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>

            </div>

          </div>

        </div>

        {/* Full-Width Key Stats Strip (Below Hero Split, per Design Constitution) */}
        <div className="mt-14 pt-8 border-t border-slate-800/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isDarkMode 
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${
                      isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono tabular-nums">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
