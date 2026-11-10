import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

export default function PrivacyView({ onNavigate, setCurrentView }) {
  const navigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F8F5EF] text-[#252525] py-8 sm:py-16 min-h-screen overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button
          onClick={() => navigate('home')}
          className="btn-text mb-6 sm:mb-8 text-xs font-semibold py-2 min-h-[44px] flex items-center gap-1.5 touch-manipulation"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-8 md:p-12 shadow-subtle space-y-6 sm:space-y-8">
          <div className="flex items-center gap-3 border-b border-neutral-border pb-5 sm:pb-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-teal-surface text-teal-deep flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal leading-tight">
                Privacy Policy &amp; Pastoral Confidentiality
              </h1>
              <p className="text-xs text-neutral-grey mt-0.5">Agape Assemblies of God Church, Guntakal &bull; Last updated: 2026</p>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6 text-xs sm:text-sm text-charcoal leading-relaxed">
            <section className="space-y-1.5">
              <h2 className="font-serif text-base sm:text-lg font-bold text-teal-deep">1. Our Commitment to Your Trust</h2>
              <p className="text-neutral-grey">
                Agape A.G. Church Guntakal values your spiritual journey and treats your personal privacy with Christian integrity. This policy clarifies how we handle prayer requests, contact details, and financial giving records.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="font-serif text-base sm:text-lg font-bold text-teal-deep">2. Information Handled</h2>
              <ul className="list-disc pl-5 space-y-1 text-neutral-grey">
                <li><strong className="text-charcoal">Prayer Requests:</strong> Personal health, family, or spiritual needs submitted online for intercessory prayer.</li>
                <li><strong className="text-charcoal">Online Giving Records:</strong> Transaction references and donor details retained strictly for accounting and issuing tithe receipts.</li>
                <li><strong className="text-charcoal">Church Communications:</strong> Contact numbers provided voluntarily for WhatsApp spiritual broadcasts and event announcements.</li>
              </ul>
            </section>

            <section className="space-y-1.5">
              <h2 className="font-serif text-base sm:text-lg font-bold text-teal-deep">3. Pastoral Confidentiality</h2>
              <p className="text-neutral-grey">
                When you designate a prayer request as "strictly confidential", it is accessed exclusively by Senior Pastors and is never disclosed during open prayer meetings or shared with third parties. We will never sell, rent, or trade your contact information.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="font-serif text-base sm:text-lg font-bold text-teal-deep">4. Contact Church Office</h2>
              <p className="text-neutral-grey">
                If you have questions regarding your contact details or wish to update your records, please contact our pastoral office:
              </p>
              <div className="p-3.5 sm:p-4 bg-ivory-warm rounded-md border border-neutral-border text-xs space-y-1 text-charcoal">
                <div className="font-semibold text-charcoal">{CHURCH_INFO.name} &bull; {CHURCH_INFO.tagline}</div>
                <div><strong>Address:</strong> {CHURCH_INFO.address.line1}, {CHURCH_INFO.address.line2}, {CHURCH_INFO.address.line3} {CHURCH_INFO.address.city}</div>
                <div><strong>Phone:</strong> {CHURCH_INFO.phones[0]} / {CHURCH_INFO.phones[1]}</div>
                <div><strong>Email:</strong> {CHURCH_INFO.email}</div>
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
