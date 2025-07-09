'use client';

const Bullet = ({ title = 'Default Title', bulletPoints = [] }) => {
  return (
    <div className="flex flex-col mb-[5vh]" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Title */}
      <h1 className="text-4xl md:text-[4.5vh] uppercase font-[600] mb-[3vh]" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {title}
      </h1>

      {/* Bullet Points Section */}
      <div className="space-y-4">
        {bulletPoints.length > 0 ? (
          bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start">
              {/* Custom bullet animation */}
              <div className="flex justify-center items-center mr-[1.5%] h-5 w-5 md:h-6 md:w-6 flex-shrink-0 relative">
                <span className="absolute h-3.5 w-3.5 bg-[#FF3147]"></span>
                <span className="absolute h-2.5 w-2.5 bg-white"></span>
                <span className="absolute h-1.5 w-1.5 bg-[#FF3147]"></span>
              </div>
              <div className="text-gray-600 font-[500]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {point.text}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic">No bullet points to display.</p>
        )}
      </div>
    </div>
  );
};

export default Bullet;
