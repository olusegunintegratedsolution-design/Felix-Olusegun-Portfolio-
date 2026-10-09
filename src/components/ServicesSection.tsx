import React, { useState } from 'react';
import { 
  Monitor, 
  ShoppingCart, 
  Smartphone, 
  Cloud, 
  Palette, 
  Headphones, 
  ArrowRight, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';

interface ServicesSectionProps {
  isDarkMode: boolean;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  isDarkMode, 
  onSelectServiceForQuote 
}) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return Monitor;
      case 'ShoppingCart': return ShoppingCart;
      case 'Smartphone': return Smartphone;
      case 'Cloud': return Cloud;
      case 'Palette': return Palette;
      case 'Headphones': return Headphones;
      default: return Monitor;
    }
  };

  return (
    <section id="services" className={`py-20 transition-colors duration-200 border-t ${
      isDarkMode ? 'bg-[#090d16] border-slate-800/80 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            03. What We Do & Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Web & <span className="text-indigo-400">IT Solutions</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            From custom responsive websites to database-backed web applications, I deliver reliable digital solutions tailored to your business goals.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-7 rounded-2xl border transition-all duration-200 group ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/90' 
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg shadow-xs'
                }`}
              >
                <div>
                  {/* Card Header with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/20' 
                        : 'bg-blue-50 text-blue-600 border border-blue-200'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold text-slate-400">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className={`text-xs leading-relaxed mb-6 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/40">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isDarkMode 
                        ? 'bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white' 
                        : 'bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white'
                    }`}
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Strip */}
        <div className={`mt-14 p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 border-indigo-900/50' 
            : 'bg-gradient-to-r from-blue-50 via-white to-blue-50 border-blue-200'
        }`}>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Need a Custom Software Solution?</h4>
            <p className="text-xs text-slate-400">
              I provide end-to-end technical consultations, architecture design, and turn-key development.
            </p>
          </div>
          
          <button
            onClick={() => onSelectServiceForQuote('Custom Software Solution')}
            className="px-5 py-3 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get a Free Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
