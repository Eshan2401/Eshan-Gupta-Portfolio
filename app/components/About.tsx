import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

type AboutProps = {
  isDarkMode: boolean;
};

export default function About({ isDarkMode }: AboutProps) {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center w-full px-[12%] py-[5%] 2xl:px-[25%] scroll-mt-20"
    >
      <h4 className="mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an ISTQB-certified QA Automation Engineer with commercial
            experience in manual and automated testing across web applications
            and APIs. I specialise in Playwright automation, API testing with
            Postman, and ensuring software quality through structured test
            design, regression testing, and CI/CD integration. I have experience
            validating REST APIs, identifying edge cases, and managing defects
            using Jira within Agile teams. I also work with Dockerised
            environments and GitHub Actions to support reliable and repeatable
            testing workflows. I am now seeking an entry-level QA or SDET role
            where I can apply my automation skills to help deliver reliable,
            high-quality software.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  className="w-7 mt-3"
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools I use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
