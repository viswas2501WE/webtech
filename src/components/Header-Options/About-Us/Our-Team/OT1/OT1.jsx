import OT1Common from '@/components/Header-Options/About-Us/Our-Team/OT1/OT1Common';   // ← adjust path to match your tree

const IMG  = process.env.NEXT_PUBLIC_IMG_url;
const IMG1 = process.env.NEXT_PUBLIC_IMG_url1;
const IMG3 = process.env.NEXT_PUBLIC_IMG_url3;   

const teamMembers = [
  { id: 1,  image: `${IMG}/01-551x783.png`,              name: 'Mithil Chauhan',  position: 'Founder & Technical Head' },
  { id: 2,  image: `${IMG1}/Ruchi-Chauhan-551x783.png`,  name: 'Ruchi Chauhan',   position: 'CEO' },
  { id: 3,  image: `${IMG}/16-2-551x783.png`,            name: 'Devangi Katharotiya', position: 'Sr. Web Developer' },
  { id: 4,  image: `${IMG}/12-1-551x783.png`,            name: 'Bhumika Sackarwal',  position: 'Shopify Developer' },
  { id: 5,  image: `${IMG3}/Siddhant-Patel-551x783.png`, name: 'Siddhant Patel',     position: 'Sr. Graphic Designer' },
  { id: 6,  image: `${IMG3}/Hemant-Bhadrka-551x783.png`, name: 'Hemant Bhadarka',    position: 'UI-UX Designer' },
  { id: 7,  image: `${IMG3}/Urvi-Patel-551x783.png`,     name: 'Urvi Patel',         position: 'Graphic Designer' },
  { id: 8,  image: `${IMG}/15-1-551x783.png`,            name: 'Urvashi Paliya',     position: 'SEO Digital Marketing Executive' },
  { id: 9,  image: `${IMG1}/Nilay-Shah-551x783.png`,     name: 'Nilay Shah',         position: 'CTO' },
  { id: 10, image: `${IMG3}/Maitri-Kagrana-551x783.png`, name: 'Maitri Kagrana',     position: 'HR Executive' },
  { id: 11, image: `${IMG3}/Bhargav-Godhani-551x783.png`,name: 'Bhargav Godhani',    position: 'Sr. WordPress Manager' },
  { id: 12, image: `${IMG3}/Mayur-Parmar-551x783.png`,   name: 'Mayur Parmar',       position: 'Sr. Full-Stack Manager' },
  { id: 13, image: `${IMG3}/Nancy-Joshi-551x783.png`,    name: 'Nancy Joshi',        position: 'Sr. Shopify Manager' },
  { id: 14, image: `${IMG3}/Ghanshaym-Ghadiya-551x783.png`, name: 'Ghanshaym Ghadiya', position: 'Sr. Laravel Manager' },
  { id: 15, image: `${IMG}/13-1-551x783.png`,            name: 'Asha Thakor',        position: 'BDE' },
  { id: 16, image: `${IMG}/14-551x783.png`,              name: 'Ruhi Kotia',         position: 'BDE' },
];

export default function OT1() {
  return (
    <div>
      <h1
        className="px-[14.5%] font-[600] text-[3vh] md:text-[6vh] pt-4 md:pt-8 lg:pt-12"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Our Dynamic Team of Web Experts...
      </h1>

      <div
        className="h-full flex flex-col items-center py-4 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <OT1Common key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}