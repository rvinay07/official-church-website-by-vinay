import React from 'react';
import { 
  Clock, Play, Radio, ArrowRight, Heart, Users, MapPin, 
  Calendar, BookOpen, Sparkles, Send, Phone, ShieldCheck, Flame,
  HandHeart, ChevronRight, CheckCircle2, Video, ExternalLink
} from 'lucide-react';
import { SERVICES, UPCOMING_EVENTS, PASTORS, VIDEOS, CHURCH_INFO, STORY_PHOTOS } from '../data/churchData';

export default function HomeView({ 
  setCurrentView, 
  onNavigate, 
  openGivingModal, 
  onOpenGiving, 
  openPrayerModal, 
  onOpenPrayer, 
  openVideoModal,
  onOpenVideo,
  openLightbox,
  onOpenLightbox
}) {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGiving = onOpenGiving || openGivingModal;
  const handlePrayer = onOpenPrayer || openPrayerModal;
  const handleVideo = onOpenVideo || openVideoModal;
  const handleLightbox = onOpenLightbox || openLightbox;

  const seniorPastor = PASTORS.find(p => p.role.includes('Senior')) || PASTORS[0];
  const featuredSermon = VIDEOS.find(v => v.category.includes('Sermon')) || VIDEOS[0];

  return (
    <div className="bg-[#F8F5EF] text-[#252525] overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative bg-[#103546] text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-100"
          style={{ backgroundImage: `url('church-image-1.jpg')` }}
          aria-hidden="true"
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0E2F3E]/95 via-[#103546]/90 to-[#164B60]/85"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 z-10">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/10 text-gold-muted text-[11px] sm:text-xs font-semibold tracking-wider uppercase border border-white/15">
              <span>{CHURCH_INFO.name} &bull; {CHURCH_INFO.tagline}</span>
            </div>

            <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Welcome to Agape AG Church Family
            </h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-2xl font-light">
              A warm, loving Christian family in Guntakal. Come worship with us, hear God’s living Word, and receive personal prayer and blessings.
            </p>

            {/* Mobile-Friendly Full-Width Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => navigate('services')}
                className="btn-gold w-full sm:w-auto"
              >
                <span>Join Us This Sunday</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('story')}
                className="btn-outline-white w-full sm:w-auto"
              >
                <BookOpen className="w-4 h-4 text-stone-300" />
                <span>Our 40-Year Story</span>
              </button>

              <button
                onClick={handlePrayer}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-stone-200 hover:text-white transition-colors"
              >
                <HandHeart className="w-4 h-4 text-gold-muted" />
                <span>Need Prayer?</span>
              </button>
            </div>

            {/* Quick Strip */}
            <div className="pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-muted shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">4 Sunday Services</div>
                  <div className="text-stone-300">7:30 AM, 11:00 AM, 5:00 PM &amp; 6:30 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-muted shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Old Guntakal</div>
                  <div className="text-stone-300">D-No : 20-279, Near Housing Board Colony</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Radio className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Live Broadcast</div>
                  <div className="text-stone-300">Every Sunday Morning on YouTube</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Sunday Worship Services Section */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-3 border-b border-neutral-border gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Worship With Us</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mt-1">
              Sunday Services Schedule
            </h2>
            <p className="text-neutral-grey text-xs sm:text-sm mt-1">
              Four Sunday services in Telugu and English. Join in person or online.
            </p>
          </div>
          <button 
            onClick={() => navigate('services')}
            className="btn-text self-start md:self-auto shrink-0"
          >
            <span>Full Schedule &rarr;</span>
          </button>
        </div>

        {/* 4 Clean Editorial Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id || idx}
              className="bg-white rounded-md border border-neutral-border p-5 shadow-subtle flex flex-col justify-between hover:border-teal-deep transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-teal-surface text-teal-deep">
                    {service.language || 'Telugu'}
                  </span>
                  {service.isLive && (
                    <span className="text-[11px] font-medium text-red-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                      Live
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1">
                  {service.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-gold-deep mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{service.time}</span>
                </div>

                <p className="text-neutral-grey text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-border/60 flex items-center justify-between text-xs">
                <span className="text-neutral-grey">Sanctuary</span>
                <button 
                  onClick={() => navigate('services')}
                  className="text-teal-deep font-semibold hover:underline"
                >
                  Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Weekday Services Notice */}
        <div className="mt-5 p-3.5 sm:p-4 rounded-md bg-ivory-warm border border-neutral-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
          <div className="space-y-0.5">
            <span className="font-semibold text-teal-deep block sm:inline mr-2">Weekly &amp; Monthly Programs:</span>
            <span className="text-neutral-grey">Thu Men's (7 PM) &bull; Fri Intercession (10 AM) &bull; Sat Sisters (11 AM) &bull; 2nd Sat Youth (9:30 AM) &bull; Last Fri All Night Prayer (10 PM)</span>
          </div>
          <button 
            onClick={handlePrayer} 
            className="btn-text self-start sm:self-auto shrink-0"
          >
            <span>Submit Prayer Request &rarr;</span>
          </button>
        </div>
      </section>

      {/* 3. Pastoral Welcome */}
      <section className="py-10 sm:py-16 bg-white border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            
            {/* Pastoral Portrait */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/5] max-h-72 sm:max-h-80 md:max-h-96 rounded-md overflow-hidden border border-neutral-border shadow-subtle bg-stone-100">
                  <img 
                    src="about/pastors/solomon.JPG" 
                    alt="Senior Pastor Rev. A.P. Solomon Vijay Raj" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src = 'about/story/1.png';
                    }}
                  />
                </div>
                <div className="mt-2.5 p-2.5 bg-ivory-warm rounded-md border border-neutral-border">
                  <div className="font-serif font-bold text-charcoal text-sm">
                    Rev. A.P. Solomon Vijay Raj &amp; Dr. Rajkumari
                  </div>
                  <div className="text-[11px] text-neutral-grey">
                    Founding Senior Pastors &bull; Agape AG Church
                  </div>
                </div>
              </div>
            </div>

            {/* Pastoral Message - Minimized & Human */}
            <div className="lg:col-span-7 space-y-3.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">
                Pastoral Welcome
              </span>
              
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal leading-tight">
                "You and Your Family Are Always Welcome Here"
              </h2>

              <blockquote className="border-l-3 border-gold-muted pl-3.5 italic text-neutral-grey text-xs sm:text-sm leading-relaxed">
                "No matter what problems, sickness, or difficulties you are facing, God has not forgotten you. Come with your family, worship the Lord, and let us pray for you."
              </blockquote>

              <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                Serving and praying for the people of Guntakal with Christian love since 1985.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => navigate('pastors')}
                  className="btn-primary w-full sm:w-auto"
                >
                  <Users className="w-4 h-4" />
                  <span>Meet Our Pastors</span>
                </button>

                <button
                  onClick={() => navigate('about')}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <span>About Our Church</span>
                </button>

                <a
                  href={`tel:${CHURCH_INFO.phoneRaw}`}
                  className="btn-text justify-center sm:justify-start"
                >
                  <Phone className="w-4 h-4 text-gold-muted" />
                  <span>{CHURCH_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. 40-Year Story Spotlight */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 pb-3 border-b border-neutral-border gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">Church History</span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mt-0.5">
              40 Years of God’s Faithfulness (1985 &ndash; 2025)
            </h2>
            <p className="text-neutral-grey text-xs sm:text-sm mt-0.5">
              Started in 1985 with a few believers, now blessed by God's grace. See all 59 historical photos.
            </p>
          </div>
          <button 
            onClick={() => navigate('story')}
            className="btn-secondary self-start sm:self-auto shrink-0 w-full sm:w-auto"
          >
            <BookOpen className="w-4 h-4 text-teal-deep" />
            <span>View 59-Photo Archive</span>
          </button>
        </div>

        {/* 4 Historical Photo Previews */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {[1, 10, 25, 40].map((photoNum) => {
            const photo = STORY_PHOTOS[photoNum - 1] || STORY_PHOTOS[0];
            return (
              <div 
                key={photoNum}
                onClick={() => navigate('story')}
                className="group relative aspect-4/3 rounded-md overflow-hidden border border-neutral-border bg-stone-100 cursor-pointer shadow-subtle hover:border-teal-deep transition-all"
              >
                <img 
                  src={photo.src}
                  alt={photo.caption || 'Historical church photo'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  onError={(e) => {
                    e.currentTarget.src = 'church-image-2.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2 sm:p-2.5">
                  <span className="text-white text-[10px] sm:text-xs font-medium leading-tight line-clamp-1">
                    {photo.caption || `Archive #${photoNum}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Ministries & Community Life */}
      <section className="py-10 sm:py-16 bg-ivory-warm border-t border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Community Life</span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mt-0.5">
              Ministries for Every Generation
            </h2>
            <p className="text-neutral-grey text-xs sm:text-sm mt-0.5">
              Active fellowships for children, youth, women, men, and rural outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Ministry 1 */}
            <div className="bg-white rounded-md border border-neutral-border p-5 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center mb-2.5">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-0.5">
                  Chosen Generation
                </h3>
                <div className="text-xs font-semibold text-teal-deep mb-2">
                  Youth &bull; Every 2nd Saturday 9:30 AM
                </div>
                <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed mb-3">
                  Passionate praise, action songs, Bible study, and spiritual mentorship for students and youth.
                </p>
              </div>
              <button 
                onClick={() => navigate('ministry-youth')}
                className="btn-text self-start text-xs"
              >
                <span>Youth Ministry Details &rarr;</span>
              </button>
            </div>

            {/* Ministry 2 */}
            <div className="bg-white rounded-md border border-neutral-border p-5 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-700 flex items-center justify-center mb-2.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-0.5">
                  Sunday School
                </h3>
                <div className="text-xs font-semibold text-teal-deep mb-2">
                  Children &bull; Every Sunday Morning
                </div>
                <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed mb-3">
                  Nurturing young hearts through illustrated Bible stories, action songs, creative crafts, and prayer.
                </p>
              </div>
              <button 
                onClick={() => navigate('ministry-children')}
                className="btn-text self-start text-xs"
              >
                <span>Sunday School Details &rarr;</span>
              </button>
            </div>

            {/* Ministry 3 */}
            <div className="bg-white rounded-md border border-neutral-border p-5 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-700 flex items-center justify-center mb-2.5">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-0.5">
                  Family &amp; Intercession
                </h3>
                <div className="text-xs font-semibold text-teal-deep mb-2">
                  All Night Prayer &amp; Sisters Meeting
                </div>
                <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed mb-3">
                  Monthly All Night Prayer vigil and weekly Saturday Sisters Meeting for family blessings and revival.
                </p>
              </div>
              <button 
                onClick={() => navigate('ministries')}
                className="btn-text self-start text-xs"
              >
                <span>All Ministries &rarr;</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Video Spotlight */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#103546] text-white rounded-md p-5 sm:p-8 md:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-muted">
                Word of God &bull; Video Broadcast
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                Watch Sunday Sermons &amp; Worship Songs
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Watch weekly Telugu sermons, choir praise songs, and Sunday morning live service on YouTube.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => handleVideo && handleVideo(featuredSermon)}
                  className="btn-gold w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Featured Sermon</span>
                </button>

                <button
                  onClick={() => navigate('media')}
                  className="btn-outline-white w-full sm:w-auto"
                >
                  <Video className="w-4 h-4" />
                  <span>Sermon Library</span>
                </button>
              </div>
            </div>

            {/* Video Thumbnail Preview */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => handleVideo && handleVideo(featuredSermon)}
                className="group relative aspect-video bg-black rounded-md overflow-hidden border border-white/20 cursor-pointer shadow-subtle"
              >
                <img 
                  src={`https://img.youtube.com/vi/${featuredSermon.youtubeId}/hqdefault.jpg`}
                  alt={featuredSermon.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                  <div className="w-11 h-11 rounded-full bg-gold-muted text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 p-1.5 bg-black/80 rounded text-[11px] text-stone-200 truncate">
                  {featuredSermon.title}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Giving & Stewardship */}
      <section className="py-10 sm:py-16 bg-white border-t border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">
                Generosity &amp; Church Support
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal">
                Support God’s Work &amp; Ministries
              </h2>
              <p className="text-neutral-grey text-xs sm:text-sm leading-relaxed max-w-2xl">
                Your tithes and offerings help us maintain church worship, care for poor widows, guide our youth, and share the Gospel in nearby villages.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <button
                onClick={handleGiving}
                className="btn-primary w-full text-center"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Give via UPI / Bank Details</span>
              </button>

              <button
                onClick={() => navigate('give')}
                className="btn-secondary w-full text-center"
              >
                <span>Giving Details &amp; QR Code &rarr;</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Campus Location & Google Maps */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-md border border-neutral-border overflow-hidden shadow-subtle">
          <div className="p-5 sm:p-7 border-b border-neutral-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-deep">Church Address</span>
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-charcoal">
                {CHURCH_INFO.name}
              </h2>
              <div className="text-xs text-neutral-grey">
                <span className="font-semibold text-charcoal">{CHURCH_INFO.tagline}</span> &bull; {CHURCH_INFO.address.line1}, {CHURCH_INFO.address.line2}, {CHURCH_INFO.address.line3} {CHURCH_INFO.address.city}
              </div>
            </div>
            <a
              href={CHURCH_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 self-stretch sm:self-auto text-center"
            >
              <MapPin className="w-4 h-4 text-teal-deep" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-72 sm:h-80 lg:h-96 bg-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.355112106456!2d77.37525387511477!3d15.166418885387428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb713375cb4cfbd%3A0x8670b368db55b3a!2sAgape%20A.G%20Church!5e0!3m2!1sen!2sin!4v1714151234567!5m2!1sen!2sin"
              title="Agape AG Church Location Map"
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
