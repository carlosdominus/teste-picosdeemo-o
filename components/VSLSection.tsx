import React, { useEffect, useRef, memo } from 'react';

export const VSLSection = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ID of the script tag
    const scriptId = "vturb-script-loader";
    const videoId = "vid-693a46ace891e679e7727fdd";
    
    // Function to inject script
    const loadScript = () => {
      if (document.getElementById(scriptId)) return;
      
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/693a46ace891e679e7727fdd/v4/player.js";
      script.id = scriptId;
      script.async = true;
      document.head.appendChild(script);
    };

    // Load script immediately
    loadScript();

    // Check if player initialized correctly after a short delay, if not, try to re-trigger
    const checkInterval = setInterval(() => {
      const playerContainer = document.getElementById(videoId);
      if (playerContainer && playerContainer.innerHTML === "") {
        // If container is empty, something went wrong, ensure script is present
        loadScript();
      }
    }, 1000);

    return () => clearInterval(checkInterval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-0 md:px-4">
      <div className="framer-1hum640 w-full" data-framer-name="Container">
        <div className="ssr-variant w-full">
           <div 
            id="vid-693a46ace891e679e7727fdd" 
            style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
          >
            <img 
              id="thumb-693a46ace891e679e7727fdd" 
              src="https://images.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/693a46ace891e679e7727fdd/thumbnail.jpg" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              alt="Video Thumbnail"
            />
            <div 
              id="backdrop-693a46ace891e679e7727fdd" 
              style={{ position: 'absolute', top: 0, width: '100%', height: '100%', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
});

VSLSection.displayName = 'VSLSection';