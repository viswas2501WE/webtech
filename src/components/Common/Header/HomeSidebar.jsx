'use client';

import {
  FaBehance,
  FaDribbble,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';

export default function HomeSidebar() {
  return (
    <div className="px-6.5">
      <div>
        <h1 className="text-2xl text py-4 font-[600]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          About Us
        </h1>
        <p className="font-[400] text-[#4F4F4F] py-1.5" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Webtech Evolution remains as a quickly growing IT organization, devoted to conveying worldwide electronic turn of
          events and programming arrangements. Including gifted programming experts with profound area mastery, the
          organization endeavors to bestow its insight through inventive arrangements and committed administrations.
        </p>
      </div>

      <div>
        <h1 className="text-2xl pt-8 font-[600] text" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Contact Info
        </h1>

        <div className="flex justify-start pt-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <FaMapMarkerAlt className="text-[#1A96D5] text-2xl" />
          <p className="pl-3 font-[400] text-md text-[#061526]">
            4th Floor, Sadbhav Drive-in Exit Road, Thaltej, Ahmedabad-380 054 Gujarat, India
          </p>
        </div>

        <div className="flex justify-start pt-4.5 items-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <FaPhone className="text-[#1A96D5] text-md rotate-90" />
          <a href="tel:+91 96019 65456" className="pl-2 font-[400] text-md text-[#4F4F4F]">
            +91 96019 65456
          </a>
        </div>

        <div className="flex justify-start pt-4.5 items-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <FaEnvelope className="text-[#1A96D5] text-md" />
          <a href="mailto:hello@espirevox.com" className="pl-2 font-[400] text-md text-[#4F4F4F]">
            hello@espirevox.com
          </a>
        </div>
      </div>

      <div className="flex py-12 text-md w-30 justify-between">
        <a href="https://www.facebook.com/people/Espirevox/61555211339336/" target='_blank' aria-label="Facebook">
          <FaFacebookF className="cursor-pointer hover:text-[#1A96D5] hover:-translate-y-1 transition-transform duration-400" />
        </a>
        <a href="https://www.behance.net/mithilchauhan" target='_blank' aria-label="Behance">
          <FaBehance className="cursor-pointer hover:text-[#1A96D5] hover:-translate-y-1 transition-transform duration-400" />
        </a>
        <a href="https://www.linkedin.com/company/espirevox/" target='_blank' aria-label="LinkedIn">
          <FaLinkedinIn className="cursor-pointer hover:text-[#1A96D5] hover:-translate-y-1 transition-transform duration-400" />
        </a>
        <a href="https://dribbble.com/Espirevox" target='_blank' aria-label="Dribbble">
          <FaDribbble className="cursor-pointer hover:text-[#1A96D5] hover:-translate-y-1 transition-transform duration-400" />
        </a>
        <a href="https://www.instagram.com/espirevox" target='_blank' aria-label="Instagram">
          <FaInstagram className="cursor-pointer hover:text-[#1A96D5] hover:-translate-y-1 transition-transform duration-400" />
        </a>
      </div>
    </div>
  );
}
