import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function LightboxModal({ isOpen, photos, currentIndex, onClose, onNavigate, onIndexChange }) {
  if (isOpen === false || currentIndex === null || !photos || !photos.length) return null;

  const handleIndexChange = onIndexChange || onNavigate;
  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && handleIndexChange) handleIndexChange((currentIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft' && handleIndexChange) handleIndexChange((currentIndex - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, photos, onClose, handleIndexChange]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 backdrop-blur-md select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header */}
      <div 
        className="absolute top-0 inset-x-0 p-3 sm:p-5 flex items-center justify-between text-white bg-gradient-to-b from-black/80 to-transparent z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 overflow-hidden pr-3">
          <ImageIcon className="w-4 h-4 text-amber-400 shrink-0" />
          <div className="truncate">
            <span className="font-bold text-xs sm:text-sm md:text-base text-white block truncate">
              {currentPhoto.title || `Photo ${currentIndex + 1}`}
            </span>
            <span className="text-[11px] text-slate-400 block truncate">
              {currentIndex + 1} of {photos.length} &bull; Agape A.G Church Archive
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center shrink-0 touch-manipulation"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center px-10 sm:px-14"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentPhoto.src}
          alt={currentPhoto.caption || 'Church photo'}
          className="max-w-full max-h-[72vh] sm:max-h-[80vh] object-contain rounded-md shadow-2xl"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleIndexChange && handleIndexChange((currentIndex - 1 + photos.length) % photos.length);
        }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors flex items-center justify-center touch-manipulation border border-white/20 z-20"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleIndexChange && handleIndexChange((currentIndex + 1) % photos.length);
        }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors flex items-center justify-center touch-manipulation border border-white/20 z-20"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption Bar */}
      <div 
        className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-center bg-gradient-to-t from-black/80 to-transparent text-xs sm:text-sm text-slate-300 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {currentPhoto.caption || 'Agape A.G Church Guntakal'}
      </div>
    </div>
  );
}
