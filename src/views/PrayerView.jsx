import React, { useState } from 'react';
import { Heart, Send, MessageCircle, Mail, Phone, ShieldCheck, Clock, CheckCircle2, AlertCircle, Sparkles, HandHeart } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

export default function PrayerView({ onNavigate, setCurrentView }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    category: 'Healing & Health',
    confidential: false,
    request: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    'Health & Physical Healing',
    'Family Peace & Marriage',
    'Job, Business & Financial Help',
    'Children, Studies & Future',
    'Spiritual Freedom & Peace',
    'Thanksgiving & Praise Report',
    'Other Prayer Need'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMsg('');
  };

  const generatePrayerText = () => {
    const lines = [
      "Praise the Lord Pastor,",
      "",
      `*Prayer Request — ${CHURCH_INFO.name}*`,
      "",
      `*Name:* ${formData.name.trim() || 'A Believer'}`,
    ];

    if (formData.phone && formData.phone.trim()) {
      lines.push(`*Phone:* ${formData.phone.trim()}`);
    }

    if (formData.email && formData.email.trim()) {
      lines.push(`*Email:* ${formData.email.trim()}`);
    }

    if (formData.city && formData.city.trim()) {
      lines.push(`*Location:* ${formData.city.trim()}`);
    }

    if (formData.category) {
      lines.push(`*Category:* ${formData.category}`);
    }

    if (formData.confidential) {
      lines.push("*Confidentiality:* Strictly Private (Senior Pastors Only)");
    }

    lines.push("");
    lines.push("*Prayer Need:*");
    lines.push(formData.request.trim());
    lines.push("");
    lines.push("Kindly remember me and my family in your prayers. Amen.");

    return lines.join("\n");
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.request.trim()) {
      setErrorMsg('Please enter your name and describe your prayer request.');
      return;
    }
    const text = encodeURIComponent(generatePrayerText());
    const waUrl = `https://wa.me/919502214602?text=${text}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.request.trim()) {
      setErrorMsg('Please enter your name and describe your prayer request.');
      return;
    }
    const subject = encodeURIComponent(`Prayer Request: ${formData.category} - ${formData.name}`);
    const body = encodeURIComponent(generatePrayerText());
    const mailUrl = `mailto:${CHURCH_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailUrl;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F5EF] text-[#252525] pb-16 sm:pb-20 overflow-x-hidden">
      
      {/* 1. Header Banner */}
      <section className="relative bg-[#103546] text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url('church-image-3.jpeg')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0E2F3E] via-[#103546]/95 to-[#164B60]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-xs font-semibold uppercase tracking-wider border border-white/15">
            <HandHeart className="w-3.5 h-3.5 text-gold-muted" />
            <span>Prayer Support &bull; Agape AG Church</span>
          </span>
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Send Your Prayer Request
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light italic font-serif">
            "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." &mdash; Philippians 4:6
          </p>
        </div>
      </section>

      {/* 2. Main Prayer Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Column: Prayer Request Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-md border border-neutral-border p-5 sm:p-8 shadow-subtle">
            {submitted ? (
              <div className="text-center py-8 sm:py-10 space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                  Prayer Request Received
                </h3>
                <p className="text-neutral-grey max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                  Thank you for placing your trust in God. Our Senior Pastors and church prayer team will remember you and your family in earnest prayer before God.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        city: '',
                        category: 'Healing & Health',
                        confidential: false,
                        request: ''
                      });
                    }}
                    className="btn-primary w-full sm:w-auto justify-center"
                  >
                    Submit Another Request
                  </button>
                  <button
                    onClick={() => navigate('home')}
                    className="btn-secondary w-full sm:w-auto justify-center"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4 sm:space-y-5">
                <div>
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-charcoal">
                    Send Your Prayer Need
                  </h2>
                  <p className="text-neutral-grey text-xs sm:text-sm mt-1">
                    Every prayer request is personally prayed over by our Senior Pastors and prayer team.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-md bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-neutral-border text-charcoal placeholder-neutral-light text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-deep focus:border-teal-deep"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp No.
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Mobile phone number"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-neutral-border text-charcoal placeholder-neutral-light text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-deep focus:border-teal-deep"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@address.com (optional)"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-neutral-border text-charcoal placeholder-neutral-light text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-deep focus:border-teal-deep"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Guntakal, Anantapur"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-neutral-border text-charcoal placeholder-neutral-light text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-deep focus:border-teal-deep"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Prayer Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white border border-neutral-border text-charcoal text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-deep focus:border-teal-deep"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Describe Your Prayer Need <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    name="request"
                    required
                    rows={4}
                    value={formData.request}
                    onChange={handleChange}
                    placeholder="Share the details of your health condition, family situation, or thanksgiving..."
                    className="w-full px-3.5 py-2.5 rounded-md bg-white border border-neutral-border text-charcoal placeholder-neutral-light text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-deep focus:border-teal-deep resize-y"
                  ></textarea>
                </div>

                {/* Confidentiality Toggle */}
                <div className="flex items-start gap-2.5 p-3 rounded-md bg-ivory-warm border border-neutral-border">
                  <input
                    type="checkbox"
                    id="confidential"
                    name="confidential"
                    checked={formData.confidential}
                    onChange={handleChange}
                    className="mt-0.5 rounded text-teal-deep focus:ring-teal-deep w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="confidential" className="text-xs text-charcoal cursor-pointer leading-tight">
                    <span className="font-semibold block text-charcoal">Keep strictly confidential with Senior Pastors only</span>
                    Will not be read during general congregational prayer meetings.
                  </label>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="btn-primary w-full sm:flex-1 justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Submit via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="btn-secondary w-full sm:flex-1 justify-center"
                  >
                    <Mail className="w-4 h-4 text-teal-deep" />
                    <span>Submit via Email</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Pastoral Helpline & Weekly Prayer Schedule (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Urgent Pastoral Helpline */}
            <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-6 shadow-subtle space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal">Immediate Pastoral Help</h3>
                  <p className="text-xs text-neutral-grey">Hospital Visitation &amp; Emergency Prayer</p>
                </div>
              </div>

              <p className="text-xs text-neutral-grey leading-relaxed">
                If someone in your family is facing critical medical hospitalization or urgent distress, our pastors are reachable directly by phone.
              </p>

              <div className="space-y-2 text-xs">
                <a
                  href="tel:+919848488414"
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded bg-ivory-warm hover:bg-teal-surface text-charcoal hover:text-teal-deep border border-neutral-border/60 transition-colors gap-1 sm:gap-2 min-h-[44px] touch-manipulation"
                >
                  <span className="font-semibold">Rev. A.P. Solomon Vijay Raj (Senior Pastor)</span>
                  <span className="font-mono text-teal-deep font-bold">+91 98484 88414</span>
                </a>

                <a
                  href="tel:+919533362164"
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded bg-ivory-warm hover:bg-teal-surface text-charcoal hover:text-teal-deep border border-neutral-border/60 transition-colors gap-1 sm:gap-2 min-h-[44px] touch-manipulation"
                >
                  <span className="font-semibold">Rev. A.P. Benedict Vijay Raj (Associate Pastor)</span>
                  <span className="font-mono text-teal-deep font-bold">+91 95333 62164</span>
                </a>
              </div>
            </div>

            {/* Intercessory Prayer Gatherings */}
            <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-6 shadow-subtle space-y-3">
              <div className="flex items-center gap-2 font-serif text-base font-bold text-charcoal">
                <Clock className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Intercessory Gatherings</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="border-l-2 border-teal-deep pl-2.5">
                  <div className="font-semibold text-charcoal">Intercessory Fasting Prayer</div>
                  <div className="text-teal-deep font-medium">Every Friday &bull; 10:00 AM &ndash; 1:00 PM</div>
                  <div className="text-neutral-grey mt-0.5">Fasting prayer interceding over every prayer request and sickness.</div>
                </div>

                <div className="border-l-2 border-gold-muted pl-2.5">
                  <div className="font-semibold text-charcoal">Sisters Meeting</div>
                  <div className="text-gold-deep font-medium">Every Saturday &bull; 11:00 AM &ndash; 1:00 PM</div>
                  <div className="text-neutral-grey mt-0.5">Sisters and mothers gathering for family revival and prayer.</div>
                </div>

                <div className="border-l-2 border-emerald-600 pl-2.5">
                  <div className="font-semibold text-charcoal">Men's Meeting</div>
                  <div className="text-emerald-800 font-medium">Every Thursday &bull; 7:00 PM &ndash; 8:30 PM</div>
                  <div className="text-neutral-grey mt-0.5">Men and fathers gathering for prayer and Christian fellowship.</div>
                </div>

                <div className="border-l-2 border-indigo-600 pl-2.5">
                  <div className="font-semibold text-charcoal">All Night Prayer</div>
                  <div className="text-indigo-800 font-medium">Every Month Last Friday &bull; 10:00 PM &ndash; 2:00 AM</div>
                  <div className="text-neutral-grey mt-0.5">United overnight intercessory vigil and spiritual breakthrough.</div>
                </div>
              </div>
            </div>

            {/* Scripture Anchor */}
            <div className="bg-ivory-warm rounded-md border border-neutral-border p-4 sm:p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-deep block mb-1">
                God’s Eternal Promise
              </span>
              <p className="font-serif italic text-xs sm:text-sm text-charcoal leading-relaxed">
                "Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven."
              </p>
              <span className="block text-[11px] font-semibold text-gold-deep mt-1">&mdash; Matthew 18:19</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
