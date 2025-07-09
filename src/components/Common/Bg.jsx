'use client';

import { useEffect, useState } from 'react';

export default function VerticalBackground({ observedHeight = 0 }) {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVh(window.innerHeight);

    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundHeight = Math.max(observedHeight, vh);

  return (
    <>
      <style>{`
        @keyframes walkUp   {
          0%{top:-200px} 10%{top:25%} 30%{top:35%} 40%{top:37%} 45%{top:40%}
          50%{top:50%} 55%{top:60%} 65%{top:70%} 85%{top:90%} 90%{top:95%} 100%{top:100%}
        }
        @keyframes walkDown {
          0%{top:100%} 10%{top:75%} 30%{top:65%} 40%{top:63%} 45%{top:60%}
          50%{top:50%} 55%{top:40%} 65%{top:30%} 85%{top:10%} 90%{top:5%} 100%{top:-200px}
        }
        .walk-bar-down { animation: walkDown 30s linear infinite; }
        .walk-bar-up   { animation: walkUp   30s linear infinite; }
      `}</style>

      <div
        className="absolute top-0 left-0 -z-50 hidden sm:flex pointer-events-none overflow-hidden w-full"
        style={{
          height: `${backgroundHeight}px`,
          minWidth: '100vw',      // Ensures full width
          backgroundColor: '#ffffff',
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex-1 relative">
            {i !== 0 && (
              <div
                className="absolute top-0 left-0 w-[1%] bg-gray-500 opacity-10"
                style={{ height: `${backgroundHeight}px` }}
              />
            )}
            <div
              className={`absolute left-0 w-[0.8%] h-40 rounded ${
                i % 2 === 0 ? 'walk-bar-down' : 'walk-bar-up'
              }`}
              style={{
                background:
                  i % 2 === 0
                    ? 'linear-gradient(to bottom, rgba(26,150,213,1) 0%, rgba(26,150,213,0) 80%)'
                    : 'linear-gradient(to top, rgba(26,150,213,1) 0%, rgba(26,150,213,0) 80%)'

              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
