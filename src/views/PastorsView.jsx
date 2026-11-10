import React from 'react';
import { Users, Phone, Mail, Heart, Calendar, ArrowRight, MessageCircle, Clock, BookOpen, ShieldCheck } from 'lucide-react';
import { PASTORS, CHURCH_INFO } from '../data/churchData';

export default function PastorsView({ openPrayerModal, onOpenPrayer, onNavigate, setCurrentView }) {
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
      <section className="relative bg-[#103546] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('IMG_7318.JPG.jpeg')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2F3E] via-[#103546]/95 to-[#164B60]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-white/15">
            <Users className="w-3.5 h-3.5" />
            <span>Spiritual Leadership</span>
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Meet Our Pastors
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Our pastors are dedicated to serving God, preaching His living Word, and praying for families in Guntakal.
          </p>
        </div>
      </section>

      {/* 2. Pastoral Profiles Grid (Mobile Scaled) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-8 sm:space-y-10">
        {PASTORS.map((pastor, idx) => (
          <div 
            key={pastor.id || idx}
            className="bg-white rounded-md border border-neutral-border p-5 sm:p-8 shadow-subtle grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
          >
            {/* Pastor Portrait & Contact Actions (4 Cols on desktop, proportional on mobile) */}
            <div className="md:col-span-5 lg:col-span-4 space-y-3 sm:space-y-4">
              <div className="relative aspect-[4/3] xs:aspect-[16/10] sm:aspect-square md:aspect-4/5 max-h-72 sm:max-h-80 md:max-h-none bg-stone-100 rounded-md overflow-hidden border border-neutral-border">
                <img
                  src={pastor.image}
                  alt={pastor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = 'about/story/1.png';
                  }}
                />
              </div>

              {/* Direct Pastoral Contact Links */}
              <div className="space-y-2 pt-1 text-xs">
                {pastor.phone && (
                  <a
                    href={`tel:${pastor.phoneRaw || pastor.phone}`}
                    className="flex items-center gap-2 p-3 min-h-[44px] rounded bg-ivory hover:bg-teal-surface text-charcoal hover:text-teal-deep border border-neutral-border/60 transition-colors touch-manipulation"
                  >
                    <Phone className="w-4 h-4 text-teal-deep shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm">{pastor.phone}</span>
                  </a>
                )}

                {pastor.email && (
                  <a
                    href={`mailto:${pastor.email}`}
                    className="flex items-center gap-2 p-3 min-h-[44px] rounded bg-ivory hover:bg-teal-surface text-charcoal hover:text-teal-deep border border-neutral-border/60 transition-colors truncate touch-manipulation"
                  >
                    <Mail className="w-4 h-4 text-teal-deep shrink-0" />
                    <span className="font-medium truncate text-xs">{pastor.email}</span>
                  </a>
                )}

                <a
                  href={`https://wa.me/919502214602?text=${encodeURIComponent(`Praise the Lord ${pastor.name}, I would like to connect for prayer and pastoral counsel.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 p-3 min-h-[44px] rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors touch-manipulation font-semibold text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Pastor Biography & Calling (8 Cols) */}
            <div className="md:col-span-7 lg:col-span-8 space-y-3.5 sm:space-y-4">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  {pastor.role}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mt-0.5">
                  {pastor.name}
                </h2>
                <div className="text-xs text-neutral-grey font-medium">
                  Agape Assemblies of God Church &bull; Guntakal
                </div>
              </div>

              {/* Scriptural Theme Quote */}
              {pastor.verse && (
                <div className="p-3.5 sm:p-4 rounded-md bg-ivory-warm border-l-3 border-gold-muted text-xs sm:text-sm italic text-charcoal leading-relaxed">
                  "{pastor.verse}"
                  <span className="block mt-1 text-[11px] font-semibold text-teal-deep not-italic">
                    &mdash; {pastor.verseRef || 'Holy Scripture'}
                  </span>
                </div>
              )}

              {/* Narrative Bio */}
              <div className="text-xs sm:text-sm text-charcoal leading-relaxed space-y-2.5">
                <p>
                  {pastor.bio || `${pastor.name} faithfully serves the congregation of Agape A.G. Church Guntakal, nurturing believers in biblical doctrine, discipling the next generation, and ministering to families throughout Andhra Pradesh.`}
                </p>
                {pastor.experience && (
                  <p className="text-xs text-neutral-grey pt-1">
                    <strong className="text-charcoal font-semibold">Ministry Focus:</strong> {pastor.experience}
                  </p>
                )}
              </div>

              {/* Pastoral Counseling Availability */}
              <div className="pt-3 sm:pt-4 border-t border-neutral-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-neutral-grey">
                  <Clock className="w-4 h-4 text-teal-deep shrink-0" />
                  <span>Available for prayer &amp; counseling</span>
                </div>

                <button
                  onClick={handlePrayer}
                  className="btn-primary text-xs w-full sm:w-auto"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Request Pastoral Prayer</span>
                </button>
              </div>

            </div>

          </div>
        ))}
      </section>

      {/* 3. Pastoral Care Helpline Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="p-6 sm:p-8 rounded-md bg-white border border-neutral-border shadow-subtle text-center space-y-3 sm:space-y-4">
          <h3 className="font-serif text-lg sm:text-2xl font-bold text-charcoal">
            Need Personal Prayer or Hospital Visitation?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-grey max-w-xl mx-auto leading-relaxed">
            Our pastoral team is available to pray with individuals facing illness, family difficulties, or bereavement. Please contact our church office or submit an online prayer request.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
            <button
              onClick={handlePrayer}
              className="btn-primary w-full sm:w-auto"
            >
              <span>Submit Prayer Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${CHURCH_INFO.phoneRaw}`}
              className="btn-secondary w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-teal-deep" />
              <span>Call Pastor Directly</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
