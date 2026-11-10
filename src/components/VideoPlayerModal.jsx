import React from 'react';
import { X, Youtube, Share2 } from 'lucide-react';

export default function VideoPlayerModal({ video, onClose }) {
  if (!video) return null;

  const videoId = video.youtubeId || video.id;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-black rounded-md shadow-elevated border border-white/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-3 sm:p-3.5 bg-[#103546] border-b border-white/10 text-white">
          <div className="flex items-center gap-2.5 overflow-hidden pr-3">
            <span className="p-1 rounded bg-red-600 text-white shrink-0">
              <Youtube className="w-4 h-4 fill-white" />
            </span>
            <div className="overflow-hidden">
              <h3 className="text-xs sm:text-sm font-serif font-bold text-white truncate">{video.title}</h3>
              <p className="text-[11px] text-stone-300 truncate">{video.speaker || 'Agape A.G. Church Guntakal'}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors shrink-0 flex items-center justify-center touch-manipulation"
            aria-label="Close Video Player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
