'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSpring, animated, useTransition } from "react-spring";

import Logo from '../assets/images/main/Logo.png'

export default function Header() {

  const [hoverMobile, setHoverMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState(true)
  const [bar, setBar] = useState(false)

  const mobileStyle = {
    backgroundColor: color ? '#FFFFFF' : '#000000',
    color: color ? '#000000' : '#FFFFFF'
  }

  const animBar = useSpring({
    transform: bar ? 'scale(1.05)' : 'scale(1)',
    backgroundColor: bar ? 'transparent' : 'transparent',
    boxShadow: bar
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      : '0 10px 30px -12px rgba(0, 0, 0, 0.1)',
  })

  const HeaderMobile = () => {
  const transitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateY(-50%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-50%)' }
  });

  return (
    <div className={`top-0 text-sm ml-10 bg-transparent backdrop-blur-md shadow-gray-500 hover:h-auto lg:hidden md:inline-block sm:inline-block ${hoverMobile ? 'inline-block' : 'hidden'} transition-all duration-300 lg:hidden md:hidden sm:inline-block inline-block`}>
      <button id='section_font' className="lg:mt-0 text-black hover:text-slate-600 mr-4" onClick={() => {setShowMenu(prev => !prev)}}>
        {showMenu ? 'ENDÜSTRİLER ↑' : 'ENDÜSTRİLER ↓'}
      </button>
      {transitions(
        (style, item) => item && (
          <animated.div className="bg-transparent bg-opacity-50 justify-center items-center" style={style}>
            <div className="px-2">
              <div className="inline-block">
              <Link href="/incentive"><button onClick={() => {setShowMenu(prev => !prev );setHoverMobile(false )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold">Devlet Teşvikleri</button></Link>
              <Link href="/industries/e-trade"><button onClick={() => {setShowMenu(prev => !prev );setHoverMobile(false )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold">E-Ticaret</button></Link>
              <Link href="/industries/information-technology"><button onClick={() => {setShowMenu(prev => !prev );setHoverMobile(false )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold">IT Hizmetleri </button></Link>
              <Link href="/industries/digital-marketing"><button onClick={() => {setShowMenu(prev => !prev );setHoverMobile(false )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold">Dijital Pazarlama </button></Link>
              <Link href="/industries/fmcg"><button onClick={() => {setShowMenu(prev => !prev );setHoverMobile(false )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold">Hızlı Tüketim Ürünleri </button></Link>
              <Link href="/industries/energy"><button onClick={() => {setShowMenu(prev => !prev );setHoverMobile(false )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold">Enerji </button></Link>
              </div>
            </div>
          </animated.div>
        )
      )}
      <Link href={"/investing"}>
        <button id='section_font' className="block mt-4 lg:mt-0 text-black hover:text-slate-600 mr-4" onClick={()=> {setHoverMobile(false)} }>
          AVRUPADA YATIRIM
        </button>
      </Link>
      <Link href={"/whoweare"}>
        <button id='section_font' className="block mt-4 lg:mt-0 text-black hover:text-slate-600 mr-4 " onClick={()=> {setHoverMobile(false)}}>
          BİZ KİMİZ?
        </button>
      </Link>
      <Link href={"/contact-us"}>
        <button id="section_font" className="block mt-4 lg:mt-0 text-black hover:text-slate-600 mr-4 pb-6" onClick={()=> {setHoverMobile(false)}}>
          İLETİŞİME GEÇİN
        </button>      
      </Link>
    </div>  
  )
}
  return (
    <header className={"top-0 w-full transition-opacity duration-500 relative"} 
    >
        <nav className="flex items-center justify-between flex-wrap p-6"
            onMouseLeave={() => {
                (window.innerWidth > 1080) && setBar(false)
        }}>
      <div className="flex items-center flex-shrink-0 ">
        <Link href={"/"}> 
          <Image priority={false} src={Logo} alt='Atlantic Valley Partners Logo' className='ml-5 lg:w-44 lg:h-24 md:w-40 md:h-24 sm:h-12 sm:w-24 w-32 h-16' id='logo'/>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <br />
        <button className="flex items-center px-3 py-2 rounded-lg bg-white text-black border border-white hover:text-white hover:bg-black hover:border-black" 
          onClick={() => 
            {
              setColor(prev => !prev)
              setHoverMobile(prev => !prev)
          }}
          style={mobileStyle}
          >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block">
        <div className="text-sm lg:flex-grow lg:justify-end">            
        {
        /* After Language Support
        <a id='section_font' href="main.js" className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right">
            <span className="material-symbols-outlined -mt-0.5">
            language
            </span>
        </a> 
        */
        }
          <Link id='section_font' href={"/contact-us"} className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right">
            İLETİŞİME GEÇİN
          </Link>
          <Link id='section_font' href={"/whoweare"} className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right">
          BİZ KİMİZ?
          </Link>
          <Link id='section_font' href={"/investing"} className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right">
          AVRUPADA YATIRIM
          </Link>
          <Link id='section_font' href={"/home"} className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right" 
            onMouseEnter={() => {
                {(window.innerWidth > 1080) && setBar(true)}
            }}
          >
            {bar ? 'ENDÜSTRİLER ↑' : 'ENDÜSTRİLER ↓'}
          </Link>
        </div>
      </div>
      {bar  && (
        <animated.div className="absolute top-full w-full h-38 backdrop-blur-sm -mt-6 shadow-xl " style={animBar}>
          <Link href={'/incentive'}>
            <animated.button id='section_font' className="h-16 w-1/6 bg-transparent text-center justify-center text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white ">
              Devlet Teşvikleri
            </animated.button>
          </Link>
          <Link href={'/industries/e-trade'}>
            <animated.button id='section_font' className="h-16 w-1/6 bg-transparent text-center justify-center text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white ">
              E-Ticaret
            </animated.button>
          </Link>
          <Link href={'/industries/information-technology'}>
            <animated.button id='section_font' className="text-sm h-16 w-1/6 bg-transparent text-center justify-center text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white ">
              IT Hizmetleri
            </animated.button>
          </Link>
          <Link href={'/industries/digital-marketing'}>
            <animated.button id='section_font' className="text-sm h-16 w-1/6 bg-transparent text-center justify-center text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white ">
              Dijital Pazarlama
            </animated.button>
          </Link>
          <Link href={'/industries/fmcg'}>
            <animated.button id='section_font' className="text-sm h-16 w-1/6 bg-transparent text-center justify-center text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white ">
              Hızlı Tüketim Ürünleri
            </animated.button>
          </Link>
          <Link href={'/industries/energy'}>
            <animated.button id='section_font' className="h-16 w-1/6 bg-transparent text-center justify-center text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white ">
              Enerji
            </animated.button>
          </Link>
        </animated.div>
      )}
    </nav>  
    <HeaderMobile />
  </header>
  );
}