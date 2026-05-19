import { useState, useRef, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import FloatingBackground from './components/FloatingBackground';
import LoginPage from './components/LoginPage';
import EnvelopeModal from './components/EnvelopeModal';
import HeroSection from './components/HeroSection';
import MagicSection from './components/MagicSection';
import CakeSection from './components/CakeSection';
import SweetWords from './components/SweetWords';
import GallerySection from './components/GallerySection';
import VideoSection from './components/VideoSection';
import OutroSection from './components/OutroSection';

type Stage = 'login' | 'envelope' | 'main';

export default function App() {
  const [stage, setStage] = useState<Stage>('login');
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleLogin = useCallback(() => {
    setStage('envelope');
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setMusicOn(true);
      }
    }, 300);
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setMusicOn(!musicOn);
  }, [musicOn]);

  if (stage === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg, #fff0f5 0%, #ffe4f0 30%, #fff0f5 60%, #ffd6e8 100%)' }}>

      <FloatingBackground />

      {/* Music toggle button */}
      <div className="fixed top-6 left-6 z-30">
        <button onClick={toggleMusic}
          className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 ${musicOn ? 'animate-pulse-glow' : ''}`}
          style={{ background: 'linear-gradient(135deg, #ff69b4, #ff1493)' }}>
          {musicOn ? <Volume2 size={22} className="text-white" /> : <VolumeX size={22} className="text-white" />}
        </button>
        {musicOn && (
          <span className="absolute -top-2 -right-2 text-sm animate-float-bounce" style={{ animationDelay: '0s' }}>🎵</span>
        )}
        {musicOn && (
          <span className="absolute -bottom-2 -left-2 text-xs animate-float-bounce" style={{ animationDelay: '0.5s' }}>🎶</span>
        )}
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/audio.mp4" loop preload="auto" />

      {stage === 'envelope' && (
        <EnvelopeModal onClose={() => setStage('main')} />
      )}

      {/* Page content — always rendered so it's behind the envelope modal */}
      <main>
        <HeroSection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">🌸</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <MagicSection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">💕</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <CakeSection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">✨</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <SweetWords />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">📸</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <GallerySection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">🎬</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <VideoSection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">🎀</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <OutroSection />
      </main>
    </div>
  );
}
