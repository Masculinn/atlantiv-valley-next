'use client'

import React,{useEffect, useRef, useState} from 'react'
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

const BlogDiv = ({title, des, imgAlt, imgSource, sector, linkedinUrl}) => {
    return (
      <div className='w-full max-w-md h-full my-16 shadow-2xl mx-4 lg:mx-12 lg:w-1/4 text-black cursor-pointer' id='section_font'>
        <a href={linkedinUrl} rel="noreferrer" target='_blank'>
          <div className='w-full text-start h-1/3 px-8 justify-center tracking-tight hover:underline hover:text-blue-700'>
            <h2 className='font-semibold text-2xl py-4 transition-all duration-300'>{title}</h2>
            <p className='text-slate-600 py-2 '>{des}</p>
          </div>
        <div className='w-full text-start h-1/6 text-black text-2xl px-8 py-4'>
        | {sector}
        </div>
        <Image src={imgSource} className='h-auto w-full mx-auto transform transition-all duration-500 hover:scale-105 hover:translate-x-5 hover:translate-y-5 hover:shadow-2xl' alt={imgAlt} />
        </a>
      </div>
  )
  }
  const Blog = (props) => {
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
    <animated.div className='w-full min-h-screen bg-slate-50 bg-opacity-50 flex flex-wrap justify-center items-center text-white' id='section_font' style={animation} ref={ref}>  
        {props.blogs.map((val, key) => {
            return <BlogDiv 
            key={key}
            {...val}
            />
        })}
    </animated.div>
  
  )
  }

export default Blog;
