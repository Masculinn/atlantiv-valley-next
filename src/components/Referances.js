'use client'

import React, {useState, useEffect, useRef} from 'react';
import {useSpring, animated} from "react-spring";
import Image from 'next/image';

const Card = ({imgSrc, imgAlt, name, des, buttonName, link}) => {    
  return (
      <div className='lg:w-1/2 md:w-full sm:w-full w-full h-auto bg-white lg:mx-12 shadow-2xl lg:scale-90 md:scale-90 scale-100'>
        <Image src={imgSrc} alt={imgAlt} className=' object-center object-cover w-full h-80' />
        <h2 className='pt-6 text-2xl' id='section_font'>- {name} -</h2>
        <p className='px-8 text-sm lg:text-lg tracking-tight md:text-md pt-4' id='section_font'>{des}</p>
        <a href={link} rel="noreferrer" target='_blank'>
          <button className='lg:h-16 md:h-16 sm:h-8 h-12 text-center lg:w-48 md:w-48 sm:w-36 w-36 lg:mt-12 md:mt-12 sm:mt-8 mt-4 bg-black text-white lg:text-xl md:text-md sm:text-md text-md font-thin transform transition-all duration-200 hover:scale-105 hover:bg-transparent hover:border hover:border-black hover:text-black rounded-full hover:pl-6 my-16' id='section_font' href=''>{buttonName} →</button>
        </a>
      </div>
  )
}
const Referances = (props) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        }, { threshold: 0.1 });
    
        observer.observe(ref.current);
    
        return () => {
          observer.disconnect();
        }
      }, []);
    
      const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: isVisible ? 1 : 0 },
        config: { duration: 1000 },
      });

  return (
    <animated.div className='lg:h-screen md:h-screen sm:h-auto h-auto w-full bg-transparent justify-center items-center text-center flex' style={animation} ref={ref}>
      <div className='w-full items-center justify-center text-center lg:inline-flex flex-auto lg:flex-row block h-auto'>
        {props.props.map((val, index) => {
          return <Card key={index} {...val}/>
        })}
      </div>
    </animated.div>
  );
}

export default Referances;