'use client';

import { FaCheck } from "react-icons/fa";

const BulletCheck = ({ title = "", features = [] }) => {
  if (!features || features.length === 0) return null;

  const numColumns = 2;
  const itemsPerColumn = Math.ceil(features.length / numColumns);

  const column1Features = features.slice(0, itemsPerColumn);
  const column2Features = features.slice(itemsPerColumn);

  return (
    <div className="mb-[5vh] relative py-[2vh] text-gray-900" style={{ fontFamily: "Roboto, sans-serif" }}>
      {title && (
        <>
          <span className="block absolute w-[6vh] h-[6vh] rounded-full bg-[#ffe3e5] -z-50 top-[1.2vh] -left-[1.5vh]" />
          <h1 className="text-4xl md:text-[4.5vh] uppercase font-[600] mb-[7vh]" style={{ fontFamily: "Poppins, sans-serif" }}>
            {title}
          </h1>
        </>
      )}

      <div className="relative flex">
        {/* Vertical red bar */}
        <div className="absolute left-0 -top-[4vh] -bottom-[4vh] w-2 bg-red-500 my-1"></div>

        {/* Feature columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pl-8 w-full">
          <ul className="space-y-4">
            {column1Features.map((feature, index) => (
              <li
                key={`col1-${index}`}
                className="flex items-center text-gray-600 font-[500]"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                <span className="text-red-500 mr-3 text-sm border-1 rounded-full p-[2.5%] leading-none">
                  <FaCheck />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {column2Features.length > 0 && (
            <ul className="space-y-4">
              {column2Features.map((feature, index) => (
                <li
                  key={`col2-${index}`}
                  className="flex items-center text-gray-600 font-[500]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  <span className="text-red-500 mr-3 text-sm border-1 rounded-full p-[2.5%] leading-none">
                    <FaCheck />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BulletCheck;
