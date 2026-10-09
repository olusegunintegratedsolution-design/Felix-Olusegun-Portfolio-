import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck 
} from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

interface TestimonialsSectionProps {
  isDarkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className={`py-20 transition-colors duration-200 border-t ${
      isDarkMode ? 'bg-[#080c14] border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            08. Testimonials & Client Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What Clients & <span className="text-indigo-400">Partners Say</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Real feedback from business owners and founders I've built web solutions for.
          </p>
        </div>

        {/* Testimonials Grid (3 Cards on Desktop, Carousel Controls) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-500/30" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-sm text-indigo-400 shrink-0 border border-slate-700">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-100">{item.name}</h4>
                  <div className="text-[11px] text-slate-400">
                    {item.role}, <span className="text-indigo-400 font-medium">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
