import React from 'react';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

export default function TermsView({ onNavigate, setCurrentView }) {
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
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal leading-tight">
                Terms of Use &amp; Governance
              </h1>
              <p className="text-xs text-neutral-grey mt-0.5">Agape Assemblies of God Church, Guntakal &bull; Effective: 2026</p>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6 text-xs sm:text-sm text-charcoal leading-relaxed">
            <section className="space-y-1.5">
              <h2 className="font-serif text-base sm:text-lg font-bold text-teal-deep">1. Website Purpose</h2>
              <p className="text-neutral-grey">
                This website is dedicated solely to the proclamation of the Gospel of Jesus Christ, providing congregational ministry information, and facilitating Christian fellowship under the leadership of Agape A.G. Church Guntakal.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="font-serif text-base sm:text-lg font-bold text-teal-deep">2. Media &amp; Sermons</h2>
              <p className="text-neutral-grey">
                All sermon audio/video recordings, church photographs, and text materials belong to Agape A.G. Church. You are welcome to view and share these for personal spiritual edification and evangelistic sharing without altering or monetizing the content.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="font-serif text-base sm:text-lg font-bold text-teal-deep">3. Tithes &amp; Offerings</h2>
              <p className="text-neutral-grey">
                Contributions made via UPI or direct bank transfer are voluntary acts of Christian stewardship and worship. Funds are applied directly to ministry operations, church maintenance, benevolence (poor and widow support), and regional missions.
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="font-serif text-base sm:text-lg font-bold text-teal-deep">4. Assemblies of God Affiliation</h2>
              <p className="text-neutral-grey">
                Agape A.G. Church Guntakal operates under the spiritual doctrine and ecclesiastical governance of the Assemblies of God of South India (SIAG). For official communications, please reach out to <span className="font-semibold text-teal-deep">{CHURCH_INFO.email}</span>.
              </p>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
