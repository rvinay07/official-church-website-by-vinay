import React, { useState } from 'react';
import { 
  Play, Radio, Film, Music, Video, UserCheck, Phone, Mail, 
  Image as ImageIcon, ExternalLink, Sparkles, Heart, Camera, 
  Mic, Monitor, MessageCircle 
} from 'lucide-react';
import { VIDEOS, CHURCH_INFO, SOCIAL_LINKS } from '../data/churchData';

const GALLERY_PREVIEWS = [
  { id: 1, src: 'church-image-1.jpg', title: 'Sunday Worship Sanctuary' },
  { id: 2, src: 'church-image-2.jpeg', title: 'Fellowship & Preaching' },
  { id: 3, src: 'church-image-3.jpeg', title: 'Praise & Prayer Moments' },
  { id: 4, src: 'church-image-4.jpeg', title: 'Prayer & Fellowship' },
  { id: 5, src: 'church-image-5.jpeg', title: 'Congregational Worship' },
  { id: 6, src: 'church-image-6.jpeg', title: 'Youth Celebrations' },
  { id: 7, src: 'IMG_7318.JPG.jpeg', title: 'Pastoral Care & Ministry' },
];

export default function MediaView({ 
  openVideoModal, 
  onOpenVideo, 
  openLightbox, 
  onOpenLightbox, 
  onNavigate, 
  setCurrentView 
}) {
  const [filter, setFilter] = useState('all');

  const handleVideo = onOpenVideo || openVideoModal;
  const handleLightbox = (index) => {
    if (onOpenLightbox) {
      onOpenLightbox(GALLERY_PREVIEWS, index);
    } else if (openLightbox) {
      openLightbox(index);
    }
  };

  const navigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredVideos = filter === 'all'
    ? VIDEOS
    : VIDEOS.filter((v) => v.category === filter);

  return (
    <div className="bg-[#F8F5EF] text-[#252525] pb-16 sm:pb-20 overflow-x-hidden">
      
      {/* 1. Header Banner */}
      <section className="relative bg-[#103546] text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('church-image-5.jpeg')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0E2F3E] via-[#103546]/95 to-[#164B60]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gold-muted text-xs font-semibold uppercase tracking-wider border border-white/15">
            <Video className="w-3.5 h-3.5" />
            <span>Broadcasts, Sermons &amp; Moments</span>
          </span>
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Word of God &amp; Media Ministry
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Watch Sunday messages, choir praise songs, church short films, and view photo memories from our worship gatherings in Guntakal.
          </p>
        </div>
      </section>

      {/* 2. Highlighted Media Volunteers Feature & YouTube Live Broadcast */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-6">
        
        {/* Highlighted Media Volunteers Card (High-Impact Hero Banner) */}
        <div className="relative overflow-hidden rounded-xl border-2 border-amber-300/90 bg-gradient-to-br from-amber-50/95 via-white to-teal-50/40 p-5 sm:p-8 md:p-10 shadow-card">
          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 w-52 h-52 rounded-full bg-amber-200/35 blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="absolute -left-10 -top-10 w-52 h-52 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" aria-hidden="true"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>Media Volunteers Welcome</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-surface text-teal-deep text-xs font-semibold border border-teal-deep/20">
                  <Heart className="w-3 h-3 fill-teal-deep" />
                  <span>Serve the Lord with Your Talents</span>
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                Use Your God-Given Talents in Sound, Video &amp; Live Broadcast
              </h2>

              <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed">
                God has blessed you with unique talents. If you have an interest in cameras, sound engineering, video editing, or computer projection, our church media team welcomes you with warm hearts! <strong className="text-teal-deep font-semibold">No prior experience required</strong> &mdash; we provide full hands-on training, friendly mentorship, and loving encouragement.
              </p>

              {/* Roles Available Pills */}
              <div className="pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal mb-2">
                  Areas Where You Can Serve &amp; Learn:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-border font-medium text-charcoal shadow-xs">
                    <Camera className="w-3.5 h-3.5 text-teal-deep" />
                    <span>Camera &amp; Live Streaming</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-border font-medium text-charcoal shadow-xs">
                    <Mic className="w-3.5 h-3.5 text-amber-600" />
                    <span>Live Sound &amp; Audio Mixing</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-border font-medium text-charcoal shadow-xs">
                    <Monitor className="w-3.5 h-3.5 text-blue-600" />
                    <span>Song Lyrics &amp; Screen Projection</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-border font-medium text-charcoal shadow-xs">
                    <Video className="w-3.5 h-3.5 text-rose-600" />
                    <span>Video Editing &amp; Highlights</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-border font-medium text-charcoal shadow-xs">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Service Recording &amp; Photography</span>
                  </span>
                </div>
              </div>

              {/* Biblical Scripture Inspiration */}
              <div className="pt-1 flex items-start gap-2 text-stone-600 text-xs italic font-serif">
                <span>&ldquo;Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace.&rdquo; &mdash; 1 Peter 4:10</span>
              </div>
            </div>

            {/* Right Action Box (4 Cols) */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-xs p-5 sm:p-6 rounded-lg border border-amber-200/90 shadow-subtle space-y-3.5 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                  Get Involved Today
                </span>
                <h3 className="font-serif text-lg font-bold text-charcoal">
                  Join Our Media Family
                </h3>
                <p className="text-xs text-neutral-grey">
                  Reach out directly to our pastoral team. We would love to guide and serve together with you!
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href={`https://wa.me/919502214602?text=${encodeURIComponent('Praise the Lord Pastor, I would like to volunteer and serve in the Agape AG Church Media Ministry team.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-colors touch-manipulation"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>Volunteer via WhatsApp</span>
                </a>

                <a
                  href={`mailto:${CHURCH_INFO.email}?subject=Volunteer%20for%20Church%20Media%20Ministry`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-teal-surface hover:bg-teal-deep hover:text-white text-teal-deep font-semibold text-xs border border-teal-deep/30 transition-colors touch-manipulation"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email Inquiry</span>
                </a>
              </div>

              <div className="text-[11px] text-stone-500 text-center pt-1 border-t border-neutral-border/60">
                Open to all believers, students &amp; youth
              </div>
            </div>

          </div>
        </div>

        {/* YouTube Channel Feature (Compact Stream Bar) */}
        <div className="p-4 sm:p-5 rounded-lg bg-[#103546] text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border border-teal-deep/40 shadow-subtle">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Radio className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-white text-base sm:text-lg">
                  Watch Sunday Sermons Live on YouTube
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-600 text-white animate-pulse">
                  Live
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-0.5">
                Every Sunday morning live worship stream &amp; full message archive at @agapeagchurchgtl
              </p>
            </div>
          </div>

          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold self-start md:self-auto shrink-0 text-xs"
          >
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </section>

      {/* 3. Filter Navigation & Video Library */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {/* Edge-to-edge swipeable filter pills on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {['all', 'Sermon', 'Special Film', 'Worship Song', 'Live Stream'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors touch-manipulation min-h-[40px] ${
                filter === cat
                  ? 'bg-teal-deep text-white shadow-subtle'
                  : 'bg-white border border-neutral-border text-charcoal hover:bg-ivory'
              }`}
            >
              {cat === 'all' ? 'All Ministry Videos' : cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-5 sm:mt-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleVideo && handleVideo(video)}
              className="bg-white rounded-md overflow-hidden shadow-subtle hover:border-teal-deep transition-all border border-neutral-border cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-teal-deep text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-2">
                <div>
                  <span className="text-[11px] font-semibold text-teal-deep uppercase tracking-wider block mb-1">
                    {video.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-charcoal group-hover:text-teal-deep transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-neutral-grey mt-1">{video.speaker}</p>
                </div>

                <div className="pt-3 border-t border-neutral-border/60 flex items-center justify-between text-xs font-semibold text-teal-deep">
                  <span>Watch Sermon Video</span>
                  <Play className="w-3.5 h-3.5 fill-teal-deep" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Church Life Moments Photo Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6 pb-3 border-b border-neutral-border">
          <div>
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-charcoal">
              Congregational Life in Photographs
            </h3>
            <p className="text-xs sm:text-sm text-neutral-grey">Moments of praise, fellowship, and ministry in Guntakal</p>
          </div>
          <button
            onClick={() => navigate('story')}
            className="btn-text self-start sm:self-auto text-xs"
          >
            <span>See 40-Year Story &rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4">
          {GALLERY_PREVIEWS.map((img, index) => (
            <div
              key={img.id}
              onClick={() => handleLightbox(index)}
              className="group relative aspect-4/3 bg-stone-100 rounded-md overflow-hidden border border-neutral-border cursor-pointer shadow-subtle hover:border-teal-deep transition-all"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-2.5">
                <span className="text-white text-[11px] sm:text-xs font-medium leading-tight line-clamp-2">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
