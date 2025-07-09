import TeamCard from '@/components/Header-Options/About-Us/About-Espire-Vox/AEV5/TeamCard';   // ← adjust if your path differs

export default function AEV5() {
  /* Replace Vite env vars with Next equivalents */
  const IMG  = process.env.NEXT_PUBLIC_IMG_url;
  const IMG1 = process.env.NEXT_PUBLIC_IMG_url1;

  const teamMembers = [
    {
      id: 1,
      image: `${IMG}/01-551x783.png`,
      name: 'Mithil Chauhan',
      position: 'Founder & Technical Head',
      bio: 'Mithil leads our technical vision, blending deep industry knowledge with innovative solutions. His expertise in full-stack development and strategic planning is key to driving our technological advancements and ensuring top-tier performance.',
      social: {
        instagram: 'https://www.instagram.com/janedoe',
        facebook:  'https://www.facebook.com/janedoe',
        twitter:   'https://www.twitter.com/janedoe',
      },
    },
    {
      id: 2,
      image: `${IMG1}/Ruchi-Chauhan-551x783.png`,
      name: 'Ruchi Chauhan',
      position: 'CEO',
      bio: 'Ruchi is the visionary leader at our helm, steering the company with strategic insight and a passion for innovation. Her leadership drives our growth, fosters a strong company culture, and ensures we remain focused on delivering exceptional value to our clients.',
      social: {
        instagram: 'https://www.instagram.com/johnsmith',
        facebook:  'https://www.facebook.com/johnsmith',
        twitter:   'https://www.twitter.com/johnsmith',
      },
    },
  ];

  return (
    <div className="pt-24 sm:pt-20 lg:pt-30">
      {/* ────────── Header section ────────── */}
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-10 lg:px-46 text-center lg:text-left">
        <div className="w-full lg:w-[50%] mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-[#1A96D5] font-[500] text-lg sm:text-xl lg:text-xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Webtech Evolution WAS ESTABLISHED BY
          </h1>
          <span className="text-[#1A96D5] font-[500] border-dashed border-t block w-1/3 sm:w-1/4 lg:w-[24%] mx-auto lg:mx-0 mt-2" />
          <h1 className="font-[600] text-4xl sm:text-5xl lg:text-[6vh] mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ruchi &amp; Mithil Chauhan
          </h1>
        </div>

        <div className="w-full lg:w-[50%] font-[400] text-gray-700 text-base sm:text-lg leading-relaxed lg:text-base" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Their aptitude in both business and innovation pushes Webtech Evolution’s quest for greatness. Operating with a flat organizational structure and minimal hierarchy, the environment is fast-paced and success-oriented.
        </div>
      </div>

      {/* ────────── Team cards grid ────────── */}
      <div className="h-full flex flex-col items-center py-4 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}