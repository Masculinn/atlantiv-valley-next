'use client'

import React from "react";
import { useTrail, animated } from 'react-spring';
import Link from "next/link";

const Entrance = () => {
  const items = [
    { text: <p id="def">BÜYÜRKEN YANINIZDAYIZ</p>  ,delay: 200 },
  ];
  const items2 = [
    {   text: <strong> Atlantic Valley Partners</strong>, delay:200  },
    {   text: ", küresel bir" , delay:400  },
    {   text: <strong>yönetim danışmanlığı</strong>, delay:600  },
    {   text: " firmasıdır. Önde gelen işletmelerin, hükümetlerin ve kurumların ", delay:800  },
    {   text: <strong>güvenilir danışmanıyız.</strong>, delay:1000  },
  ]

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translatex(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
    delay: items.map((_, index) => index * 100),
  });

  const trail2 = useTrail(items2.length, {
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 400 },
    delay: items2.map((_, index) => index * 100),
  });
  return (
    <div className="-mt-40">
      {trail.map((style, index) => (
        <animated.header key={index} className="text-center lg:text-6xl md:text-4xl sm:text-3xl text-3xl text-black" style={style}>
          {items[index].text}
        </animated.header>
      ))}
    <main
      id="section_font"
      className="text-gray-600 mt-5 lg:text-lg md:text-lg sm:text-sm text-xs lg:px-52 text-center"
    >
      <p>
        {trail2.map((style, index) => (
          <animated.span key={index} style={style}>
            {items2[index].text}{" "}
          </animated.span>
        ))}
      </p>
    </main>
      <center>
        <Link href="/whoweare">
          <button
            className={`h-16 bg-black text-white mx-5 my-5 text-center w-44 text-xl font-thin transform transition-all duration-700 hover:scale-105 hover:bg-transparent hover:border hover:border-black hover:text-black rounded-full`}
            id="section_font"
          >
            Biz Kimiz?
          </button>
        </Link>
      </center>
    </div>
  );
};

export default Entrance;
