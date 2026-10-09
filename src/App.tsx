/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Layers, 
  ArrowUp, 
  CheckCircle2 
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CVResumeSection } from './components/CVResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PageNavigationDrawer } from './components/PageNavigationDrawer';
import { downloadCvFile } from './utils/downloadCv';
import { CV_CONFIG } from './data/cvConfig';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isPageDrawerOpen, setIsPageDrawerOpen] = useState<boolean>(false);
  const [isPageViewMode, setIsPageViewMode] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('Full-Stack Web Development');
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (!isPageViewMode) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    handleNavigate('contact');
  };

  const handleFloatingDownloadCV = async () => {
    const res = await downloadCvFile();
    if (res.success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-[#090d16] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenPageDrawer={() => setIsPageDrawerOpen(true)}
        isPageViewMode={isPageViewMode}
        setIsPageViewMode={setIsPageViewMode}
      />

      {/* Main Content Area */}
      <main>
        {isPageViewMode ? (
          /* Isolated Page View Mode */
          <div className="py-6 min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="flex items-center justify-between p-3.5 rounded-xl border bg-slate-900/40 border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-200">Active View:</span>
                  <span className="text-indigo-400 font-mono font-bold uppercase">{activeSection}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPageDrawerOpen(true)}
                    className="text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
                  >
                    Switch Page (10 Pages)
                  </button>
                  <span className="text-slate-600">|</span>
                  <button
                    onClick={() => setIsPageViewMode(false)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Return to Full Scroll Mode
                  </button>
                </div>
              </div>
            </div>

            {activeSection === 'home' && <HeroSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />}
            {activeSection === 'about' && <AboutSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />}
            {activeSection === 'services' && (
              <ServicesSection 
                isDarkMode={isDarkMode} 
                onSelectServiceForQuote={handleSelectServiceForQuote} 
              />
            )}
            {activeSection === 'skills' && <SkillsSection isDarkMode={isDarkMode} />}
            {activeSection === 'projects' && <ProjectsSection isDarkMode={isDarkMode} />}
            {activeSection === 'experience' && <ExperienceSection isDarkMode={isDarkMode} />}
            {activeSection === 'education' && <EducationSection isDarkMode={isDarkMode} />}
            {activeSection === 'testimonials' && <TestimonialsSection isDarkMode={isDarkMode} />}
            {activeSection === 'cv' && <CVResumeSection isDarkMode={isDarkMode} />}
            {activeSection === 'contact' && (
              <ContactSection 
                isDarkMode={isDarkMode} 
                preselectedService={preselectedService} 
              />
            )}
          </div>
        ) : (
          /* Continuous Scroll Mode (10 focused, humanized sections) */
          <>
            {/* 01. Home Overview & Hero */}
            <HeroSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />

            {/* 02. About Me */}
            <AboutSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />

            {/* 03. IT Services & Web Solutions */}
            <ServicesSection 
              isDarkMode={isDarkMode} 
              onSelectServiceForQuote={handleSelectServiceForQuote} 
            />

            {/* 04. Skills & Technologies */}
            <SkillsSection isDarkMode={isDarkMode} />

            {/* 05. Featured Projects & Live Webpages (9 Showcase Sites) */}
            <ProjectsSection isDarkMode={isDarkMode} />

            {/* 06. Career Journey & Experience */}
            <ExperienceSection isDarkMode={isDarkMode} />

            {/* 07. Education & Credentials */}
            <EducationSection isDarkMode={isDarkMode} />

            {/* 08. Client Reviews & Feedback */}
            <TestimonialsSection isDarkMode={isDarkMode} />

            {/* 09. CV & Resume (.docx) Download Station */}
            <CVResumeSection isDarkMode={isDarkMode} />

            {/* 10. Contact, WhatsApp & Inquiries */}
            <ContactSection 
              isDarkMode={isDarkMode} 
              preselectedService={preselectedService} 
            />
          </>
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer isDarkMode={isDarkMode} onNavigate={handleNavigate} />

      {/* 10-Page Navigation Switcher Modal/Drawer */}
      <PageNavigationDrawer
        isOpen={isPageDrawerOpen}
        onClose={() => setIsPageDrawerOpen(false)}
        activeSection={activeSection}
        onSelectSection={handleNavigate}
        isDarkMode={isDarkMode}
        isPageViewMode={isPageViewMode}
        setIsPageViewMode={setIsPageViewMode}
      />

      {/* Floating Quick Action Widget (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 print:hidden">
        
        {/* Floating Download CV (.docx) button */}
        <button
          onClick={handleFloatingDownloadCV}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full shadow-2xl text-xs font-bold transition-all transform hover:scale-105 cursor-pointer border ${
            downloadSuccess
              ? 'bg-emerald-600 text-white border-emerald-400'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400 shadow-indigo-600/30'
          }`}
          title="Download Felix Olusegun CV in .docx format"
        >
          {downloadSuccess ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-200" />
              <span>Downloaded .docx!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Download CV</span>
              <span className="text-[10px] bg-indigo-900/60 px-1.5 py-0.5 rounded font-mono">.docx</span>
            </>
          )}
        </button>

        {/* Back to Top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll back to top"
            className="p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 shadow-xl backdrop-blur-md transition-all hover:bg-slate-800"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
