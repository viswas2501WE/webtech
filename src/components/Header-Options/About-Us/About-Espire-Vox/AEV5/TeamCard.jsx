'use client';                               // required → uses onClick/onError handlers

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function TeamCard({ member }) {
  const { image, name, position, bio, social } = member;

  return (
    <div
      className="
        bg-[#F8F8F8] rounded-lg overflow-hidden relative
        transform transition-all duration-300 hover:bg-gray-700 group
        flex flex-col items-center text-center p-6 mx-4 mt-4
        max-w-xs w-full sm:w-64 md:w-72 lg:w-80
      "
    >
      {/* decorative SVGs – unchanged */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54.863"
        height="150.996"
        viewBox="0 0 54.863 150.996"
        className="absolute left-0 top-[30%]"
      >
        <g data-name="Group 2156" transform="translate(-366 -4954.004)">
                    <g data-name="Intersection 3" transform="translate(366 4988.004)" fill="none">
                        <path d="M0,0,51.826,69.873c5.845,7.88,3,18.26-6.353,23.184L0,117Z" stroke="none"></path>
                        <path d="M 1.999992370605469 6.053695678710938 L 1.999992370605469 113.6825256347656 L 44.54080963134766 91.28759765625 C 46.69364166259766 90.15421295166016 48.49224472045898 88.69570159912109 49.88666152954102 86.95256805419922 C 51.21087646484375 85.29721832275391 52.10809326171875 83.46681213378906 52.55339431762695 81.51221466064453 C 53.37396240234375 77.91051483154297 52.54505920410156 74.20023345947266 50.21939468383789 71.0648193359375 L 1.999992370605469 6.053695678710938 M -7.62939453125e-06 0 L 51.82575988769531 69.87335205078125 C 57.67079544067383 77.75347900390625 54.82599258422852 88.13304901123047 45.47251129150391 93.05733489990234 L -7.62939453125e-06 116.9955978393555 L -7.62939453125e-06 0 Z" stroke="none" fill="#fff"></path>
                    </g>
                    <g data-name="Intersection 4" transform="translate(366 4954.004)" fill="none">
                        <path d="M0,0,51.826,69.873c5.845,7.88,3,18.26-6.353,23.184L0,117Z" stroke="none"></path>
                        <path d="M 1.999992370605469 6.053695678710938 L 1.999992370605469 113.6825256347656 L 44.54080963134766 91.28759765625 C 46.69364166259766 90.15421295166016 48.49224472045898 88.69570159912109 49.88666152954102 86.95256805419922 C 51.21087646484375 85.29721832275391 52.10809326171875 83.46681213378906 52.55339431762695 81.51221466064453 C 53.37396240234375 77.91051483154297 52.54505920410156 74.20023345947266 50.21939468383789 71.0648193359375 L 1.999992370605469 6.053695678710938 M -7.62939453125e-06 0 L 51.82575988769531 69.87335205078125 C 57.67079544067383 77.75347900390625 54.82599258422852 88.13304901123047 45.47251129150391 93.05733489990234 L -7.62939453125e-06 116.9955978393555 L -7.62939453125e-06 0 Z" stroke="none" fill="#fff"></path>
                    </g>
                </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54.863"
        height="134.501"
        viewBox="0 0 54.863 134.501"
        className="absolute -right-1 top-[10%]"
      >
       <defs>
                    <linearGradient id="linear-gradient-0" x1="0.411" y1="0.312" x2="0" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ff8345"></stop>
                        <stop offset="1" stopColor="#f85c70"></stop>
                    </linearGradient>

                </defs>

                <g data-name="Group 2157" transform="translate(-594.069 -4892)">
                    <path data-name="Intersection 2" d="M0,0,43.324,65.1c4.886,7.341,2.508,17.011-5.311,21.6L0,109Z" transform="translate(644.863 5000.996) rotate(180)" fill="url(#linear-gradient-0)"></path>

                    <g data-name="Intersection 5" transform="translate(648.932 5026.502) rotate(180)" fill="none">
                        <path d="M0,0,51.826,69.873c5.845,7.88,3,18.26-6.353,23.184L0,117Z" stroke="none"></path>
                        <path d="M 1.999996185302734 6.053703308105469 L 1.999996185302734 113.6825332641602 L 44.54079437255859 91.28760528564453 C 46.69362640380859 90.15422058105469 48.49222946166992 88.69570159912109 49.88664627075195 86.95256805419922 C 51.21084594726562 85.29721832275391 52.10806274414062 83.46681976318359 52.55335998535156 81.51222229003906 C 53.37392807006836 77.9105224609375 52.54502868652344 74.20024108886719 50.2193603515625 71.0648193359375 L 1.999996185302734 6.053703308105469 M -3.814697265625e-06 0 L 51.82572937011719 69.87335205078125 C 57.67076110839844 77.75348663330078 54.82596206665039 88.133056640625 45.47249603271484 93.05733489990234 L -3.814697265625e-06 116.99560546875 L -3.814697265625e-06 0 Z" stroke="none" fill="#fff"></path>
                    </g>
                </g>
      </svg>

      {/* member photo */}
      <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-bottom px-2 overflow-hidden mb-4 shadow-md bg-[#F8F8F8]">
        <img
          src={
            image ||
            'https://placehold.co/150x150/cccccc/333333?text=Member'
          }
          alt={name}
          className="w-full h-full object-cover mt-3"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              'https://placehold.co/150x150/cccccc/333333?text=Member';
          }}
        />
      </div>

      {/* name / role */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1 font-poppins group-hover:text-white">
        {name}
      </h3>
      <div
        className="text-sm md:text-base text-gray-600 font-medium mb-3 group-hover:text-white"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {position}
      </div>

      {/* social icons */}
      <div className="flex justify-center space-x-4 mb-4">
        {social.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600 group-hover:text-white transition-all duration-400 transform hover:scale-110"
            aria-label={`Instagram profile of ${name}`}
          >
            <FaInstagram size={24} />
          </a>
        )}
        {social.facebook && (
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 group-hover:text-white transition-all duration-400 transform hover:scale-110"
            aria-label={`Facebook profile of ${name}`}
          >
            <FaFacebookF size={24} />
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 group-hover:text-white transition-all duration-400 transform hover:scale-110"
            aria-label={`Twitter profile of ${name}`}
          >
            <FaTwitter size={24} />
          </a>
        )}
      </div>

      {/* bio */}
      <div className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
        {bio}
      </div>
    </div>
  );
}
