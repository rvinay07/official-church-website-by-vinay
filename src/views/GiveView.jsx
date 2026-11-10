import React, { useState } from 'react';
import { Heart, QrCode, Building2, Copy, Check, ShieldCheck, ArrowRight, Sparkles, HelpCircle, PhoneCall, Gift, CheckCircle2 } from 'lucide-react';
import { GIVING_DETAILS, CHURCH_INFO } from '../data/churchData';

export default function GiveView({ onNavigate, setCurrentView, onOpenPrayer, openPrayerModal }) {
  const [copiedField, setCopiedField] = useState(null);

  const handlePrayer = onOpenPrayer || openPrayerModal;

  const navigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-xs font-semibold uppercase tracking-wider border border-white/15">
            <Heart className="w-3.5 h-3.5 fill-gold-muted" />
            <span>Tithes, Offerings &amp; Donations</span>
          </span>
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Support the Lord's Work &amp; Ministries
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light italic font-serif">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." &mdash; 2 Corinthians 9:7
          </p>
        </div>
      </section>

      {/* 2. Main Giving Cards: UPI QR Code & Bank Transfer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: UPI & QR Code */}
          <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-8 shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Instant Transfer
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">
                Scan &amp; Pay via UPI
              </h2>
              <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed mb-6">
                Send your tithes, Sunday offerings, or mission support using Google Pay, PhonePe, Paytm, or any UPI app.
              </p>

              {/* QR Image */}
              <div className="bg-stone-50 border border-neutral-border p-3 sm:p-4 rounded-md max-w-xs mx-auto mb-6 flex flex-col items-center">
                <img
                  src={GIVING_DETAILS.qrImage}
                  alt="Agape AG Church UPI QR Code"
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded"
                  onError={(e) => {
                    e.currentTarget.src = 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=9866450060@ybl&pn=Agape%20Church';
                  }}
                />
                <span className="text-[11px] text-neutral-grey font-medium mt-2">Scan with any mobile payment app</span>
              </div>

              {/* UPI ID Field with 1-Click Copy */}
              <div className="bg-ivory-warm p-3 sm:p-3.5 rounded-md border border-neutral-border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-grey font-semibold">Official UPI ID (GPay / PhonePe)</div>
                  <div className="font-mono text-charcoal text-sm sm:text-base font-bold truncate">
                    {GIVING_DETAILS.upiId}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(GIVING_DETAILS.upiId, 'upi')}
                  className={`w-full sm:w-auto px-3.5 py-2 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shrink-0 min-h-[38px] touch-manipulation ${
                    copiedField === 'upi'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-teal-deep hover:bg-teal-dark text-white'
                  }`}
                  aria-label="Copy UPI ID"
                >
                  {copiedField === 'upi' ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> <span>Copy UPI</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-border/60 flex items-center gap-2 text-xs text-neutral-grey">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Official Agape AG Church verified UPI account</span>
            </div>
          </div>

          {/* Card 2: Direct Bank Transfer */}
          <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-8 shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded bg-stone-100 text-charcoal border border-neutral-border">
                  NEFT / IMPS / RTGS
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">
                Direct Bank Transfer
              </h2>
              <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed mb-6">
                Transfer directly from your bank account for monthly tithes, building fund, or church projects.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                
                {/* Beneficiary Name */}
                <div className="bg-ivory-warm p-3 rounded-md border border-neutral-border">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-grey font-semibold">Beneficiary Account Name</div>
                  <div className="text-charcoal font-bold text-sm sm:text-base mt-0.5">{GIVING_DETAILS.accountName}</div>
                </div>

                {/* Account Number with Copy */}
                <div className="bg-ivory-warm p-3 rounded-md border border-neutral-border flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-grey font-semibold">Account Number</div>
                    <div className="font-mono text-charcoal font-bold text-sm sm:text-base md:text-lg tracking-wider mt-0.5 truncate">
                      {GIVING_DETAILS.accountNumber}
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(GIVING_DETAILS.accountNumber, 'acc')}
                    className={`px-3 py-2 rounded text-xs font-semibold flex items-center gap-1 transition-colors shrink-0 min-h-[36px] touch-manipulation ${
                      copiedField === 'acc'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white border border-neutral-border text-charcoal hover:bg-ivory'
                    }`}
                  >
                    {copiedField === 'acc' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'acc' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Bank Name & Branch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="bg-ivory-warm p-3 rounded-md border border-neutral-border">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-grey font-semibold">Bank</div>
                    <div className="text-charcoal font-semibold mt-0.5">{GIVING_DETAILS.bankName}</div>
                  </div>
                  <div className="bg-ivory-warm p-3 rounded-md border border-neutral-border">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-grey font-semibold">Branch</div>
                    <div className="text-charcoal font-semibold mt-0.5">{GIVING_DETAILS.branch}</div>
                  </div>
                </div>

                {/* IFSC Code with Copy */}
                <div className="bg-ivory-warm p-3 rounded-md border border-neutral-border flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-grey font-semibold">IFSC Code</div>
                    <div className="font-mono text-teal-deep font-bold text-sm sm:text-base tracking-wider mt-0.5">
                      {GIVING_DETAILS.ifsc}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-grey">
                      {GIVING_DETAILS.ifscNote}
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(GIVING_DETAILS.ifsc, 'ifsc')}
                    className={`px-3 py-2 rounded text-xs font-semibold flex items-center gap-1 transition-colors shrink-0 min-h-[36px] touch-manipulation ${
                      copiedField === 'ifsc'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white border border-neutral-border text-charcoal hover:bg-ivory'
                    }`}
                  >
                    {copiedField === 'ifsc' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'ifsc' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-border/60 flex items-center gap-2 text-xs text-neutral-grey">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>All contributions used in accordance with church charitable charter</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Where Your Giving Goes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Kingdom Stewardship</span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mt-1">
            Where Your Contribution Makes an Impact
          </h2>
          <p className="text-neutral-grey text-xs sm:text-sm mt-1">
            Every offering supports life-giving ministries and community outreach across Guntakal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: "Worship & Word",
              desc: "Sustaining 4 Sunday services, sound & audiovisual facilities, building upkeep, and biblical literature.",
              icon: Sparkles,
            },
            {
              title: "Dorcas Widows Care",
              desc: "Monthly provision of food rations, medical assistance, and warm clothing to widows and destitute elderly.",
              icon: Gift,
            },
            {
              title: "NextGen Discipleship",
              desc: "Nurturing over 200 children and youth with biblically sound curriculums, VBS summer camps, and youth retreats.",
              icon: Heart,
            },
            {
              title: "Village Outreaches",
              desc: "Evangelistic outreach meetings, pioneering rural village prayer cells, and free gospel distribution.",
              icon: ArrowRight,
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-neutral-border rounded-md p-5 sm:p-6 shadow-subtle space-y-2.5">
                <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-charcoal">{item.title}</h3>
                <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Pastoral Prayer Acknowledgement & Contact */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="bg-white border border-neutral-border rounded-md p-6 sm:p-8 text-center space-y-4 shadow-subtle">
          <div className="w-12 h-12 rounded-full bg-teal-surface text-teal-deep flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
            Receipt Acknowledgement &amp; Pastoral Prayer
          </h3>
          <p className="text-neutral-grey text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            After transferring your contribution, feel free to WhatsApp the transaction screenshot or UTR reference to{' '}
            <strong className="text-charcoal">{CHURCH_INFO.phones[0]}</strong> or email{' '}
            <strong className="text-charcoal">{CHURCH_INFO.email}</strong> so our pastoral team can acknowledge your gift and lift your family in special dedication prayer.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <a
              href={`https://wa.me/919502214602?text=${encodeURIComponent('Praise the Lord Pastor, I have sent an offering/tithe for Agape AG Church. Kindly pray for my family.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Share on WhatsApp</span>
            </a>

            <button
              onClick={handlePrayer}
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <Heart className="w-4 h-4 text-rose-600" />
              <span>Submit Prayer Request</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
