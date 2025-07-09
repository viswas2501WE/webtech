import AEV_1 from "@/components/Header-Options/About-Us/About-Espire-Vox/AEV4/AEV_4.1";

export default function AEV4() {
  /** In Vite you used import.meta.env.VITE_IMG_url.
      In Next .js you read from process.env.NEXT_PUBLIC_IMG_url.               */
  const IMG = process.env.NEXT_PUBLIC_IMG_url;

  return (
    <div
      className="flex relative flex-col md:flex-row justify-between px-4 md:px-10 lg:px-24 xl:px-46 py-8 md:py-0"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      {/* ────────── LEFT SIDE ────────── */}
      <div className="w-full md:w-[50%] pr-0 md:pr-8 mb-8 md:mb-0">
        <AEV_1 />

        <h1 className="font-[500] text-[#1A96D5] text-base md:text-xl">
          COMMITTED TO EXCELLENCE
        </h1>

        <h1
          className="font-[600] text-3xl md:text-5xl py-2 md:py-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Solutions Tailored to Your Business Needs!
        </h1>

        <div className="font-[400] leading-relaxed text-sm md:text-base">
          We blend skill in business spaces with mechanical capability and
          laid out systems, ensuring Top IT Companies In Ahmedabad productive
          way. This approach plans to upgrade your upper hand and improve
          productivity.
        </div>
      </div>

      {/* ────────── RIGHT SIDE ────────── */}
      <div className="w-full relative md:w-[50%] flex justify-center items-start">
        <div className="relative w-full">
          {/* decorative blob */}
          <img
            src={`${IMG}/element_78.png`}
            alt=""
            className="-z-10 absolute -right-[12%] -top-[12%] hidden xl:flex"
          />

          {/* main photo */}
          <img
            src={`${IMG}/about-img_10.jpg`}
            alt=""
            className="h-auto w-full object-cover"
          />

          {/* experience card */}
          <div className="flex bg-white justify-center items-center absolute bottom-[10%] left-0 w-10/12 md:w-8/12 lg:w-7/12 h-24 md:h-32 lg:h-40 font-[700] text-lg md:text-2xl p-4 md:p-6 shadow-lg">
            <img
              src={`${IMG}/experience.svg`}
              alt=""
              className="h-12 w-12 md:h-16 md:w-16 mr-4"
            />
            <p className="flex-1">10+ Years Of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}