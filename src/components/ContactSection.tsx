import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Calculator, 
  ExternalLink,
  Sparkles,
  Clock
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface ContactSectionProps {
  isDarkMode: boolean;
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  isDarkMode, 
  preselectedService 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService || 'Web Design & Development',
    budget: '$3k - $5k',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Project Estimator State
  const [projectType, setProjectType] = useState<'mvp' | 'ecommerce' | 'fullstack' | 'enterprise'>('fullstack');
  const [timeline, setTimeline] = useState<'standard' | 'rush'>('standard');
  const [includedFeatures, setIncludedFeatures] = useState<string[]>([
    'Responsive Frontend',
    'API & Database',
    'Auth & Payments'
  ]);

  const calculateEstimate = () => {
    let base = 3500;
    if (projectType === 'mvp') base = 2500;
    if (projectType === 'ecommerce') base = 4200;
    if (projectType === 'enterprise') base = 6500;

    const featureCost = includedFeatures.length * 400;
    const rushMultiplier = timeline === 'rush' ? 1.25 : 1.0;

    const totalMin = Math.round((base + featureCost) * rushMultiplier);
    const totalMax = Math.round(totalMin * 1.35);

    return { min: totalMin, max: totalMax };
  };

  const estimate = calculateEstimate();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        service: 'Web Design & Development',
        budget: '$3k - $5k',
        message: '',
      });
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className={`py-20 transition-colors duration-200 border-t ${
      isDarkMode ? 'bg-[#090d16] border-slate-800/80 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            10. Contact & Project Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Have a Project in <span className="text-indigo-400">Mind?</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Let's discuss your website or web application project. Send a message or chat with me directly on WhatsApp.
          </p>
        </div>

        {/* Top Blue CTA Banner */}
        <div className={`p-8 rounded-2xl border shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-indigo-900/40 via-slate-900 to-indigo-950/30 border-indigo-500/30' 
            : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border-blue-500'
        }`}>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Let's discuss your project today</h3>
            <p className="text-xs text-indigo-200">
              Direct and fast response on WhatsApp · Clear communication from start to finish
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={DEVELOPER_PROFILE.whatsappNigeria}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: 08123792226</span>
            </a>

            <a
              href={DEVELOPER_PROFILE.whatsappUS}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +1 205 237 1919</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800' 
                  : 'bg-white text-blue-700 border-white hover:bg-blue-50'
              }`}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Two-Column Form & Cost Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Project Estimator & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Project Cost Estimator Card */}
            <div className={`p-6 sm:p-7 rounded-2xl border ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Calculator className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">Quick Cost Estimator</h3>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Live calculation</span>
              </div>

              {/* Project Scope Selector */}
              <div className="space-y-3 mb-4">
                <label className="text-xs font-semibold text-slate-400 block">Project Scope</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'mvp', label: 'Startup MVP' },
                    { id: 'ecommerce', label: 'E-Commerce' },
                    { id: 'fullstack', label: 'Full-Stack App' },
                    { id: 'enterprise', label: 'Enterprise Suite' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setProjectType(p.id as any)}
                      className={`py-2 px-3 text-xs rounded-xl border text-left font-medium transition-colors cursor-pointer ${
                        projectType === p.id
                          ? isDarkMode ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-blue-600 text-white border-blue-600'
                          : isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Speed */}
              <div className="space-y-2 mb-4">
                <label className="text-xs font-semibold text-slate-400 block">Delivery Velocity</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTimeline('standard')}
                    className={`py-2 px-3 text-xs rounded-xl border font-medium transition-colors cursor-pointer ${
                      timeline === 'standard'
                        ? 'bg-slate-800 text-white border-slate-700'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Standard (4-8 weeks)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeline('rush')}
                    className={`py-2 px-3 text-xs rounded-xl border font-medium transition-colors cursor-pointer ${
                      timeline === 'rush'
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Sprint Rush (2-3 weeks)
                  </button>
                </div>
              </div>

              {/* Estimated Result Badge */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">Estimated Budget Range</div>
                <div className="text-2xl font-mono font-extrabold text-indigo-400 my-1">
                  ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-500">
                  Fixed milestone payments · Scope tailored to your specs
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/15 text-indigo-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Direct Email</div>
                  <a href={`mailto:${DEVELOPER_PROFILE.email}`} className="text-xs font-bold text-slate-200 hover:text-indigo-400">
                    {DEVELOPER_PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/15 text-indigo-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">WhatsApp & Calls</div>
                  <div className="text-xs font-bold text-slate-200">
                    {DEVELOPER_PROFILE.phoneNigeria} <span className="text-slate-400">(NG)</span>
                  </div>
                  <div className="text-xs font-bold text-slate-200">
                    {DEVELOPER_PROFILE.phoneUS} <span className="text-slate-400">(US/Intl)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/15 text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Location & Timezone</div>
                  <div className="text-xs font-bold text-slate-200">
                    {DEVELOPER_PROFILE.location} (GMT+1)
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: In-Depth Message & Quote Request Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-2xl border ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <h3 className="text-xl font-bold tracking-tight mb-2">Send an Inquiry or Quote Request</h3>
              <p className="text-xs text-slate-400 mb-6">
                Tell me about your project goals, deadlines, and technical requirements.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-200">Message Received!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'there'}. I have received your inquiry regarding {formData.service} and will review your requirements promptly. Expect a response within 24 hours at {formData.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-hidden ${
                          isDarkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-hidden ${
                          isDarkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Desired Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-hidden ${
                          isDarkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                        }`}
                      >
                        <option value="Web Design & Development">Web Design & Full-Stack Development</option>
                        <option value="E-Commerce Solutions">E-Commerce Platform & Checkout</option>
                        <option value="Mobile App Development">Mobile App & Progressive Web App</option>
                        <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                        <option value="UI/UX Engineering">UI/UX Design Systems</option>
                        <option value="IT Consulting & Advisory">IT Consulting & Codebase Audit</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Budget Expectation</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-hidden ${
                          isDarkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                        }`}
                      >
                        <option value="Under $3,000">Under $3,000</option>
                        <option value="$3k - $5k">$3,000 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Project Brief & Details *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current application, technical stack, key deadlines, or specific problems you need solved..."
                      className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-hidden resize-none ${
                        isDarkMode 
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Request Quote</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
