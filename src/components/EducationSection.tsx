import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle, 
  ExternalLink,
  ShieldCheck 
} from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface EducationSectionProps {
  isDarkMode: boolean;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="education" className={`py-20 transition-colors duration-200 border-t ${
      isDarkMode ? 'bg-[#090d16] border-slate-800/80 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            07. Academic & Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education & <span className="text-indigo-400">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Formally grounded in Computer Science and certified in modern web development and database management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Academic Degree */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <span>University Education</span>
            </h3>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-800' 
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-indigo-400">{edu.period}</span>
                  <span className="text-[11px] font-semibold text-emerald-400">{edu.honors}</span>
                </div>

                <h4 className="text-lg font-bold text-slate-100 mb-1">{edu.degree}</h4>
                <div className="text-xs text-slate-400 mb-4">{edu.institution} · {edu.location}</div>

                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/40 pt-4">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>Verified Industry Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isDarkMode 
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600/15 text-indigo-400 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-slate-500">{cert.issueDate}</span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-200 mb-1 leading-snug">
                      {cert.title}
                    </h4>

                    <div className="text-xs text-slate-400 mb-3">{cert.issuer}</div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-slate-500 truncate max-w-[140px]">
                      {cert.credentialId}
                    </span>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
