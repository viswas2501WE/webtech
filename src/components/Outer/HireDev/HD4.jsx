'use client';                        // ⬅️ required: uses framer-motion on the client

import { motion } from 'framer-motion';
import Image from 'next/image';      // ⬅️ optimised images

const stepsData = [
  {
    number: '1.',
    description: 'Post your requirement',
    image: '/Local/great-team.png',
  },
  {
    number: '2.',
    description: 'Discuss project details with our Project Manager',
    image: '/Local/safe-sequre.png',
  },
  {
    number: '3.',
    description: 'Select timeline and finalise your budget',
    image: '/Local/online-support.png',
  },
  {
    number: '4.',
    description: 'Development begins!',
    image: '/Local/chatting.png',
  },
];

// Animation preset (unchanged)
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: index * 0.2, ease: 'easeInOut' },
  }),
};

function HD4() {
  return (
    <div
      className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-[600]"
      style={{
        background: 'linear-gradient(90deg, #1A96D5 0%, #242D65 100%)',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h3
          className="text-white text-sm font-[500] uppercase tracking-wide"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Seamless Connection
        </h3>
        <h2 className="mt-2 text-3xl text-white sm:text-5xl">
          Steps to Engage
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-lg p-6 flex items-center flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full flex mr-6 items-center justify-center">
              {/* ⬇️ Only change: next/image */}
              <Image
                src={step.image}
                alt={step.description}
                width={64}
                height={64}
                className="w-full h-full p-2 object-contain hue-rotate-220"
              />
            </div>

            <div className="flex-grow">
              <span className="text-2xl text-gray-800 mr-2">
                {step.number}
              </span>
              <div className="text-2xl text-gray-700 inline">
                {step.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HD4;
