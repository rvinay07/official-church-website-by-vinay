import React, { useState } from 'react';
import { X, Send, Phone, Lock, MessageCircle, Mail, CheckCircle2, HandHeart } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

export default function PrayerModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState('');
  const [sendBy, setSendBy] = useState('whatsapp');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!request.trim()) return;

    const formattedName = name.trim() || 'A Believer';
    const lines = [
      "Praise the Lord Pastor,",
      "",
      `*Prayer Request — ${CHURCH_INFO.name}*`,
      "",
      `*Name:* ${formattedName}`,
    ];

    if (phone && phone.trim()) {
      lines.push(`*Phone:* ${phone.trim()}`);
    }

    lines.push("");
    lines.push("*Prayer Need:*");
    lines.push(request.trim());
    lines.push("");
    lines.push("Kindly remember me and my family in your prayers. Amen.");

    const message = lines.join("\n");

    if (sendBy === 'whatsapp') {
      const waUrl = `https://wa.me/919502214602?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else {
      const subject = encodeURIComponent(`Prayer Request from ${formattedName}`);
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${CHURCH_INFO.email}?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-md shadow-elevated border border-neutral-border overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#103546] text-white p-5 sm:p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 w-11 h-11 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center touch-manipulation"
            aria-label="Close Prayer Window"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-muted mb-1">
            <HandHeart className="w-3.5 h-3.5 text-gold-muted" />
            <span>Intercessory Prayer</span>
          </div>
          
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white pr-8">
            We Are Praying for You
          </h2>
          <p className="text-xs text-stone-300 mt-1 italic font-serif">
            "The prayer of a righteous person is powerful and effective." &mdash; James 5:16
          </p>
        </div>

        {/* Modal Form */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal">
                Prayer Request Submitted
              </h3>
              <p className="text-xs sm:text-sm text-neutral-grey max-w-sm mx-auto">
                Your request has been forwarded to our pastoral prayer team. May God bless and answer according to His grace.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (or leave blank for Anonymous)"
                  className="w-full px-3.5 py-2.5 rounded-md bg-white border border-neutral-border text-charcoal placeholder-neutral-light text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-deep focus:border-teal-deep"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile phone number"
                  className="w-full px-3.5 py-2.5 rounded-md bg-white border border-neutral-border text-charcoal placeholder-neutral-light text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-deep focus:border-teal-deep"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
                  Your Prayer Request <span className="text-rose-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  placeholder="Please describe your health, family need, or thanksgiving prayer intention..."
                  className="w-full px-3.5 py-2.5 rounded-md bg-white border border-neutral-border text-charcoal placeholder-neutral-light text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-deep focus:border-teal-deep resize-y"
                ></textarea>
              </div>

              {/* Delivery Destination */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                  Send Via
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSendBy('whatsapp')}
                    className={`py-2.5 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 border transition-colors min-h-[44px] touch-manipulation ${
                      sendBy === 'whatsapp'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                        : 'bg-white border-neutral-border text-charcoal hover:bg-ivory'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSendBy('email')}
                    className={`py-2.5 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 border transition-colors min-h-[44px] touch-manipulation ${
                      sendBy === 'email'
                        ? 'bg-teal-surface border-teal-deep text-teal-deep'
                        : 'bg-white border-neutral-border text-charcoal hover:bg-ivory'
                    }`}
                  >
                    <Mail className="w-4 h-4 text-teal-deep" />
                    <span>Email</span>
                  </button>
                </div>
              </div>

              {/* Pastoral Confidentiality note */}
              <div className="flex items-center gap-2 text-xs text-neutral-grey pt-1">
                <Lock className="w-3.5 h-3.5 text-teal-deep shrink-0" />
                <span>Handled with pastoral discretion and sincere prayer</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Prayer Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
