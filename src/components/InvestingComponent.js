'use client'

import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import MainHeader from './MainHeader';
import { FaFileDownload } from "react-icons/fa";
export default function Investing() {
  const [isShow, setisShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const animationProps = useSpring({
    transform: isShow ? `perspective(1000px) rotateX(30deg)` : 'perspective(1000px) rotateX(0deg)',
    config: { mass: 1, tension: 100, friction: 30 }
  });
  const { x } = useSpring({
    x: isClicked ? 100 : 0,
    config: { duration: 1000 }
  });
  return (
    <div>
      <MainHeader 
        top={"Yatırımlarınızı Değerlendirin"}
        main={"Kazancınızın Sınırını Zorlayın"}
        des={" Yatırım dünyasında fark yaratan hizmetlerimizle birikimlerinizi doğru adımlarla değerlendirmenize yardımcı oluyoruz"}
        buttonLink={`https://www.linkedin.com/posts/atlantic-valley-partners_teknoloji-ekonomi-enerji-activity-7056985720854315008-x3um?utm_source=share&utm_medium=member_desktop`}
        buttonText={`${isClicked ? 'İletişime Geçin' : 'Neden Polonya?'}`}
        on={true}
        textSize={6}
      />
      <animated.div className=' w-full h-screen items-center justify-center flex bg-slate-950' style={{
          opacity: x.to({ range: [0, 50, 100], output: [1, 0.5, 0] }),
          display: x.to(x => (x === 100 ? 'none' : 'flex'))
        }}>
        <animated.div
        className={`md:w-full md:h-2/3 sm:w-full sm:h-2/3 w-full h-2/3 lg:w-3/5 bg-transparent shadow-2xl ${
            isShow ? 'lg:grayscale-0' : 'lg:grayscale'
        } transition-all rounded-lg bg-opacity-50 justify-center items-center flex bg-cover bg-no-repeat`}
        style={{
            backgroundImage: `url('https://i.postimg.cc/ZnmxhwCt/Atlantic-Valley-Slayt.png')`,
            perspective: '1000px',
            ...animationProps
        }}
        onMouseEnter={() => setisShow(true)}
        onMouseLeave={() => setisShow(false)}
        >
        <a
            href={'/investment.pdf'}
            download
            className="text-6xl text-white cursor-pointer hover:scale-125 transition-transform duration-300"
            id="section_font"
            onClick={()=> {setIsClicked(true);}}
        >
        <FaFileDownload />
      </a>
    </animated.div>
      </animated.div>
    </div>
  )
}