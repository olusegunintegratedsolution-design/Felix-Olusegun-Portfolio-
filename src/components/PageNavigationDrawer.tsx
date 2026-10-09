import React from 'react';
import { 
  X, 
  Layers, 
  Home, 
  User, 
  Briefcase, 
  Code, 
  FolderKanban, 
  FileCode, 
  Clock, 
  GraduationCap, 
  Star, 
  BookOpen, 
  Download, 
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { LANDING_PAGES } from '../data/portfolioData';

interface PageNavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSelectSection: (id: string) => void;
  isDarkMode: boolean;
  isPageViewMode: boolean;
  setIsPageViewMode: (val: boolean) => void;
}

export const PageNavigationDrawer: React.FC<PageNavigationDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onSelectSection,
  isDarkMode,
  isPageViewMode,
  setIsPageViewMode,
}) => {
  if (!isOpen) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return Home;
      case 'User': return User;
      case 'Briefcase': return Briefcase;
      case 'Code': return Code;
      case 'FolderKanban': return FolderKanban;
      case 'FileCode': return FileCode;
      case 'Clock': return Clock;
      case 'GraduationCap': return GraduationCap;
      case 'Star': return Star;
      case 'BookOpen': return BookOpen;
      case 'Download': return Download;
      case 'Mail': return Mail;
      default: return Layers;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <div className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 z-10 shadow-2xl overflow-hidden ${
        isDarkMode ? 'bg-[#0b0f19] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Portfolio Pages (10)</h3>
              <p className="text-xs text-slate-400">
                Quickly explore or focus on any section or landing page view.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDarkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Mode Toggle Switch */}
        <div className={`mb-6 p-3.5 rounded-xl border flex items-center justify-between text-xs ${
          isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <span className="font-bold text-slate-200 block">Display Mode</span>
            <span className="text-[11px] text-slate-400">
              {isPageViewMode ? "Viewing one isolated page at a time" : "Viewing continuous full-page scroll"}
            </span>
          </div>

          <button
            onClick={() => setIsPageViewMode(!isPageViewMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
              isPageViewMode
                ? 'bg-indigo-600 border-indigo-500 text-white'
                : isDarkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-300'
                  : 'bg-white border-slate-300 text-slate-700'
            }`}
          >
            {isPageViewMode ? "Switch to Full Scroll" : "Switch to Single Page"}
          </button>
        </div>

        {/* 12 Landing Pages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[55vh] overflow-y-auto pr-1">
          {LANDING_PAGES.map((page, idx) => {
            const Icon = getIcon(page.icon);
            const isCurrent = activeSection === page.id;

            return (
              <button
                key={page.id}
                onClick={() => {
                  onSelectSection(page.id);
                  onClose();
                }}
                className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                  isCurrent
                    ? isDarkMode 
                      ? 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300' 
                      : 'bg-blue-50 border-blue-400 text-blue-700'
                    : isDarkMode 
                      ? 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-800 hover:border-slate-700 text-slate-300' 
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isCurrent 
                      ? 'bg-indigo-600 text-white' 
                      : isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-700'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">
                      {idx + 1}. {page.label}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {page.kicker}
                    </div>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
          <span>10 distinct portfolio sections configured</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Close Menu
          </button>
        </div>

      </div>
    </div>
  );
};
