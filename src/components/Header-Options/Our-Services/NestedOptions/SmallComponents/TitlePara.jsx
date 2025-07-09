// app/components/TitlePara.jsx (or wherever you keep components in your app/ directory)

'use client'; // Optional but recommended if you plan to use state/effects later

const TitlePara = ({ title = '' , para = ''  }) => (
  <div className="mb-[5vh] relative">
    <span className="block absolute w-[6vh] h-[6vh] rounded-full bg-[#ceefff] -z-50 -top-[0.6vh] -left-[1.5vh]" />
    <h2
      className="text-4xl md:text-[4.5vh] uppercase font-[600] mb-[3vh]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {title}
    </h2>
    <div
      className="text-gray-600 font-[500]"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {para}
    </div>
  </div>
);

export default TitlePara;
