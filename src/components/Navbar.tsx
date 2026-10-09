import React, { useState } from 'react';
import { 
  Download, 
  ExternalLink, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Layers, 
  Code2, 
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { DEVELOPER_PROFILE, LANDING_PAGES } from '../data/portfolioData';
import { CV_CONFIG } from '../data/cvConfig';
import { downloadCvFile } from '../utils/downloadCv';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenPageDrawer: () => void;
  isPageViewMode: boolean;
  setIsPageViewMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  isDarkMode,
  setIsDarkMode,
  onOpenPageDrawer,
  isPageViewMode,
  setIsPageViewMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  const handleDownloadCV = async () => {
    const result = await downloadCvFile();
    if (result.success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'CV (.docx)' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);

    if (!isPageViewMode) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-slate-950/90 border-b border-slate-800/80 text-slate-100 backdrop-blur-md' 
        : 'bg-white/90 border-b border-slate-200 text-slate-900 backdrop-blur-md'
    }`}>
      {/* Strict 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Wordmark Brand (Single Text Element) */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
        >
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-base transition-transform group-hover:scale-105 ${
            isDarkMode 
              ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' 
              : 'bg-blue-600 text-white'
          }`}>
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight whitespace-nowrap">
            Felix <span className={isDarkMode ? 'text-indigo-400' : 'text-blue-600'}>Olusegun</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-Line Typography) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? isDarkMode 
                      ? 'text-indigo-400 border-indigo-400 font-semibold' 
                      : 'text-blue-600 border-blue-600 font-semibold'
                    : isDarkMode 
                      ? 'text-slate-400 border-transparent hover:text-white' 
                      : 'text-slate-600 border-transparent hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* Quick 10-Pages Drawer Switcher */}
          <div className="relative">
            <button
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                isDarkMode 
                  ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' 
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>10 Pages</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {pagesDropdownOpen && (
              <div 
                className={`absolute right-0 mt-2 w-64 rounded-xl shadow-xl border p-2 z-50 ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-800 text-slate-200' 
                    : 'bg-white border-slate-200 text-slate-800 shadow-slate-200/50'
                }`}
              >
                <div className="px-3 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-800/40">
                  Select Landing Page / Section
                </div>
                <div className="max-h-80 overflow-y-auto py-1">
                  {LANDING_PAGES.map((page, index) => (
                    <button
                      key={page.id}
                      onClick={() => handleNavClick(page.id)}
                      className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between transition-colors ${
                        activeSection === page.id
                          ? isDarkMode ? 'bg-indigo-600/20 text-indigo-300 font-semibold' : 'bg-blue-50 text-blue-700 font-semibold'
                          : isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span>{index + 1}. {page.label}</span>
                      <span className="text-[10px] text-slate-500">{page.kicker.split('. ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Actions (Download CV + Hire Me + Theme Switcher) */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Mode Switcher (All Sections vs Isolated Page View) */}
          <button
            onClick={() => setIsPageViewMode(!isPageViewMode)}
            title={isPageViewMode ? "Switch to single continuous scroll" : "Switch to isolated page views"}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
              isPageViewMode
                ? isDarkMode
                  ? 'bg-indigo-950/60 border-indigo-700 text-indigo-300'
                  : 'bg-blue-50 border-blue-300 text-blue-700'
                : isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isPageViewMode ? "Page Mode" : "Scroll Mode"}</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Dark and Light theme"
            className={`p-2 rounded-lg transition-colors border ${
              isDarkMode 
                ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download CV (.docx) Button */}
          <button
            onClick={handleDownloadCV}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all border whitespace-nowrap ${
              downloadSuccess
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                : isDarkMode
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300'
            }`}
            title="Download full resume in Word .docx format"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-indigo-400" />
                <span>Download CV</span>
                <span className={`text-[10px] px-1 py-0.2 rounded font-mono ${
                  isDarkMode ? 'bg-indigo-950 text-indigo-300' : 'bg-blue-100 text-blue-700'
                }`}>
                  .docx
                </span>
              </>
            )}
          </button>

          {/* Hire Me CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-white shadow-sm transition-all whitespace-nowrap ${
              isDarkMode 
                ? 'bg-indigo-600 hover:bg-indigo-500' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            <span>Hire Me</span>
            <ExternalLink className="w-3 h-3" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white"
            aria-label="Open Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-4 space-y-2 ${
          isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/40">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 text-xs rounded-md font-medium ${
                  activeSection === link.id
                    ? isDarkMode ? 'bg-indigo-600/20 text-indigo-400 font-bold' : 'bg-blue-50 text-blue-700 font-bold'
                    : isDarkMode ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                handleDownloadCV();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (.docx)</span>
            </button>
            
            <button
              onClick={() => {
                onOpenPageDrawer();
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-xs rounded-lg border font-medium ${
                isDarkMode ? 'border-slate-800 text-slate-300' : 'border-slate-300 text-slate-700'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Browse All 10 Landing Pages</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
