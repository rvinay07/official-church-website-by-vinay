import React from 'react';
import { BookOpen, Users, ArrowRight, Church, Heart, Shield, Compass, CheckCircle2 } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

export default function AboutView({ setCurrentView, onNavigate }) {
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
          style={{ backgroundImage: `url('church-image-2.jpeg')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0E2F3E] via-[#103546]/95 to-[#164B60]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-xs font-semibold uppercase tracking-wider border border-white/15">
            <Church className="w-3.5 h-3.5" />
            <span>About Our Church</span>
          </span>
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Church, Our Pastors, Our Faith
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            {CHURCH_INFO.name} &bull; {CHURCH_INFO.tagline}. Rooted in prayer and serving Guntakal since 1985.
          </p>
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-md border border-neutral-border p-5 sm:p-8 shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-neutral-border/80 pb-5 md:pb-0 md:pr-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Our Calling</span>
              <h2 className="font-serif text-lg font-bold text-charcoal">Loving God, Caring for People</h2>
              <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
                Reflecting Christ's love through heartfelt worship, prayer for all, and caring for families in need.
              </p>
            </div>

            <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-neutral-border/80 pb-5 md:pb-0 md:pr-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">Our Journey</span>
              <h2 className="font-serif text-lg font-bold text-charcoal">40 Years of God's Grace</h2>
              <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
                Started in 1985 by Rev. A.P. Solomon Vijay Raj, faithfully serving Guntakal for four decades.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Our Faith</span>
              <h2 className="font-serif text-lg font-bold text-charcoal">Bible-Based Faith</h2>
              <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
                Standing firmly on the Holy Bible, the power of prayer, and the work of the Holy Spirit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Three Exploration Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 1: Our Story */}
          <div className="bg-white rounded-md border border-neutral-border overflow-hidden shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors">
            <div className="aspect-[16/10] bg-stone-100 overflow-hidden relative">
              <img 
                src="about/ourstorypic.png" 
                alt="Our 40-Year Story" 
                className="w-full h-full object-cover" 
                onError={(e) => { e.currentTarget.src = 'church-image-1.jpg'; }}
              />
              <span className="absolute top-2.5 left-2.5 bg-[#103546] text-white text-[11px] font-medium px-2 py-0.5 rounded">
                History &bull; 1985&ndash;2025
              </span>
            </div>
            
            <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1">
                  Our 40-Year Story &amp; Archive
                </h3>
                <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
                  Read our church story from 1985 and see all 59 historical photos of God's blessings.
                </p>
              </div>

              <button
                onClick={() => navigate('story')}
                className="btn-secondary w-full justify-center text-xs"
              >
                <span>Read Story &amp; Photos</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-deep" />
              </button>
            </div>
          </div>

          {/* Card 2: Pastoral Leadership */}
          <div className="bg-white rounded-md border border-neutral-border overflow-hidden shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors">
            <div className="aspect-[16/10] bg-stone-100 overflow-hidden relative">
              <img 
                src="about/ourpastorspic.png" 
                alt="Pastoral Leadership" 
                className="w-full h-full object-cover" 
                onError={(e) => { e.currentTarget.src = 'about/pastors/solomon.JPG'; }}
              />
              <span className="absolute top-2.5 left-2.5 bg-[#103546] text-white text-[11px] font-medium px-2 py-0.5 rounded">
                Pastoral Care
              </span>
            </div>
            
            <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1">
                  Pastoral Leadership Team
                </h3>
                <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
                  Meet Senior Pastors Rev. A.P. Solomon &amp; Dr. Rajkumari, and Associate Pastors.
                </p>
              </div>

              <button
                onClick={() => navigate('pastors')}
                className="btn-secondary w-full justify-center text-xs"
              >
                <span>Meet the Pastors</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-deep" />
              </button>
            </div>
          </div>

          {/* Card 3: Statements of Faith */}
          <div className="bg-white rounded-md border border-neutral-border overflow-hidden shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors sm:col-span-2 md:col-span-1">
            <div className="aspect-[16/10] bg-stone-100 overflow-hidden relative">
              <img 
                src="about/ourbeleifspng.png" 
                alt="Statements of Faith" 
                className="w-full h-full object-cover" 
                onError={(e) => { e.currentTarget.src = 'church-image-6.jpeg'; }}
              />
              <span className="absolute top-2.5 left-2.5 bg-[#103546] text-white text-[11px] font-medium px-2 py-0.5 rounded">
                Doctrine
              </span>
            </div>
            
            <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1">
                  What We Believe
                </h3>
                <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed">
                  Simple Bible beliefs on God, salvation through Jesus Christ, and the Holy Spirit.
                </p>
              </div>

              <button
                onClick={() => navigate('beliefs')}
                className="btn-secondary w-full justify-center text-xs"
              >
                <span>Read Statements of Faith</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-deep" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Assemblies of God Affiliation Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="p-5 sm:p-6 rounded-md bg-white border border-neutral-border shadow-subtle flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-teal-surface border border-teal-deep/20 text-teal-deep flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <h3 className="font-serif text-base font-bold text-charcoal">
              Affiliated with the Assemblies of God of South India (SIAG)
            </h3>
            <p className="text-xs text-neutral-grey leading-relaxed">
              Serving the Lord together through church worship, spreading the Gospel, and caring for our community.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
