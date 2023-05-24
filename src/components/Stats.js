'use client'

import React,{useEffect, useRef, useState} from 'react'
import dynamic from 'next/dynamic';
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

const Stats = () => {
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

    return (
        <div className=" text-white items-center justify-center bg-transparent w-full h-screen scale-75" ref={ref}>
           <div className="flex flex-col lg:flex-row">
                <div id='section_font' className=" w-full lg:w-1/3 p-8 lg:p-40 bg-transparent text-black text-4xl lg:border-r-2 lg:border-black">
                <h2 className='text-6xl text-blue-700 text-start '> +<CountUp start={0} end={isVisible ? 4 : 0} duration={4}/> Ülkede</h2> 
                    <br />
                    <p className=' text-start'>ile birçok farklı lokasyonda hizmet vermekteyiz.</p>
                </div>
                <div id='section_font' className="w-full lg:w-1/3 p-8 lg:p-40 bg-transparent text-black text-4xl lg:border-r-2 lg:border-black">
                    <h2 className='text-6xl text-blue-700 text-start'> +<CountUp start={0} end={isVisible ? 8 : 0} duration={4}/> <br /> YIL</h2> 
                    <br />
                    <p className='text-start'>tecrübe ile danışmanlık serüvenimize devam etmekteyiz.</p>
                </div>
                <div id='section_font' className="w-full lg:w-1/3 p-8 lg:p-40 bg-transparent text-black text-4xl lg:border-none">
                    <h2 className='text-6xl text-blue-700 text-start'>+<CountUp start={0} end={isVisible ? 5 : 0} duration={4}/>m <br />Euro</h2> 
                    <br />
                    <p className='text-start'>Toplamı 5m aşan yatırım miktarı.</p>
                </div>
            </div>
        </div>
        )
}

export default Stats;