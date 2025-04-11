import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

type FooterProps = {
  isDarkMode: boolean;
};

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          eshan07gupta@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Eshan Gupta. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Eshan2401/Portfolio">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eshan-gupta-a53205268?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDLspgtKsSPygefXfpcHm5w%3D%3D"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
