import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  CheckCircle2, 
  ShieldCheck,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { CV_CONFIG, CV_DATA } from '../data/cvConfig';
import { downloadCvFile } from '../utils/downloadCv';

interface CVResumeSectionProps {
  isDarkMode: boolean;
}

export const CVResumeSection: React.FC<CVResumeSectionProps> = ({ isDarkMode }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const handleDownload = async () => {
    const result = await downloadCvFile({
      customFileName: CV_CONFIG.fileName
    });
    if (result.success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plainTextCV = `
${CV_DATA.header.fullName}
${CV_DATA.header.targetRole}
Email: ${CV_DATA.header.email}
WhatsApp: ${CV_DATA.header.phoneNigeria} / ${CV_DATA.header.phoneUS}
Location: ${CV_DATA.header.location}

PROFILE SUMMARY:
${CV_DATA.summary}

TECHNICAL SKILLS:
Frontend: ${CV_DATA.technicalSkills.frontend.join(', ')}
Backend: ${CV_DATA.technicalSkills.backend.join(', ')}
Databases & Tools: ${CV_DATA.technicalSkills.databasesAndCloud.join(', ')}

EXPERIENCE:
${CV_DATA.experience.map(e => `
${e.title} - ${e.subtitle} (${e.date})
${e.bullets.map(b => `- ${b}`).join('\n')}
`).join('\n')}

EDUCATION:
${CV_DATA.education.map(ed => `${ed.title} - ${ed.subtitle} (${ed.date})`).join('\n')}

CERTIFICATIONS:
${CV_DATA.certifications.map(c => `${c.title} (${c.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainTextCV);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <section id="cv" className={`py-20 transition-colors duration-200 border-t print:py-0 print:border-none ${
      isDarkMode ? 'bg-[#080c14] border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 print:hidden">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            09. Verified CV & Resume
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Curriculum Vitae <span className="text-indigo-400">(.docx)</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Download my complete resume in Microsoft Word (.docx) format or review the interactive version below.
          </p>
        </div>

        {/* CV Download Control Banner */}
        <div className={`p-6 sm:p-8 rounded-2xl border shadow-xl mb-10 print:hidden ${
          isDarkMode 
            ? 'bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-indigo-500/30' 
            : 'bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/60 border-blue-200 shadow-blue-500/5'
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Document info */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1 justify-center sm:justify-start">
                  <h3 className="text-lg font-bold">
                    {CV_CONFIG.displayName}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-600 text-white">
                    .DOCX
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 justify-center sm:justify-start">
                  <span>Size: {CV_CONFIG.fileSize}</span>
                  <span>·</span>
                  <span>{CV_CONFIG.lastUpdated}</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-medium">ATS-Friendly Document</span>
                </div>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* PRIMARY DOWNLOAD BUTTON (.docx) */}
              <button
                onClick={handleDownload}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg cursor-pointer ${
                  downloadSuccess
                    ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30 hover:scale-105'
                }`}
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                    <span>Downloaded .docx!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download CV (.docx)</span>
                  </>
                )}
              </button>

              {/* Print / Save as PDF */}
              <button
                onClick={handlePrint}
                className={`flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                  isDarkMode 
                    ? 'border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white' 
                    : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                }`}
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              {/* Copy Plain Text */}
              <button
                onClick={handleCopyPlainText}
                className={`flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                  isDarkMode 
                    ? 'border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white' 
                    : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                }`}
                title="Copy text CV to clipboard"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">Copy Text</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Interactive Formatted Resume Document */}
        <div className={`p-8 sm:p-12 rounded-2xl border shadow-2xl transition-all print:border-none print:shadow-none print:p-0 ${
          isDarkMode 
            ? 'bg-slate-900/90 border-slate-800 text-slate-100' 
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-200/50'
        }`}>
          
          {/* Resume Header */}
          <div className="border-b border-slate-800/80 pb-6 mb-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {CV_DATA.header.fullName}
            </h1>
            <div className="text-base sm:text-lg font-semibold text-indigo-400 mt-1">
              {CV_DATA.header.targetRole}
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 mt-3 justify-center sm:justify-start">
              <span>{CV_DATA.header.email}</span>
              <span>·</span>
              <span>WhatsApp: {CV_DATA.header.phoneNigeria}</span>
              <span>·</span>
              <span>WhatsApp: {CV_DATA.header.phoneUS}</span>
              <span>·</span>
              <span>{CV_DATA.header.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Profile Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {CV_DATA.summary}
            </p>
          </div>

          {/* Core Technical Expertise */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="font-bold text-slate-200 block mb-1">Frontend Development:</span>
                <span className="text-slate-400">{CV_DATA.technicalSkills.frontend.join(' · ')}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="font-bold text-slate-200 block mb-1">Backend & Server:</span>
                <span className="text-slate-400">{CV_DATA.technicalSkills.backend.join(' · ')}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="font-bold text-slate-200 block mb-1">Databases & Tools:</span>
                <span className="text-slate-400">{CV_DATA.technicalSkills.databasesAndCloud.join(' · ')}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="font-bold text-slate-200 block mb-1">Work Practices:</span>
                <span className="text-slate-400">{CV_DATA.technicalSkills.practices.join(' · ')}</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">
              Work Experience
            </h2>
            <div className="space-y-6">
              {CV_DATA.experience.map((job, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-100">
                      {job.title} <span className="text-indigo-400">| {job.subtitle}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{job.date}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">{job.location}</div>
                  <ul className="space-y-1.5 pt-1">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <span className="text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-800/80">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
                Education
              </h2>
              {CV_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-sm font-bold text-slate-200">{edu.title}</div>
                  <div className="text-xs text-indigo-400">{edu.subtitle} ({edu.date})</div>
                  <ul className="mt-1 space-y-1">
                    {edu.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-slate-400">• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
                Certifications
              </h2>
              <div className="space-y-2.5">
                {CV_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <div className="font-bold text-slate-200">{cert.title}</div>
                    <div className="text-slate-400">{cert.subtitle} · {cert.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
