import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GivingModal from './components/GivingModal';
import PrayerModal from './components/PrayerModal';
import VideoPlayerModal from './components/VideoPlayerModal';
import LightboxModal from './components/LightboxModal';

// Views
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import StoryView from './views/StoryView';
import PastorsView from './views/PastorsView';
import BeliefsView from './views/BeliefsView';
import ServicesView from './views/ServicesView';
import MinistriesView from './views/MinistriesView';
import MediaView from './views/MediaView';
import GiveView from './views/GiveView';
import PrayerView from './views/PrayerView';
import ContactSocialView from './views/ContactSocialView';
import PrivacyView from './views/PrivacyView';
import TermsView from './views/TermsView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  // Modals
  const [isGivingModalOpen, setIsGivingModalOpen] = useState(false);
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    photos: [],
    index: 0
  });

  // Handle browser back/forward and initial URL hash routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash) {
        if (hash.startsWith('ministry-')) {
          setSelectedMinistry(hash.replace('ministry-', ''));
          setCurrentView('ministries');
        } else if (['home', 'about', 'story', 'pastors', 'beliefs', 'services', 'ministries', 'media', 'give', 'prayer', 'social', 'privacy', 'terms'].includes(hash)) {
          setCurrentView(hash);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view, extra = {}) => {
    setCurrentView(view);
    if (extra?.ministryId) {
      setSelectedMinistry(extra.ministryId);
      window.location.hash = `ministry-${extra.ministryId}`;
    } else {
      window.location.hash = view === 'home' ? '' : view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVideo = (video) => {
    setActiveVideo(video);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const handleOpenLightbox = (photos, startIndex = 0) => {
    setLightbox({
      isOpen: true,
      photos,
      index: startIndex
    });
  };

  const handleCloseLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#252525] flex flex-col font-sans selection:bg-[#D69B36] selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={handleNavigate}
        onNavigate={handleNavigate}
        openGivingModal={() => setIsGivingModalOpen(true)}
        onOpenGiving={() => setIsGivingModalOpen(true)}
        openPrayerModal={() => setIsPrayerModalOpen(true)}
        onOpenPrayer={() => setIsPrayerModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            setCurrentView={handleNavigate}
            onOpenGiving={() => setIsGivingModalOpen(true)}
            openGivingModal={() => setIsGivingModalOpen(true)}
            onOpenPrayer={() => setIsPrayerModalOpen(true)}
            openPrayerModal={() => setIsPrayerModalOpen(true)}
            onOpenVideo={handleOpenVideo}
            openVideoModal={handleOpenVideo}
            onOpenLightbox={handleOpenLightbox}
            openLightbox={handleOpenLightbox}
          />
        )}

        {currentView === 'about' && (
          <AboutView 
            onNavigate={handleNavigate} 
            setCurrentView={handleNavigate} 
          />
        )}

        {currentView === 'story' && (
          <StoryView
            onNavigate={handleNavigate}
            setCurrentView={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
            openLightbox={(idx) => handleOpenLightbox(null, idx)}
          />
        )}

        {currentView === 'pastors' && (
          <PastorsView
            onNavigate={handleNavigate}
            setCurrentView={handleNavigate}
            onOpenPrayer={() => setIsPrayerModalOpen(true)}
            openPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        )}

        {currentView === 'beliefs' && (
          <BeliefsView 
            onNavigate={handleNavigate} 
            setCurrentView={handleNavigate} 
          />
        )}

        {currentView === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            setCurrentView={handleNavigate}
            onOpenPrayer={() => setIsPrayerModalOpen(true)}
            openPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        )}

        {currentView === 'ministries' && (
          <MinistriesView
            onNavigate={handleNavigate}
            setCurrentView={handleNavigate}
            onOpenPrayer={() => setIsPrayerModalOpen(true)}
            openPrayerModal={() => setIsPrayerModalOpen(true)}
            initialMinistryId={selectedMinistry}
          />
        )}

        {currentView === 'media' && (
          <MediaView
            onNavigate={handleNavigate}
            setCurrentView={handleNavigate}
            onOpenVideo={handleOpenVideo}
            openVideoModal={handleOpenVideo}
            onOpenLightbox={handleOpenLightbox}
            openLightbox={(idx) => handleOpenLightbox(null, idx)}
          />
        )}

        {currentView === 'give' && (
          <GiveView
            onNavigate={handleNavigate}
            setCurrentView={handleNavigate}
            onOpenPrayer={() => setIsPrayerModalOpen(true)}
            openPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        )}

        {currentView === 'prayer' && (
          <PrayerView 
            onNavigate={handleNavigate} 
            setCurrentView={handleNavigate} 
          />
        )}

        {currentView === 'social' && (
          <ContactSocialView
            onNavigate={handleNavigate}
            setCurrentView={handleNavigate}
            onOpenPrayer={() => setIsPrayerModalOpen(true)}
            openPrayerModal={() => setIsPrayerModalOpen(true)}
            onOpenGiving={() => setIsGivingModalOpen(true)}
            openGivingModal={() => setIsGivingModalOpen(true)}
          />
        )}

        {currentView === 'privacy' && (
          <PrivacyView 
            onNavigate={handleNavigate} 
            setCurrentView={handleNavigate} 
          />
        )}

        {currentView === 'terms' && (
          <TermsView 
            onNavigate={handleNavigate} 
            setCurrentView={handleNavigate} 
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        currentView={currentView}
        setCurrentView={handleNavigate}
        onNavigate={handleNavigate}
        onOpenGiving={() => setIsGivingModalOpen(true)}
        openGivingModal={() => setIsGivingModalOpen(true)}
        onOpenPrayer={() => setIsPrayerModalOpen(true)}
        openPrayerModal={() => setIsPrayerModalOpen(true)}
      />

      {/* Interactive Global Modals */}
      <GivingModal
        isOpen={isGivingModalOpen}
        onClose={() => setIsGivingModalOpen(false)}
      />

      <PrayerModal
        isOpen={isPrayerModalOpen}
        onClose={() => setIsPrayerModalOpen(false)}
      />

      <VideoPlayerModal
        video={activeVideo}
        onClose={handleCloseVideo}
      />

      <LightboxModal
        isOpen={lightbox.isOpen}
        photos={lightbox.photos}
        currentIndex={lightbox.index}
        onClose={handleCloseLightbox}
        onIndexChange={(idx) => setLightbox(prev => ({ ...prev, index: idx }))}
      />
    </div>
  );
}
