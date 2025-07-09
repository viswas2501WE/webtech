'use client';

import Image from 'next/image';

export default function Circle({ img1 , img2 = '', img3 = '', img4 = '' }) {
  const rotatingSrc = `${process.env.NEXT_PUBLIC_IMG_url3}/element_47.png`;
console.log(img1 , img2 , img3 , img4 );

  return (
    <div className="relative hidden xl:flex max-w-[100vw] -top-[6vh] z-50 ">
      {/* rotating accent graphic */}
      {rotatingSrc && (
        <Image
          src={rotatingSrc}
          alt="Rotating Element"
          width={1100}
          height={1100}
          className="-left-[5%] top-[2%] relative animate-[rotateSpin1_10s_linear_infinite]"
          priority
        />
      )}

      {img1 && (
        <Image
          src={img1}
          alt=""
          width={250}
          height={250}
          className="z-50 h-[30%] w-[30%] rounded-full absolute top-[23vh] left-[25vh] object-cover"
        />
      )}
      {img2 && (
        <Image
          src={img2}
          alt=""
          width={180}
          height={180}
          className="z-50 h-[20%] w-[20%] rounded-full absolute top-[75vh] left-[20vh] object-cover"
        />
      )}
      {img3 && (
        <Image
          src={img3}
          alt=""
          width={220}
          height={220}
          className="z-50 h-[25%] w-[25%] rounded-full absolute top-[60vh] left-[60vh] object-cover"
        />
      )}

      {img4 && (
        <div
          className="z-50 w-[11%] h-[11%] rounded-full absolute top-[53%] left-[35%] flex justify-center items-center"
          style={{ background: 'linear-gradient(90deg, #f85c70 0%, #ff8345 100%)' }}
        >
          <Image
            src={img4}
            alt=""
            width={100}
            height={100}
            className="p-[3vh] invert brightness-0"
          />
        </div>
      )}

      {/* pulsing dot */}
      <div className="absolute top-[53%] left-[35%] w-[11%] h-[11%]">
        <div className="absolute inset-0 rounded-full bg-red-500 opacity-100 animate-ping" />
        <div className="relative w-full h-full rounded-full bg-[#FF4444] z-10" />
      </div>

      <style jsx>{`
        @keyframes rotateSpin1 {
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
