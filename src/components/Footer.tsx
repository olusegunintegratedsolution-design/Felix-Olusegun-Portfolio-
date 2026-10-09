import React from 'react';
import { 
  Code2, 
  Download, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { downloadCvFile } from '../utils/downloadCv';

interface FooterProps {
  isDarkMode: boolean;
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`transition-colors duration-200 border-t ${
      isDarkMode ? 'bg-[#060910] border-slate-800 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Felix <span className="text-indigo-400">Olusegun</span>
              </span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm text-slate-400">
              Full-Stack Web Developer and IT solutions provider specializing in React, PHP, MySQL, JavaScript, and responsive web design.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => downloadCvFile()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (.docx)</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Overview' },
                { id: 'about', label: 'About Me' },
                { id: 'skills', label: 'Skills Mastery' },
                { id: 'projects', label: 'Featured Projects' },
                { id: 'experience', label: 'Career Journey' },
                { id: 'cv', label: 'CV & Resume (.docx)' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              IT Services
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Web Design & Dev',
                'E-Commerce Solutions',
                'Mobile App Engineering',
                'Cloud Infrastructure',
                'UI/UX Design Systems',
                'Technical Advisory',
              ].map((serv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                  >
                    {serv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${DEVELOPER_PROFILE.email}`} className="hover:text-white truncate">
                  {DEVELOPER_PROFILE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>WhatsApp: {DEVELOPER_PROFILE.phoneNigeria}</div>
                  <div>WhatsApp: {DEVELOPER_PROFILE.phoneUS}</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{DEVELOPER_PROFILE.location}</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-4">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={DEVELOPER_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={DEVELOPER_PROFILE.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 {DEVELOPER_PROFILE.name}. All rights reserved. Built with React & Tailwind CSS.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">
              Clean UI/UX · High Core Web Vitals
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
