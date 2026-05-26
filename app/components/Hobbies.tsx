import React from 'react';

export default function Hobbies() {
  return (
    <div
      id="hobbies"
      className="flex flex-col items-center justify-center w-full px-[12%] py-[5%] mb-40 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My Hobbies</h4>
      <h2 className="text-center text-5xl font-Ovo">What I Love</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        When I&apos;m not coding, I enjoy spending my time on various hobbies
        that help me relax and recharge. Here are a few of my favorite pastimes:
      </p>

      <div className="grid grid-cols-1 gap-8 w-[60%]">
        <div className="bg-gray-100 dark:bg-darkHover/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Guitar</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m a Grade 8 acoustic guitarist and love playing a variety of
            music genres, whether it's strumming or fingerstyle. I&apos;ve
            played at a couple weddings and have even taught some lessons. I
            bought an electric recently, got to be careful or I&apos;ll get a
            noise complaint.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-darkHover/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Tennis</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I meet up with friends a couple of times a week to play tennis.
            It&apos;s something I look forward to as it keeps me active and
            allows me to socialize outside of work. I&apos;m no Federer, but
            I&apos;m making strong progress with my backhand!
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-darkHover/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Gaming</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I wish I had as much time for it as I used to, but I built a gaming
            PC last year and still enjoy playing games when I can. GTA 6 is on
            the horizon, and like the rest of the world, I&apos;m ready to lose
            a couple nights of sleep.
          </p>
        </div>
      </div>
    </div>
  );
}
