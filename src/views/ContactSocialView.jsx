import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Youtube, Clock, ExternalLink, Send, Share2, Compass, Heart, ArrowRight } from 'lucide-react';
import { CHURCH_INFO, SOCIAL_LINKS } from '../data/churchData';

export default function ContactSocialView({ onOpenPrayer, openPrayerModal, onOpenGiving, openGivingModal, onNavigate, setCurrentView }) {
  const handlePrayer = onOpenPrayer || openPrayerModal;
  const handleGiving = onOpenGiving || openGivingModal;

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
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url('church-image-1.jpg')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0E2F3E] via-[#103546]/95 to-[#164B60]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-xs font-semibold uppercase tracking-wider border border-white/15">
            <Compass className="w-3.5 h-3.5" />
            <span>Connect &amp; Directions</span>
          </span>
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Contact &amp; Location Details
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            We welcome you to worship with us, seek pastoral prayer, or connect with our church family.
          </p>
        </div>
      </section>

      {/* 2. Four Essential Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Sanctuary Location with Exact User Address Format */}
          <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-6 shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors">
            <div>
              <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-0.5">
                {CHURCH_INFO.name}
              </h3>
              <div className="text-xs font-semibold text-teal-deep mb-3">
                {CHURCH_INFO.tagline}
              </div>
              
              <div className="text-neutral-grey text-xs sm:text-sm leading-relaxed mb-4">
                <span className="font-semibold text-charcoal text-[11px] uppercase tracking-wider block mb-1">
                  Address:
                </span>
                <div>{CHURCH_INFO.address.line1}</div>
                <div>{CHURCH_INFO.address.line2}</div>
                <div>{CHURCH_INFO.address.line3}</div>
                <div className="font-semibold text-charcoal">{CHURCH_INFO.address.city}</div>
              </div>
            </div>
            <a
              href={CHURCH_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center text-xs min-h-[40px] touch-manipulation"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Pastoral Helplines */}
          <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-6 shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors">
            <div>
              <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1">
                Pastoral Helplines
              </h3>
              <p className="text-xs text-neutral-grey mb-3">
                Reach out for prayer or hospital visitation.
              </p>
              <div className="space-y-2 mb-4 text-xs sm:text-sm">
                {CHURCH_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="block text-charcoal font-mono font-medium hover:text-teal-deep transition-colors py-1.5 px-2 rounded bg-ivory-warm hover:bg-teal-surface min-h-[40px] flex items-center touch-manipulation"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <span className="text-[11px] text-neutral-grey">Mon&ndash;Sun 8:00 AM &ndash; 9:00 PM</span>
          </div>

          {/* Card 3: WhatsApp Broadcast Channel */}
          <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-6 shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors">
            <div>
              <div className="w-10 h-10 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1">
                WhatsApp Channel
              </h3>
              <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed mb-4">
                Receive daily Bible verses, live service updates, and ministry announcements.
              </p>
            </div>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center text-xs min-h-[40px] touch-manipulation text-emerald-700 hover:text-emerald-800"
            >
              <span>Join WhatsApp Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Official Email */}
          <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-6 shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors">
            <div>
              <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1">
                Email Inbox
              </h3>
              <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed mb-4">
                For administrative inquiries, pastoral letters, testimonies, or formal event correspondences.
              </p>
            </div>
            <a
              href={`mailto:${CHURCH_INFO.email}`}
              className="btn-secondary w-full justify-center text-xs min-h-[40px] touch-manipulation font-mono break-all"
            >
              <span>{CHURCH_INFO.email}</span>
            </a>
          </div>

        </div>
      </section>

      {/* 3. YouTube Broadcast Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="bg-[#103546] text-white rounded-md p-5 sm:p-8 md:p-10 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-muted">
                Digital Ministry
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Connect on YouTube: @agapeagchurchgtl
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Watch weekly full services, messages by Senior Pastors, choir praise, and anniversary celebrations.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto justify-center"
                >
                  <Youtube className="w-4 h-4 fill-white" />
                  <span>Visit YouTube Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/919502214602?text=${encodeURIComponent('Praise the Lord Pastor, please connect me with Agape AG Church.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0E2F3E] p-5 sm:p-6 rounded-md border border-white/10 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center mx-auto">
                <Youtube className="w-6 h-6" />
              </div>
              <div className="font-bold text-white text-base">Sunday Live Broadcast</div>
              <div className="text-xs text-stone-300">Streaming every Sunday morning on YouTube</div>
              <div className="text-[11px] text-gold-muted pt-1">Sunday Morning Worship &amp; Preaching</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Embedded Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="bg-white rounded-md border border-neutral-border overflow-hidden shadow-subtle">
          <div className="p-5 sm:p-7 border-b border-neutral-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Church Address</span>
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-charcoal mt-0.5">
                {CHURCH_INFO.name}
              </h2>
              <div className="text-xs text-neutral-grey mt-0.5">
                <span className="font-semibold text-charcoal">{CHURCH_INFO.tagline}</span> &bull; {CHURCH_INFO.address.line1}, {CHURCH_INFO.address.line2}, {CHURCH_INFO.address.line3} {CHURCH_INFO.address.city}
              </div>
            </div>
            <a
              href={CHURCH_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 w-full sm:w-auto justify-center"
            >
              <span>Get Driving Directions</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full h-72 sm:h-80 lg:h-96 bg-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.355112106456!2d77.37525387511477!3d15.166418885387428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb713375cb4cfbd%3A0x8670b368db55b3a!2sAgape%20A.G%20Church!5e0!3m2!1sen!2sin!4v1714151234567!5m2!1sen!2sin"
              title="Agape AG Church Map Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
