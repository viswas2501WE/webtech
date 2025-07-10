'use client'
export default function Screen2() {
  const base = process.env.NEXT_PUBLIC_IMG_url;

  return (
    <div className="absolute hidden lg:flex -z-50 inset-0 pointer-events-none !hue-rotate-220">
      <img src={`${base}/element_3.png`} alt="" className="absolute top-[0%] left-[5%] animate-[scaleaa_12s_ease-in-out_infinite] origin-left" />
      <img src={`${base}/element_17.png`} alt="" className="absolute top-[2%] left-[35%] animate-[moveXScale_7s_ease-in-out_infinite]" />
      <img src={`${base}/element_16.png`} alt="" className="absolute bottom-[15%] left-[7%] animate-[movey_8s_ease-in-out_infinite]" />
      <img src={`${base}/element_7.png`} alt="" className="absolute top-[8%] left-[38%] animate-[rotateSpin_10s_linear_infinite]" style={{ transformOrigin: "40% 50%" }} />
      <img src={`${base}/element_15.png`} alt="" className="absolute top-[0%] -left-[13%]" />
      <img src={`${base}/element_19.png`} alt="" className="absolute top-[30%] left-[43%] animate-[floata_8s_linear_infinite]" />
      <img src={`${base}/element_12.png`} alt="" className="absolute top-[3%] right-[5%]" />
      <img src={`${base}/element_18.png`} alt="" className="absolute top-[45%] left-[42%] animate-[floatb_7s_linear_infinite]" />

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes scaleaa {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.7); }
        }

        @keyframes rotateSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes floata {
          0%   { transform: translate(0%, 0%) rotate(0deg); }
          20%  { transform: translate(250%, 60%) rotate(35deg); }
          40%  { transform: translate(172%, 309%) rotate(75deg); }
          60%  { transform: translate(-16%, 380%) rotate(120deg); }
          80%  { transform: translate(-250%, 200%) rotate(165deg); }
          100% { transform: translate(0%, 0%) rotate(360deg); }
        }

        @keyframes floatb {
          0%   { transform: translate(0%, 0%) rotate(0deg); }
          20%  { transform: translate(100%, 20%) rotate(35deg); }
          40%  { transform: translate(45%, 70%) rotate(75deg); }
          60%  { transform: translate(-4%, 150%) rotate(120deg); }
          80%  { transform: translate(-60%, 60%) rotate(165deg); }
          100% { transform: translate(0%, 0%) rotate(360deg); }
        }

        @keyframes moveXScale {
          0%, 100% { transform: translateX(0) scale(1); }
          50%      { transform: translateX(5vh) scale(1.2); }
        }

        @keyframes movey {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(7vh); }
        }
      `}</style>
    </div>
  );
}
