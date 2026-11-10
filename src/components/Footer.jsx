import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CHURCH_INFO, SOCIAL_LINKS } from '../data/churchData';

export default function Footer({ 
  setCurrentView, 
  onNavigate 
}) {
  const navigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
    } else if (setCurrentView) {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#103546] text-[#F8F5EF] border-t-2 border-gold-muted/30 pt-10 pb-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Column 1: Church Identity & Socials (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="logo.png" 
                alt="Agape AG Church Logo" 
                className="w-11 h-11 rounded-full border border-white/20 object-cover bg-white shrink-0" 
              />
              <div>
                <span className="block font-serif text-lg font-bold text-white leading-snug">
                  {CHURCH_INFO.name}
                </span>
                <span className="block text-xs font-medium text-gold-muted">
                  {CHURCH_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Glorifying the Lord Jesus Christ and sharing His grace, salvation, and love across the world.
            </p>

            <div className="pt-0.5">
              <span className="block text-xs italic text-stone-400 font-serif">
                "And now these three remain: faith, hope and love. But the greatest of these is love." &mdash; 1 Corinthians 13:13
              </span>
            </div>

            {/* Social Icons - Attractive Branded Badges */}
            <div className="pt-2 flex items-center gap-2.5">
              {/* YouTube */}
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-red-600/15 border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-md hover:scale-105 flex items-center justify-center transition-all duration-200"
                aria-label="YouTube Channel"
                title="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-emerald-600/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-md hover:scale-105 flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp Channel"
                title="WhatsApp Channel"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.835 11.835 0 005.711 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-pink-600/15 border border-pink-500/30 text-pink-400 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-md hover:scale-105 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md hover:scale-105 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook Page"
                title="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h3 className="font-serif text-sm font-bold text-gold-muted uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-gold-muted transition-colors py-0.5">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('services')} className="hover:text-gold-muted transition-colors py-0.5">
                  Sunday Services &amp; Schedule
                </button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="hover:text-gold-muted transition-colors py-0.5">
                  About Our Church
                </button>
              </li>
              <li>
                <button onClick={() => navigate('pastors')} className="hover:text-gold-muted transition-colors py-0.5">
                  Meet Our Pastors
                </button>
              </li>
              <li>
                <button onClick={() => navigate('prayer')} className="hover:text-gold-muted transition-colors py-0.5">
                  Send Prayer Request
                </button>
              </li>
              <li>
                <button onClick={() => navigate('give')} className="hover:text-gold-muted transition-colors py-0.5">
                  Tithes &amp; Online Giving
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Address & Contact (4 Cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <h3 className="font-serif text-sm font-bold text-gold-muted uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Church Address</span>
            </h3>

            <div className="text-xs sm:text-sm text-stone-300 leading-relaxed space-y-0.5">
              <div className="font-semibold text-white">{CHURCH_INFO.name}</div>
              <div>{CHURCH_INFO.address.line1}, {CHURCH_INFO.address.line2}</div>
              <div>{CHURCH_INFO.address.line3}, {CHURCH_INFO.address.city}</div>
            </div>

            <div className="pt-2 text-xs sm:text-sm space-y-1.5">
              <a 
                href={`tel:${CHURCH_INFO.phoneRaw}`} 
                className="flex items-center gap-2 text-white hover:text-gold-muted transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-gold-muted shrink-0" />
                <span>{CHURCH_INFO.phone}</span>
              </a>
              <a 
                href={`mailto:${CHURCH_INFO.email}`} 
                className="flex items-center gap-2 text-stone-300 hover:text-gold-muted transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-gold-muted shrink-0" />
                <span className="truncate">{CHURCH_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-stone-400 text-center sm:text-left">
          <div>
            &copy; 1985&ndash;{new Date().getFullYear()} {CHURCH_INFO.name}, Guntakal. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('privacy')} className="hover:text-stone-200 transition-colors py-0.5">
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button onClick={() => navigate('terms')} className="hover:text-stone-200 transition-colors py-0.5">
              Terms of Use
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
