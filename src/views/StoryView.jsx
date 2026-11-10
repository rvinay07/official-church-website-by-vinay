import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Image as ImageIcon, ChevronLeft, ChevronRight, Play, Pause, Maximize2, ArrowLeft } from 'lucide-react';
import { STORY_PHOTOS } from '../data/churchData';

export default function StoryView({ openLightbox, onOpenLightbox, onNavigate, setCurrentView }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const navigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (index) => {
    if (onOpenLightbox) {
      onOpenLightbox(STORY_PHOTOS, index);
    } else if (openLightbox) {
      openLightbox(index);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % STORY_PHOTOS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="bg-[#F8F5EF] text-[#252525] pb-16 sm:pb-20 overflow-x-hidden">
      
      {/* 1. Header Banner */}
      <section className="relative bg-[#103546] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('church-image-1.jpg')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2F3E] via-[#103546]/95 to-[#164B60]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-white/15">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Church History &amp; Archive</span>
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            The 40-Year Journey of Agape AG Church
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            From a small prayer gathering in 1985 to a blessed church family in Guntakal today. Browse 59 historical photos.
          </p>
        </div>
      </section>

      {/* 2. Narrative Section & Slideshow Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Narrative Milestones (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Church Milestones</span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mt-0.5">
                40 Years of God’s Blessings
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-charcoal leading-relaxed">
              <div className="bg-white rounded-md border border-neutral-border p-4 shadow-subtle">
                <div className="font-serif font-bold text-teal-deep text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-muted shrink-0"></span>
                  <span>1985 &mdash; How God Started the Church</span>
                </div>
                <p className="text-neutral-grey text-xs">
                  Started by Senior Pastor Rev. A.P. Solomon Vijay Raj through earnest prayers and visiting homes across Guntakal.
                </p>
              </div>

              <div className="bg-white rounded-md border border-neutral-border p-4 shadow-subtle">
                <div className="font-serif font-bold text-teal-deep text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-muted shrink-0"></span>
                  <span>Building God's Sanctuary</span>
                </div>
                <p className="text-neutral-grey text-xs">
                  Through faithful prayers and members' sacrificial giving, our church sanctuary in Housing Board Colony was built.
                </p>
              </div>

              <div className="bg-white rounded-md border border-neutral-border p-4 shadow-subtle">
                <div className="font-serif font-bold text-teal-deep text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-muted shrink-0"></span>
                  <span>Church Ministries Today</span>
                </div>
                <p className="text-neutral-grey text-xs">
                  Now conducting 4 Sunday services in Telugu and English, youth meetings, Sunday school, village outreach, and live YouTube streams.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate('about')}
              className="btn-secondary text-xs w-full sm:w-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Church Overview</span>
            </button>
          </div>

          {/* Right Column: Interactive Slideshow Player (7 Cols) */}
          <div className="lg:col-span-7 space-y-2.5">
            <div className="bg-[#103546] rounded-md overflow-hidden shadow-card border border-neutral-border">
              
              {/* Photo Display */}
              <div className="relative aspect-[4/3] xs:aspect-16/10 w-full bg-black flex items-center justify-center">
                <img
                  src={STORY_PHOTOS[slideIndex].src}
                  alt={STORY_PHOTOS[slideIndex].caption}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'church-image-2.jpeg';
                  }}
                />

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 text-white text-xs font-semibold backdrop-blur-xs">
                  #{slideIndex + 1} of {STORY_PHOTOS.length}
                </span>

                <button
                  onClick={() => handleOpenLightbox(slideIndex)}
                  className="absolute top-3 right-3 p-2 rounded bg-black/70 hover:bg-black/90 text-white transition-colors"
                  title="Expand to Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Caption Bar */}
              <div className="p-3.5 sm:p-4 bg-[#0E2F3E] text-white flex items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="font-medium truncate">
                  {STORY_PHOTOS[slideIndex].caption}
                </div>
                <div className="text-stone-300 text-xs shrink-0">
                  {STORY_PHOTOS[slideIndex].year || 'Historical Milestone'}
                </div>
              </div>

              {/* Player Controls (Mobile Wrapped) */}
              <div className="p-3 bg-[#103546] border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setSlideIndex((prev) => (prev - 1 + STORY_PHOTOS.length) % STORY_PHOTOS.length)}
                    className="p-2 min-h-[36px] min-w-[36px] rounded bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center touch-manipulation"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-3 py-1.5 min-h-[36px] rounded bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors touch-manipulation"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    onClick={() => setSlideIndex((prev) => (prev + 1) % STORY_PHOTOS.length)}
                    className="p-2 min-h-[36px] min-w-[36px] rounded bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center touch-manipulation"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-[11px] text-stone-300">
                  Auto-playing every 4.5s
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Complete 59-Photo Historical Archive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-neutral-border">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
              Complete 59-Photo Historical Archive
            </h3>
            <p className="text-xs sm:text-sm text-neutral-grey">Click any photograph to view in full-screen lightbox</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-surface text-teal-deep shrink-0 self-start sm:self-auto">
            All 59 Archive Photos Preserved
          </span>
        </div>

        {/* 2-Col Mobile, 3-Col Tablet, 4-Col Desktop Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {STORY_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id || idx}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative aspect-4/3 rounded-md overflow-hidden border border-neutral-border bg-stone-100 cursor-pointer shadow-subtle hover:border-teal-deep transition-all"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  e.currentTarget.src = 'church-image-1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                <span className="self-end text-[10px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">
                  #{idx + 1}
                </span>
                <span className="text-white text-[11px] leading-tight line-clamp-2">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
