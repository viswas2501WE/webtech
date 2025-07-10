'use client'
export default function Screen3() {
  const base = process.env.NEXT_PUBLIC_IMG_url; // 2024/02 folder

  return (
    <div className="absolute hidden lg:flex -z-50 inset-0 pointer-events-none overflow-hidden !hue-rotate-220">
      <img
        src={`${base}/element_62.png`}
        alt=""
        className="absolute top-[40%] right-[3%] animate-[floatc_9s_linear_infinite]"
      />
      <img
        src={`${base}/element_62.png`}
        alt=""
        className="absolute top-0 -left-[1%] animate-[movex_7s_ease-in-out_infinite]"
      />
      <img
        src={`${base}/element_63.png`}
        alt=""
        className="absolute top-[6%] right-0"
      />
      <img
        src={`${base}/element_63.png`}
        alt=""
        className="absolute top-[20%] left-[5%] animate-[floatca_10s_linear_infinite]"
      />

      {/* Keyframes */}
      <style jsx>{`
        @keyframes movex {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(5vh); }
        }

        @keyframes floatc {
          0%   { transform: translate(0%, 0%) rotate(0deg); }
          20%  { transform: translate(250%, 60%)  rotate(35deg); }
          40%  { transform: translate(172%, 309%) rotate(75deg); }
          60%  { transform: translate(-16%, 380%) rotate(120deg); }
          80%  { transform: translate(-250%, 200%) rotate(165deg); }
          100% { transform: translate(0%, 0%)   rotate(360deg); }
        }

        @keyframes floatca {
          0%   { transform: translate(0%, 0%) rotate(0deg); }
          20%  { transform: translate(100%, 40%)  rotate(35deg); }
          40%  { transform: translate(45%, 75%)   rotate(75deg); }
          60%  { transform: translate(-16%, 160%) rotate(120deg); }
          80%  { transform: translate(-80%, 60%)  rotate(165deg); }
          100% { transform: translate(0%, 0%)     rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
