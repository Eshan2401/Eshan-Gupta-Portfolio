import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

type ServicesProps = {
  isDarkMode: boolean;
};

export default function Services({ isDarkMode }: ServicesProps) {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Further Education</h4>
      <h2 className="text-center text-5xl font-Ovo">My Certifications</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Whilst undertaking my degree at Brighton, I realised that out of all the
        modules I was taking, I enjoyed and took the most pride in the Computer
        Science modules. The Maths and Physics modules just didn't excite me in
        the same way. When I left University, I knew that if I wanted to switch
        career paths and pursue Software Development, I had a lot of catching up
        to do. These Certifications are all courses that I paid for and
        completed, in an effort to close the gap in knowledge between me and my
        CompSci peers.{' '}
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            {index !== serviceData.length - 1 && (
              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Show Credential{' '}
                <Image
                  src={
                    isDarkMode ? assets.right_arrow_white : assets.right_arrow
                  }
                  className="w-4"
                  alt=""
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
