import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";
import Logo from "../assets/images/main/logo-white.png";
import FooterComponent from "./FooterComponent";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12" id="section_font">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8">
          <h3 className="text-lg font-bold mb-4 underline underline-offset-4">Hakkımızda</h3>
          <ul className="list-reset">
            <Link href={"/whoweare"}><li className="mb-2 hover:text-gray-400 text-slate-300">Partnerlerimiz</li></Link>              
            <Link href={"/all-referances"}><li className="mb-2 hover:text-gray-400 text-slate-300">Referanslarımız</li></Link>              
            <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/company/atlantic-valley-partners/"}><li className="mb-2 hover:text-gray-400 text-slate-300">Kariyer</li></a>              
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8">
          <h3 className="text-lg font-bold underline underline-offset-4 mb-4">Endüstriler</h3>
            <ul className="list-reset">
              <Link href={"/industries/digital-marketing"}><li className="mb-2 hover:text-gray-400 text-slate-300">Dijital Pazarlama</li></Link>
              <Link href={"/industries/fmcg"}><li className="mb-2 hover:text-gray-400 text-slate-300">Hızlı Tüketim Ürünleri</li></Link>
              <Link href={"/industries/e-trade"}><li className="mb-2 hover:text-gray-400 text-slate-300">E-Ticaret</li></Link>
              <Link href={"/industries/information-technology"}><li className="mb-2 hover:text-gray-400 text-slate-300">IT Hizmetleri</li></Link>
              <Link href={"/industries/energy"}><li className="mb-2 hover:text-gray-400 text-slate-300">Enerji</li></Link>
            </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8">
          <h3 className="text-lg font-bold underline underline-offset-4 mb-4">Yatırım</h3>
          <ul className="list-reset">
            <Link href={"/investing"}><li className="mb-2 hover:text-gray-400 text-slate-300">Avrupa&apos;da Yatırım</li></Link>
            <Link href={"/incentive"}><li className="mb-2 hover:text-gray-400 text-slate-300">Devlet Teşvikleri</li></Link>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8">
          <h3 className="text-lg font-bold underline underline-offset-4 mb-4">İletişim</h3>
          <ul className="list-reset">
            <Link href={"/"}><li className="mb-2 hover:text-gray-400 text-slate-300">Lokasyonlar</li></Link>
            <Link href={"/contact-us"}><li className="mb-2 hover:text-gray-400 text-slate-300">İletişim Bilgileri</li></Link>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 px-4 mb-8 justify-center items-center">
          <center>
          <Link href={"/"}>
            <Image src={Logo} alt="Atlantic Valley" className="lg:w-full lg:h-auto md:w-full md:h-auto sm:w-full sm:h-auto h-24 w-auto " />
          </Link>
          <div className="mt-4 justify-center flex-wrap flex items-center">
            <a href={"https://www.google.com/maps/search/?api=1&query=52.225651199978536,21.013623195334112"} target="_blank" rel="noopener noreferrer" className=" items-center pt-2">
              <span className="text-white text-md pl-2 hover:text-white-900" id="section_font">Marszałkowska 83\38, 00-683 Warszawa</span>  
            </a>
            </div>
          <div className=" justify-between mt-12">
            <ul className="inline-flex">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/atlantic-valley-partners/">
                <li>
                  <FaLinkedin size={28} className="text-white transition-all duration-300 hover:text-slate-300"/>
                </li>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/avrupada_yatirim/">
                <li>
                  <FaInstagram size={28} className="mx-1 text-white transition-all duration-300 hover:text-slate-300"/>
                </li>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100091451207802">
                <li>
                  <FaFacebook size={28} className="mx-1 text-white transition-all duration-300 hover:text-slate-300 "/>
                </li>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@AtlanticValleyPartners">
                <li>
                  <FaYoutube size={28} className="mx-1 text-white transition-all duration-300 hover:text-slate-300"/>
                </li>                
              </a> 
              <li>
                <FaWhatsapp size={28} className="mx-1 text-white transition-all duration-300 hover:text-slate-300"/>
              </li>
            </ul>
          </div>
          </center>
        </div> 
      </div>
      <FooterComponent />
      </footer>
  );
}

export default Footer;
