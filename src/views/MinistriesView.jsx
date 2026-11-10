import React, { useState, useEffect } from 'react';
import { 
  Users, Clock, Flame, Baby, Compass, HandHeart, Moon, 
  Phone, Mail, Instagram, Send, Youtube, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { MINISTRIES, CHURCH_INFO } from '../data/churchData';

// Algorithm for Next 2nd Saturday 9:30 AM
function getNextSecondSaturday() {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  while (true) {
    const firstDay = new Date(year, month, 1);
    const firstSaturdayDate = 1 + ((6 - firstDay.getDay() + 7) % 7);
    const secondSaturday = new Date(year, month, firstSaturdayDate + 7, 9, 30, 0, 0);
    if (secondSaturday > now) return secondSaturday;
    month++;
    if (month > 11) { month = 0; year++; }
  }
}

export default function MinistriesView({ 
  initialMinistryId, 
  activeMinistryTab, 
  openPrayerModal, 
  onOpenPrayer, 
  onNavigate, 
  setCurrentView 
}) {
  const [selectedTab, setSelectedTab] = useState(initialMinistryId || activeMinistryTab || 'all');
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  const handlePrayer = onOpenPrayer || openPrayerModal;

  const navigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (initialMinistryId) {
      setSelectedTab(initialMinistryId);
    }
  }, [initialMinistryId]);

  // Update countdown every second
  useEffect(() => {
    let target = getNextSecondSaturday();
    const update = () => {
      const now = new Date();
      if (target <= now) target = getNextSecondSaturday();
      const distance = target - now;

      setCountdown({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'),
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredMinistries = selectedTab === 'all'
    ? MINISTRIES
    : MINISTRIES.filter((m) => m.id === selectedTab || m.slug === selectedTab);

  return (
    <div className="bg-[#F8F5EF] text-[#252525] pb-16 sm:pb-20 overflow-x-hidden">
      
      {/* 1. Header Banner */}
      <section className="relative bg-[#103546] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('church-image-2.jpeg')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2F3E] via-[#103546]/95 to-[#164B60]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-white/15">
            <Users className="w-3.5 h-3.5" />
            <span>Fellowship &amp; Community Service</span>
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ministries of Agape A.G. Church
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Every generation has a place to grow in Christ, discover God’s purpose, and serve our community in Guntakal.
          </p>
        </div>
      </section>

      {/* 2. Mobile Edge-to-Edge Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-colors touch-manipulation min-h-[38px] ${
              selectedTab === 'all'
                ? 'bg-teal-deep text-white shadow-subtle'
                : 'bg-white border border-neutral-border text-charcoal hover:bg-ivory'
            }`}
          >
            All Ministries ({MINISTRIES.length})
          </button>
          {MINISTRIES.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedTab(m.id)}
              className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-colors touch-manipulation min-h-[38px] ${
                selectedTab === m.id || selectedTab === m.slug
                  ? 'bg-teal-deep text-white shadow-subtle'
                  : 'bg-white border border-neutral-border text-charcoal hover:bg-ivory'
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Ministries Detailed Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8 sm:space-y-12">
        {filteredMinistries.map((ministry) => (
          <div 
            key={ministry.id} 
            id={ministry.slug}
            className="bg-white rounded-md overflow-hidden border border-neutral-border shadow-subtle"
          >
            {/* Top Grid: Image & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-5 sm:p-8">
              
              <div className="lg:col-span-5 relative rounded-md overflow-hidden border border-neutral-border aspect-[16/10] bg-stone-100 max-h-72 lg:max-h-none">
                <img
                  src={ministry.heroImage || ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'church-image-2.jpeg'; }}
                />
                <span className="absolute top-2.5 left-2.5 bg-[#103546] text-white text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded">
                  {ministry.category}
                </span>
              </div>

              <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
                <span className="inline-block text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded bg-teal-surface text-teal-deep">
                  {ministry.timing}
                </span>

                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal">
                  {ministry.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-grey italic border-l-3 border-gold-muted pl-3 leading-relaxed">
                  {ministry.scripture}
                </p>

                <p className="text-xs sm:text-sm text-charcoal leading-relaxed pt-1">
                  {ministry.summary}
                </p>

                {/* Social links for youth ministry */}
                {ministry.social && (
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                    <span className="text-neutral-grey">Connect with Youth Leaders:</span>
                    <a
                      href={ministry.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-pink-700 hover:underline font-semibold"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={ministry.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-700 hover:underline font-semibold"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>

            </div>

            {/* Special Youth Countdown for Chosen Generation (Mobile Scaled) */}
            {ministry.id === 'youth' && (
              <div className="bg-[#103546] text-white p-5 sm:p-8 border-y border-white/10">
                <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-gold-muted">
                    Upcoming Gathering &bull; 2nd Saturday 9:30 AM
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
                    Chosen Generation Youth Countdown
                  </h3>
                  <p className="text-xs text-stone-300 max-w-md mx-auto">
                    Join youth in Guntakal for high-energy praise, action songs, Bible games, and anointed preaching.
                  </p>

                  <div className="grid grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 max-w-xs sm:max-w-sm mx-auto pt-2">
                    <div className="bg-white/10 rounded p-2 sm:p-2.5 border border-white/15">
                      <div className="text-xl sm:text-3xl font-bold text-gold-muted font-mono">{countdown.days}</div>
                      <div className="text-[9px] sm:text-[10px] text-stone-300 uppercase tracking-wider">Days</div>
                    </div>
                    <div className="bg-white/10 rounded p-2 sm:p-2.5 border border-white/15">
                      <div className="text-xl sm:text-3xl font-bold text-gold-muted font-mono">{countdown.hours}</div>
                      <div className="text-[9px] sm:text-[10px] text-stone-300 uppercase tracking-wider">Hours</div>
                    </div>
                    <div className="bg-white/10 rounded p-2 sm:p-2.5 border border-white/15">
                      <div className="text-xl sm:text-3xl font-bold text-gold-muted font-mono">{countdown.minutes}</div>
                      <div className="text-[9px] sm:text-[10px] text-stone-300 uppercase tracking-wider">Mins</div>
                    </div>
                    <div className="bg-white/10 rounded p-2 sm:p-2.5 border border-white/15">
                      <div className="text-xl sm:text-3xl font-bold text-gold-muted font-mono">{countdown.seconds}</div>
                      <div className="text-[9px] sm:text-[10px] text-stone-300 uppercase tracking-wider">Secs</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Program Points & Caretakers Grid */}
            <div className="bg-ivory-warm p-5 sm:p-8 border-t border-neutral-border grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-xs sm:text-sm">
              
              {/* Program Points */}
              <div className="space-y-2.5">
                <h4 className="font-serif font-bold text-charcoal text-sm sm:text-base">
                  Key Focus &amp; Program Details
                </h4>
                <ul className="space-y-2">
                  {ministry.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-grey">
                      <CheckCircle2 className="w-4 h-4 text-teal-deep shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Caretakers & Pastoral Oversight */}
              <div className="space-y-2.5">
                <h4 className="font-serif font-bold text-charcoal text-sm sm:text-base">
                  Ministry Caretakers &amp; Inquiries
                </h4>
                {ministry.caretakers ? (
                  <div className="space-y-2">
                    {ministry.caretakers.map((c, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-md border border-neutral-border flex items-center justify-between text-xs gap-2">
                        <div className="overflow-hidden">
                          <strong className="text-charcoal block text-xs sm:text-sm truncate">{c.name}</strong>
                          <span className="text-neutral-grey truncate block">{c.role}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <a 
                            href={`tel:${c.phone}`} 
                            className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded bg-teal-surface text-teal-deep hover:bg-teal-deep hover:text-white transition-colors touch-manipulation" 
                            title="Call Caretaker"
                            aria-label={`Call ${c.name}`}
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <a 
                            href={`mailto:${c.email}`} 
                            className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded bg-stone-100 text-charcoal hover:bg-teal-deep hover:text-white transition-colors touch-manipulation" 
                            title="Email Caretaker"
                            aria-label={`Email ${c.name}`}
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-3.5 rounded-md border border-neutral-border text-xs text-neutral-grey space-y-2">
                    <p>Coordinated directly through the Pastoral Care Office of Agape A.G. Church.</p>
                    <div className="flex items-center gap-3 pt-1">
                      <a href={`tel:${CHURCH_INFO.phoneRaw}`} className="text-teal-deep font-semibold hover:underline flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" /> {CHURCH_INFO.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        ))}
      </section>

    </div>
  );
}
