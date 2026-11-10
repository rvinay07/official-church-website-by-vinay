import React from 'react';
import { BookOpen, Shield, HeartHandshake, Flame, Droplets, SunMedium, Church, CheckCircle2, ArrowRight } from 'lucide-react';
import { BELIEFS, CHURCH_INFO } from '../data/churchData';

const iconMap = {
  BookOpen: BookOpen,
  Shield: Shield,
  HeartHandshake: HeartHandshake,
  Flame: Flame,
  Droplets: Droplets,
  SunMedium: SunMedium,
};

export default function BeliefsView({ setCurrentView, onNavigate }) {
  const navigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F8F5EF] text-[#252525] pb-16 sm:pb-20 overflow-x-hidden">
      
      {/* 1. Header Banner */}
      <section className="relative bg-[#103546] text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('church-image-6.jpeg')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0E2F3E] via-[#103546]/95 to-[#164B60]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-xs font-semibold uppercase tracking-wider border border-white/15">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Doctrinal Statement</span>
          </span>
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            What We Believe
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light italic font-serif">
            "For other foundation can no man lay than that is laid, which is Jesus Christ." &mdash; 1 Corinthians 3:11
          </p>
        </div>
      </section>

      {/* 2. Beliefs Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Foundations of Faith</span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mt-1">
            Our Biblical &amp; Pentecostal Heritage
          </h2>
          <p className="text-neutral-grey text-xs sm:text-sm mt-2 leading-relaxed">
            As a Bible-believing Assemblies of God congregation in Guntakal, we adhere faithfully to the eternal truths revealed in the Holy Scriptures.
          </p>
        </div>

        {/* 6 Doctrinal Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {BELIEFS.map((belief, idx) => {
            const IconComponent = iconMap[belief.icon] || BookOpen;
            return (
              <div 
                key={idx}
                className="bg-white rounded-md p-5 sm:p-7 border border-neutral-border shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors"
              >
                <div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center mb-3 sm:mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
                    {belief.text}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-border/60 flex items-center gap-1.5 text-xs text-teal-deep font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep shrink-0" />
                  <span>Scriptural Doctrine</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Inquiry & Bible Study Invitation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="p-6 sm:p-8 rounded-md bg-white border border-neutral-border shadow-subtle text-center space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
            Desire to Grow Deeper in the Word?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-grey max-w-xl mx-auto leading-relaxed">
            We host Sunday Bible classes, youth mentorship, and midweek prayer studies. If you have questions about theology, water baptism, or the Christian faith, our pastors are glad to sit with you.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <a
              href={`mailto:${CHURCH_INFO.email}?subject=Inquiry%20about%20Bible%20Study`}
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <span>Connect with Pastoral Staff</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => navigate('about')}
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <span>Back to Church Overview</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
