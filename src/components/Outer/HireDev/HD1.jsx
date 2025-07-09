'use client'
import Screen2 from '@/components/Common/Animations/Screen2'; // ← adjust path if needed

export default function HD1() {
  // Replace Vite env variable with Next’s
  const IMG = process.env.NEXT_PUBLIC_IMG_url;

  return (
    <div
      className="relative flex flex-col lg:flex-row items-center py-[5vh] md:py-[10vh] px-0 md:px-[4%] lg-[8%] xl:px-[13%]"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <Screen2 />

      {/* ────────── image column ────────── */}
      <div className="w-full lg:w-[50%] mb-8 md:mb-0">
        <img
          src={`${IMG}/hireing-developers-1536x1278.png`}
          alt="Hiring developers"
          className="w-full h-auto"
        />
      </div>

      {/* ────────── text column ────────── */}
      <div className="w-full lg:w-[50%] px-4 text-left">
        <h1 className="text-[#1A96D5] font-[500] text-[2vh] md:text-[2.5vh]">HIRE NOW</h1>
        <span className="text-[#1A96D5] border-t-2 border-dotted block w-[15%] md:w-[7%]" />
        <h1
          className="font-[600] text-[4vh] md:text-[5.5vh] py-[1vh]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Looking to Hire Developers But Not Sure How to Go About it?
        </h1>

        <div className="font-[400] text-gray-700 text-[1.6vh] md:text-base">
          <p className="pb-[4%]">
            Companies worldwide seek to hire developers from this industry leader due to its
            strong emphasis on research and development. India boasts a vast pool of skilled
            developers renowned for delivering top-notch services at competitive rates. These
            developers exhibit proficiency across a wide spectrum of programming languages and
            frameworks, showcasing their adaptability to diverse projects.
          </p>
          <p className="pb-[4%]">Webtech Evolution, an IT management company, stands ready to meet your needs!</p>
          <p className="pb-[4%]">
            A key advantage of engaging Indian developers lies in their cost-effectiveness.
            Their services often come at notably lower rates compared to counterparts in other
            countries, making it an appealing choice for businesses operating on tight budgets.
            Additionally, Indian designers are perceived for their commitment and work ethic,
            guaranteeing timely project delivery and excellent results.
          </p>
          <p className="pb-[4%]">
            Notwithstanding, it's vital to join forces with a reputable and prepared vendor
            when hiring designers from India to ensure superior service. When approached
            correctly, this approach can grant access to top-tier talent and budget-friendly
            solutions for your business requirements.
          </p>
          <p className="pb-[4%]">
            Whether you're a startup exploring new web or app horizons or an established brand
            aiming for broader impact, Webtech Evolution eagerly awaits your innovative ideas. Our
            success-oriented mindset and proven methodologies ensure the effective completion
            of your projects.
          </p>
        </div>
      </div>
    </div>
  );
}