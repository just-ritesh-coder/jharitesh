import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const startAudio = async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3; // Default volume
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay prevented by browser. Waiting for first interaction...");
          
          // Force play on the very first user interaction if autoplay was blocked
          const playOnInteraction = async () => {
            if (audioRef.current) {
              try {
                await audioRef.current.play();
                setIsPlaying(true);
              } catch (e) {
                console.error("Still blocked:", e);
              }
            }
            // Remove listeners after first trigger
            ['click', 'scroll', 'mousemove', 'touchstart'].forEach(event => {
              document.removeEventListener(event, playOnInteraction);
            });
          };

          ['click', 'scroll', 'mousemove', 'touchstart'].forEach(event => {
            document.addEventListener(event, playOnInteraction, { once: true });
          });
        }
      }
    };

    startAudio();
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[99] pointer-events-auto">
      <audio ref={audioRef} loop>
        <source src="/WhatsApp%20Audio%202026-07-18%20at%2012.30.25%20PM.mpeg" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <button 
        onClick={togglePlay}
        className={`p-4 rounded-full shadow-lg transition-transform duration-300 flex items-center justify-center group hover:scale-110 ${isPlaying ? 'bg-racing-red/10 border border-racing-red/50 shadow-[0_0_15px_rgba(225,6,0,0.3)]' : 'bg-[#1a1a1a] border border-[#333] shadow-black/50'}`}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-racing-red">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-white transition-colors">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
