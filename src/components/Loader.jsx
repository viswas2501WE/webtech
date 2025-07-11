'use client';

import { useEffect, useRef } from 'react';

export default function Loader() {
  /* refs for the box and its shadow */
  const boxRef    = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    let ctx;                              // GSAP context

    (async () => {
      const { gsap } = await import('gsap');

      ctx = gsap.context(() => {
        /* ── shadow “squash” ───────────────────────────── */
        gsap.to(shadowRef.current, {
          scaleX: 1.2,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'linear',
          transformOrigin: 'center',
        });

        /* ── jumping / rotating box ────────────────────── */
        const box = boxRef.current;

        gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } })
          /* step‑by‑step recreation of the CSS keyframes (total 0.5 s) */
          .to(box, { y: 9,  rotate: 22.5,          duration: 0.125 })
          .to(box, { y: 18, rotate: 45,  scaleY: .9, borderBottomRightRadius: 40, duration: 0.125 })
          .to(box, { y: 9,  rotate: 67.5, scaleY: 1,  borderBottomRightRadius: 3,  duration: 0.125 })
          .to(box, { y: 0,  rotate: 90,             duration: 0.125 });
      });
    })();

    return () => ctx?.revert();           // clean up on unmount
  }, []);

  /* ————— markup (no <style> tag) ————— */
  return (
    <div className="relative w-12 h-12 mx-auto">
      {/* shadow (replaces ::before) */}
      <span
        ref={shadowRef}
        className="absolute left-0"
        style={{
          width: 48,
          height: 5,
          top: 60,
          background: '#1A96D550',
          borderRadius: '50%',
        }}
      />

      {/* jumping box (replaces ::after) */}
      <span
        ref={boxRef}
        className="absolute left-0 top-0 w-full h-full"
        style={{ background: '#1A96D5', borderRadius: 4 }}
      />
    </div>
  );
}
