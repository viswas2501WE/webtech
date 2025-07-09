'use client';
import { useEffect, useRef, useState } from 'react';

const hellos = [
  { lang: 'English', msg1: 'Hello' },
  { lang: 'Spanish', msg1: '¡Hola' },
  { lang: 'French', msg1: 'Bonjour' },
  { lang: 'Hindi', msg1: 'नमस्ते' },
  { lang: 'Gujarati', msg1: 'નમસ્તે' },
  { lang: 'Portuguese', msg1: 'Olá' },
  { lang: 'German', msg1: 'Hallo' },
];

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function GreetingRotator() {
  const [index, setIndex] = useState(0);
  const [showFirst, setShowFirst] = useState(true);
  const shuffled = useRef(shuffleArray(hellos));

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
      setIndex((prev) => (prev + 1) % shuffled.current.length);
    }, 2000); // 2s fade in/out + 2s delay

    return () => clearInterval(interval);
  }, []);

  const boxClasses =
    'absolute font-mono w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 transition-opacity duration-[2000ms]';

  
  return (
    <div
      className="relative"
      
    >
      <style jsx global>{`
        @keyframes bgAnim {
          0% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>

      {/* Box 1 */}
      <div
        className={`${boxClasses} ${
          showFirst ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light opacity-80">
          {shuffled.current[index]?.msg1}
        </p>
      </div>

      {/* Box 2 */}
      <div
        className={`${boxClasses} ${
          !showFirst ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light opacity-80">
          {shuffled.current[(index + 1) % shuffled.current.length]?.msg1}
        </p>
      </div>
    </div>
  );
}
