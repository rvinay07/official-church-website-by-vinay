import React from 'react';
import { Clock, Radio, Music, BookOpen, Heart, Users, MapPin, Sparkles, CheckCircle2, ArrowRight, ExternalLink, Moon, Flame, HandHeart } from 'lucide-react';
import { SERVICES, CHURCH_INFO, WEEKLY_PROGRAMS } from '../data/churchData';
import ServiceCountdown from '../components/ServiceCountdown';

export default function ServicesView({ openPrayerModal, onOpenPrayer, onNavigate, setCurrentView }) {
  const handlePrayer = onOpenPrayer || openPrayerModal;

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
      <section className="relative bg-[#103546] text-white pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('church-image-3.jpeg')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0E2F3E] via-[#103546]/95 to-[#164B60]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-xs font-semibold uppercase tracking-wider border border-white/15">
            <Clock className="w-3.5 h-3.5" />
            <span>Weekly Worship Gatherings</span>
          </span>
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Sunday Worship Services &amp; Schedule
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Come join us this Sunday for joyful praise songs, God’s Word, and personal prayer for you and your family.
          </p>
        </div>
      </section>

      {/* Floating Sunday Service Countdown Bridge */}
      <div className="relative z-20 max-w-sm sm:max-w-md mx-auto -mt-8 sm:-mt-10 px-4">
        <ServiceCountdown />
      </div>

      {/* 2. Sunday Services Detailed List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 space-y-4 sm:space-y-6">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Lord's Day Worship</span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mt-1">
            Our 4 Sunday Services
          </h2>
          <p className="text-neutral-grey text-xs sm:text-sm mt-1">
            Services conducted in Telugu and English. Everyone is warmly welcome to attend with family.
          </p>
        </div>

        {SERVICES.map((service, idx) => (
          <div
            key={service.id || idx}
            className="bg-white rounded-md border border-neutral-border p-5 sm:p-7 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-teal-deep transition-colors"
          >
            <div className="flex items-start gap-3.5 sm:gap-5">
              {/* Service Number Badge */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center font-serif text-lg sm:text-xl font-bold flex-shrink-0 border border-teal-deep/20 mt-0.5">
                {service.id}
              </div>

              {/* Service Information */}
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-teal-surface text-teal-deep">
                    {service.language || 'Telugu'}
                  </span>
                  {service.badge && (
                    <span className="text-[11px] sm:text-xs text-neutral-grey">
                      &bull; {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-charcoal leading-snug">
                  {service.title}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gold-deep">
                  <Clock className="w-4 h-4 text-gold-muted shrink-0" />
                  <span>{service.time}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-grey leading-relaxed pt-1">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Actions & Status */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-2.5 flex-shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-border/60">
              {service.isLive ? (
                <a
                  href={CHURCH_INFO.youtubeStreams}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 border border-red-500/20 touch-manipulation group"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <Radio className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>Watch YouTube Live</span>
                  <ExternalLink className="w-3 h-3 text-white/80" />
                </a>
              ) : (
                <span className="text-xs text-neutral-grey font-medium flex items-center justify-center sm:justify-start gap-1.5 px-3 py-1.5 rounded-full bg-ivory-warm border border-neutral-border/60">
                  <Clock className="w-3.5 h-3.5 text-teal-deep shrink-0" />
                  <span>In-Person Service</span>
                </span>
              )}
            </div>
          </div>
        ))}

        {/* Children's Church Sunday School Callout */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-md border border-amber-200/80 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-subtle">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-serif text-base sm:text-lg font-bold text-charcoal">
                  Children's Church (Sunday School)
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  Sunday School
                </span>
              </div>
              <div className="text-xs font-semibold text-amber-900 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Every Sunday During Morning Worship Services</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pt-0.5">
                While parents worship in the main sanctuary, children enjoy joyful action songs, illustrated Bible stories, memory verses, and dedicated teachers.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate('ministry-children')}
            className="btn-secondary text-xs self-start sm:self-center shrink-0"
          >
            <span>Sunday School Details &rarr;</span>
          </button>
        </div>
      </section>

      {/* 3. Weekly & Monthly Church Programs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="bg-ivory-warm rounded-md border border-neutral-border p-5 sm:p-8">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Church Calendar</span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mt-0.5">
              Weekly &amp; Monthly Programs
            </h3>
            <p className="text-xs sm:text-sm text-neutral-grey mt-1">
              Official gatherings, fasting prayers, and fellowships conducted according to our church schedule. All believers are encouraged to participate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {WEEKLY_PROGRAMS.map((prog) => (
              <div 
                key={prog.id} 
                className="bg-white p-5 rounded-md border border-neutral-border space-y-2.5 shadow-subtle hover:border-teal-deep transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-teal-surface text-teal-deep">
                      {prog.tag} Fellowship
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-grey px-2 py-0.5 rounded bg-stone-100 border border-neutral-border/60">
                      Official Gathering
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-charcoal text-base sm:text-lg">
                    {prog.title}
                  </h4>

                  <div className="text-xs font-semibold text-gold-deep flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5 shrink-0 text-gold-muted" />
                    <span>{prog.schedule}</span>
                  </div>

                  <p className="text-xs text-neutral-grey leading-relaxed pt-2">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-border/60 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">In-Person Gathering</span>
                  {prog.id === 'youth-meeting' ? (
                    <button 
                      onClick={() => navigate('ministry-youth')} 
                      className="text-teal-deep font-semibold hover:underline"
                    >
                      Youth Details &rarr;
                    </button>
                  ) : prog.id === 'intercessory-prayer' || prog.id === 'all-night-prayer' ? (
                    <button 
                      onClick={handlePrayer} 
                      className="text-teal-deep font-semibold hover:underline"
                    >
                      Send Prayer Need &rarr;
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What to Expect When You Visit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">First Time Visiting?</span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mt-1">
            What to Expect When You Visit Our Church
          </h2>
          <p className="text-neutral-grey text-xs sm:text-sm mt-1">
            We welcome you and your family with open arms from the moment you arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-md border border-neutral-border shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center">
              <Music className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal">Heartfelt Praise &amp; Worship</h3>
            <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
              We sing uplifting Telugu and English worship songs led by our choir. You will experience true peace and joy in God's presence.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-md border border-neutral-border shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal">Simple &amp; Powerful Preaching</h3>
            <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
              Every message is rooted in the Holy Bible, explained simply with real-life examples to help you face daily life with faith.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-md border border-neutral-border shadow-subtle space-y-3 sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal">Personal Prayer with Pastors</h3>
            <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
              After every service, our pastors will personally lay hands and pray for your health, family needs, and any problem you are facing.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handlePrayer}
            className="btn-primary w-full sm:w-auto justify-center"
          >
            <span>Send a Prayer Request Before Visiting</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
