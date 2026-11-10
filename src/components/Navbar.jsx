import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Clock, Heart, Radio, 
  HandHeart, BookOpen, Users, Church, Compass, Flame,
  Baby, Sparkles, Phone, MapPin, ExternalLink, ChevronRight
} from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  onNavigate, 
  openPrayerModal, 
  onOpenPrayer, 
  openGivingModal, 
  onOpenGiving 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [ministriesDropdownOpen, setMinistriesDropdownOpen] = useState(false);
  
  // Mobile accordion toggles
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMinistriesOpen, setMobileMinistriesOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const handlePrayer = onOpenPrayer || openPrayerModal;
  const handleGiving = onOpenGiving || openGivingModal;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (view, extra = {}) => {
    if (onNavigate) {
      if (view.startsWith('ministry-')) {
        onNavigate('ministries', { ministryId: view.replace('ministry-', '') });
      } else {
        onNavigate(view, extra);
      }
    } else if (setCurrentView) {
      setCurrentView(view);
    }
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setMinistriesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAboutActive = ['about', 'story', 'pastors', 'beliefs'].includes(currentView);
  const isMinistriesActive = currentView === 'ministries' || currentView.startsWith('ministry-');

  return (
    <>
      {/* 1. Dignified Top Announcement Bar (Optimized for Mobile) */}
      <div className="bg-[#103546] text-[#F8F5EF] text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-teal-light/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Mobile compact text */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium truncate">
            <span className="text-gold-muted flex items-center gap-1 shrink-0">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">Sunday:</span>
            </span>
            <span className="text-stone-200 truncate">
              7:30 AM &bull; 11:00 AM &bull; 5:00 PM &bull; 6:30 PM
            </span>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs shrink-0">
            <a 
              href={CHURCH_INFO.youtubeStreams} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-stone-200 hover:text-white transition-colors"
            >
              <Radio className="w-3 h-3 text-red-400" />
              <span className="hidden xs:inline">Live</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a 
              href={`tel:${CHURCH_INFO.phoneRaw}`} 
              className="inline-flex items-center gap-1 text-gold-muted hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">{CHURCH_INFO.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar (Mobile Ergonomic Height: h-16 sm:h-18 lg:h-20) */}
      <header className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-card border-b border-neutral-border' : 'border-b border-neutral-border'
      }`}>
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20 flex items-center justify-between">
          
          {/* Church Brand Identity */}
          <button 
            onClick={() => navigate('home')} 
            className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group max-w-[70%] xs:max-w-[75%] sm:max-w-none"
            aria-label="Agape A.G. Church Home"
          >
            <img 
              src="logo.png" 
              alt="Agape AG Church Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-border shadow-subtle object-cover shrink-0" 
            />
            <div className="overflow-hidden">
              <span className="block font-serif text-lg sm:text-2xl font-bold tracking-tight text-teal-deep leading-tight truncate group-hover:text-teal-dark transition-colors">
                {CHURCH_INFO.name}
              </span>
              <span className="block text-[10px] sm:text-[11px] font-medium tracking-wider text-neutral-grey uppercase truncate">
                {CHURCH_INFO.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (hidden on mobile/tablet) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            <button
              onClick={() => navigate('home')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'home'
                  ? 'text-teal-deep font-semibold bg-teal-surface'
                  : 'text-charcoal hover:text-teal-deep hover:bg-ivory'
              }`}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('about')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isAboutActive
                    ? 'text-teal-deep font-semibold bg-teal-surface'
                    : 'text-charcoal hover:text-teal-deep hover:bg-ivory'
                }`}
                aria-expanded={aboutDropdownOpen}
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-md border border-neutral-border shadow-elevated py-2 z-50 animate-in fade-in duration-100">
                  <button
                    onClick={() => navigate('about')}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep transition-colors"
                  >
                    <Church className="w-4 h-4 text-teal-deep shrink-0" />
                    <div>
                      <div className="font-medium">Overview &amp; Vision</div>
                      <div className="text-xs text-neutral-grey">Our heart &amp; community</div>
                    </div>
                  </button>

                  <button
                    onClick={() => navigate('story')}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-gold-muted shrink-0" />
                    <div>
                      <div className="font-medium">40-Year Story &amp; Archive</div>
                      <div className="text-xs text-neutral-grey">Milestones &amp; 59 photos</div>
                    </div>
                  </button>

                  <button
                    onClick={() => navigate('pastors')}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep transition-colors"
                  >
                    <Users className="w-4 h-4 text-teal-deep shrink-0" />
                    <div>
                      <div className="font-medium">Pastoral Leadership</div>
                      <div className="text-xs text-neutral-grey">Rev. A.P. Solomon &amp; pastors</div>
                    </div>
                  </button>

                  <button
                    onClick={() => navigate('beliefs')}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep transition-colors"
                  >
                    <Compass className="w-4 h-4 text-gold-muted shrink-0" />
                    <div>
                      <div className="font-medium">What We Believe</div>
                      <div className="text-xs text-neutral-grey">Assemblies of God tenets</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('services')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'services'
                  ? 'text-teal-deep font-semibold bg-teal-surface'
                  : 'text-charcoal hover:text-teal-deep hover:bg-ivory'
              }`}
            >
              Services
            </button>

            {/* Ministries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMinistriesDropdownOpen(true)}
              onMouseLeave={() => setMinistriesDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('ministries')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isMinistriesActive
                    ? 'text-teal-deep font-semibold bg-teal-surface'
                    : 'text-charcoal hover:text-teal-deep hover:bg-ivory'
                }`}
                aria-expanded={ministriesDropdownOpen}
              >
                <span>Ministries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${ministriesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {ministriesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-md border border-neutral-border shadow-elevated py-2 z-50 animate-in fade-in duration-100">
                  <button
                    onClick={() => navigate('ministries')}
                    className="w-full flex items-center justify-between px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-teal-deep border-b border-neutral-border/60 hover:bg-ivory"
                  >
                    <span>All Church Ministries</span>
                    <span className="text-gold-muted">&rarr;</span>
                  </button>

                  <button
                    onClick={() => navigate('ministry-youth')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep"
                  >
                    <Flame className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Chosen Generation (Youth)</span>
                  </button>

                  <button
                    onClick={() => navigate('ministry-children')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep"
                  >
                    <Baby className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>Agape Sunday School</span>
                  </button>

                  <button
                    onClick={() => navigate('ministry-sisters')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep"
                  >
                    <Sparkles className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Women's Fellowship</span>
                  </button>

                  <button
                    onClick={() => navigate('ministry-brothers')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep"
                  >
                    <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Men's Brotherhood</span>
                  </button>

                  <button
                    onClick={() => navigate('ministry-prayer')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep"
                  >
                    <HandHeart className="w-4 h-4 text-teal-deep shrink-0" />
                    <span>All Night Prayer</span>
                  </button>

                  <button
                    onClick={() => navigate('ministry-gospel')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-charcoal hover:bg-ivory hover:text-teal-deep"
                  >
                    <Compass className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Village Gospel Outreach</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('media')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'media'
                  ? 'text-teal-deep font-semibold bg-teal-surface'
                  : 'text-charcoal hover:text-teal-deep hover:bg-ivory'
              }`}
            >
              Sermons
            </button>

            <button
              onClick={() => navigate('social')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'social'
                  ? 'text-teal-deep font-semibold bg-teal-surface'
                  : 'text-charcoal hover:text-teal-deep hover:bg-ivory'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handlePrayer}
              className="btn-secondary"
            >
              <HandHeart className="w-4 h-4 text-teal-deep" />
              <span>Prayer Request</span>
            </button>

            <button
              onClick={handleGiving}
              className="btn-primary"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>Give Online</span>
            </button>
          </div>

          {/* Mobile Right Controls: Quick Give Button + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleGiving}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-md text-xs font-semibold bg-teal-deep text-white shadow-subtle touch-manipulation active:scale-95 transition-transform"
              aria-label="Give Online"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Give</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-charcoal hover:bg-ivory border border-neutral-border focus:outline-none touch-manipulation active:scale-95 transition-transform"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-teal-deep" /> : <Menu className="w-6 h-6 text-charcoal" />}
            </button>
          </div>

        </nav>

        {/* 3. Modern Off-Canvas Mobile Drawer & Backdrop */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Dark Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 transition-opacity animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            ></div>

            {/* Slide-in Drawer Container */}
            <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250">
              
              {/* Drawer Top Header */}
              <div className="p-4 border-b border-neutral-border flex items-center justify-between bg-ivory">
                <div className="flex items-center gap-2.5">
                  <img src="logo.png" alt="Agape AG Church" className="w-8 h-8 rounded-full border border-neutral-border" />
                  <div>
                    <span className="font-serif font-bold text-sm text-teal-deep block leading-tight">{CHURCH_INFO.name}</span>
                    <span className="text-[10px] text-neutral-grey block">{CHURCH_INFO.tagline}</span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-charcoal hover:bg-white text-sm min-w-[40px] min-h-[40px] flex items-center justify-center border border-neutral-border"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Nav Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
                
                {/* Home */}
                <button
                  onClick={() => navigate('home')}
                  className={`w-full text-left px-3.5 py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-between ${
                    currentView === 'home' ? 'bg-teal-surface text-teal-deep' : 'text-charcoal hover:bg-ivory'
                  }`}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-neutral-grey" />
                </button>

                {/* About Accordion */}
                <div className="border border-neutral-border rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full text-left px-3.5 py-3 text-sm font-semibold text-charcoal flex items-center justify-between hover:bg-ivory"
                  >
                    <span>About Church</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-grey transition-transform duration-150 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileAboutOpen && (
                    <div className="bg-ivory-warm border-t border-neutral-border p-2 space-y-1">
                      <button onClick={() => navigate('about')} className="w-full text-left py-2 px-3 text-xs sm:text-sm font-medium text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <Church className="w-3.5 h-3.5 text-teal-deep" />
                        <span>Church Overview &amp; Vision</span>
                      </button>
                      <button onClick={() => navigate('story')} className="w-full text-left py-2 px-3 text-xs sm:text-sm font-medium text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-gold-muted" />
                        <span>40-Year Story &amp; 59 Photos</span>
                      </button>
                      <button onClick={() => navigate('pastors')} className="w-full text-left py-2 px-3 text-xs sm:text-sm font-medium text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-teal-deep" />
                        <span>Pastoral Leadership Team</span>
                      </button>
                      <button onClick={() => navigate('beliefs')} className="w-full text-left py-2 px-3 text-xs sm:text-sm font-medium text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <Compass className="w-3.5 h-3.5 text-gold-muted" />
                        <span>What We Believe (Tenets)</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Services */}
                <button
                  onClick={() => navigate('services')}
                  className={`w-full text-left px-3.5 py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-between ${
                    currentView === 'services' ? 'bg-teal-surface text-teal-deep' : 'text-charcoal hover:bg-ivory'
                  }`}
                >
                  <span>Services &amp; Gatherings</span>
                  <ChevronRight className="w-4 h-4 text-neutral-grey" />
                </button>

                {/* Ministries Accordion */}
                <div className="border border-neutral-border rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => setMobileMinistriesOpen(!mobileMinistriesOpen)}
                    className="w-full text-left px-3.5 py-3 text-sm font-semibold text-charcoal flex items-center justify-between hover:bg-ivory"
                  >
                    <span>Ministries</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-grey transition-transform duration-150 ${mobileMinistriesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileMinistriesOpen && (
                    <div className="bg-ivory-warm border-t border-neutral-border p-2 space-y-1">
                      <button onClick={() => navigate('ministries')} className="w-full text-left py-2 px-3 text-xs sm:text-sm font-bold text-teal-deep flex items-center justify-between">
                        <span>All Ministries Directory</span>
                        <span>&rarr;</span>
                      </button>
                      <button onClick={() => navigate('ministry-youth')} className="w-full text-left py-2 px-3 text-xs sm:text-sm text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <Flame className="w-3.5 h-3.5 text-amber-500" />
                        <span>Chosen Generation (Youth)</span>
                      </button>
                      <button onClick={() => navigate('ministry-children')} className="w-full text-left py-2 px-3 text-xs sm:text-sm text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <Baby className="w-3.5 h-3.5 text-sky-500" />
                        <span>Sunday School Children</span>
                      </button>
                      <button onClick={() => navigate('ministry-sisters')} className="w-full text-left py-2 px-3 text-xs sm:text-sm text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                        <span>Women's Fellowship</span>
                      </button>
                      <button onClick={() => navigate('ministry-brothers')} className="w-full text-left py-2 px-3 text-xs sm:text-sm text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Men's Brotherhood</span>
                      </button>
                      <button onClick={() => navigate('ministry-prayer')} className="w-full text-left py-2 px-3 text-xs sm:text-sm text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <HandHeart className="w-3.5 h-3.5 text-teal-deep" />
                        <span>All Night Prayer</span>
                      </button>
                      <button onClick={() => navigate('ministry-gospel')} className="w-full text-left py-2 px-3 text-xs sm:text-sm text-charcoal hover:text-teal-deep flex items-center gap-2">
                        <Compass className="w-3.5 h-3.5 text-amber-600" />
                        <span>Village Gospel Outreach</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Sermons & Media */}
                <button
                  onClick={() => navigate('media')}
                  className={`w-full text-left px-3.5 py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-between ${
                    currentView === 'media' ? 'bg-teal-surface text-teal-deep' : 'text-charcoal hover:bg-ivory'
                  }`}
                >
                  <span>Sermons &amp; Media</span>
                  <ChevronRight className="w-4 h-4 text-neutral-grey" />
                </button>

                {/* Contact */}
                <button
                  onClick={() => navigate('social')}
                  className={`w-full text-left px-3.5 py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-between ${
                    currentView === 'social' ? 'bg-teal-surface text-teal-deep' : 'text-charcoal hover:bg-ivory'
                  }`}
                >
                  <span>Contact &amp; Location</span>
                  <ChevronRight className="w-4 h-4 text-neutral-grey" />
                </button>

              </div>

              {/* Mobile Drawer Bottom Actions */}
              <div className="p-4 border-t border-neutral-border bg-white space-y-2.5">
                <button
                  onClick={() => { setMobileMenuOpen(false); handlePrayer && handlePrayer(); }}
                  className="btn-secondary w-full"
                >
                  <HandHeart className="w-4 h-4 text-teal-deep" />
                  <span>Send Prayer Request</span>
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleGiving && handleGiving(); }}
                  className="btn-primary w-full"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Give Online (Tithes &amp; Offerings)</span>
                </button>
                
                <div className="pt-2 flex items-center justify-between text-xs text-neutral-grey">
                  <a href={`tel:${CHURCH_INFO.phoneRaw}`} className="hover:text-teal-deep flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> Call Church
                  </a>
                  <a href={CHURCH_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-deep flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Directions
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
}
