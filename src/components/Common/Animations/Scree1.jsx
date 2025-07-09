// No hooks → can stay a Server Component. If you plan to add runtime JS, add "use client".

export default function Screen1() {
  /* Base WordPress path coming from .env.local */
  const base = process.env.NEXT_PUBLIC_IMG_url;     // 2024/02 folder

  return (
    <div className="absolute hidden lg:flex -z-50 inset-0 pointer-events-none hue-rotate-220">
      {/* left cluster */}
      <img
        src={`${base}/element_1.png`}
        alt=""
        className="absolute top-[25%] left-[5%] animate-[scale_12s_ease-in-out_infinite] origin-left"
      />
      <img
        src={`${base}/element_2.png`}
        alt=""
        className="absolute top-[57%] left-[1%]"
      />

      {/* center rotating ring */}
      <img
        src={`${base}/element_4.png`}
        alt=""
        className="absolute top-[23%] left-[32%] animate-[rotateSpin_10s_linear_infinite]"
        style={{ transformOrigin: '40% 50%' }}
      />
      <img
        src={`${base}/element_5.png`}
        alt=""
        className="absolute top-[19%] left-[51%]"
      />

      {/* right cluster */}
      <img
        src={`${base}/element_9.png`}
        alt=""
        className="absolute top-[22%] right-[11%] animate-[scalea_10s_ease-in-out_infinite] origin-left"
      />
      <img
        src={`${base}/element_10.png`}
        alt=""
        className="absolute top-[17%] right-[2%] animate-[scalea_10s_ease-in-out_infinite] origin-left"
      />
      <img
        src={`${base}/element_11.png`}
        alt=""
        className="absolute bottom-[25%] right-[5%]"
      />

      {/* keyframes */}
      <style jsx>{`
        @keyframes scale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.7);
          }
        }
        @keyframes scalea {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
        }
        @keyframes rotateSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
