import Head from "next/head";
import Script from "next/script";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Slogan from "@/components/Slogan"
import Entrance from "@/components/Entrance";
import World from "@/components/World";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import Blog from "@/components/Blog";
import ButtonUp from "@/components/ButtonUp";

import Meeting4 from "../assets/images/blogs/Meeting4.jpg"
import avrupadayatirim from "../assets/images/blogs/avrupadayatirim.png"
import enerji1 from "../assets/images/blogs/enerji1.png"
import masis from "../assets/images/sponsors/masislogo.png"
import carewind from "../assets/images/sponsors/CarewindLogo.png"
import etsy from "../assets/images/sponsors/etsy_logo.png"
import onur from "../assets/images/sponsors/onurlogo.png"
import edm from "../assets/images/sponsors/edmlogo.png"

export default function HomePage() {
 const seo = [
    {
      name:"description",
      content:"BÜYÜRKEN YANINIZDAYIZ. Atlantic Valley Partners , küresel bir yönetim danışmanlığı firmasıdır. ",
    },
    {
      name:"robots",
      content: "index, follow"
    },
    {
      name:"geo.country",
      content: "TR",
    },
    {
      name:"geo.placename",
      content: "Turkey",
    },          
    {
      name:"author",
      content: "Atlantic Valley Partners",
    },  

 ]
  const blogs = [
    {
        title: "Türkiye Ticaret Delegasyonu",
        des: "Turkey-Poland Trade Delegation & B2B Meeting toplantısına katılım sağladığımız için memnuniyet duyuyoruz.",
        imgAlt: "Atlantic Valley Avrupa'da yatırım",
        imgSource: Meeting4,
        sector: "Avrupa'da yatırım",
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7071437563806257153/"
      },
    {
        title: "Atlantic Valley & TAURON Partnerliği",
        des: "TAURON firmasına bizleri ağırladıkları için teşekkür ederiz",
        imgAlt: "TAURON Partnerliği",
        imgSource: enerji1,
        sector: "Enerji",
        linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_event-opportunities-project-activity-7012563088893702144-EYoK?utm_source=share&utm_medium=member_desktop"
    },
    {
        title: "Atlantic Valley",
        des: "Avrupa yatırımlarınız için merkez ülke olarak Polonya'ı tavsiye etmemizin bir çok sebebi var...",
        imgAlt: "Avrupa yatırım",
        imgSource: avrupadayatirim,
        sector: "Avrupa'da yatırım",
        linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_teknoloji-ekonomi-enerji-activity-7056985720854315008-x3um?utm_source=share&utm_medium=member_desktop"
    },
  ]
  const partnersData = {
    subHeader: "Referanslarımız",
    header: " Bu yolculukta yanında bulunduğumuz referanslarımız",
    images: [
      {
        img: carewind,
        imgAlt: "carewind"
      },
      {
        img: edm,
        imgAlt: "edm"
      },
      {
        img: masis,
        imgAlt: "masis"
      },
      {
        img: onur,
        imgAlt: "onur ayran"
      },
      {
        img: etsy,
        imgAlt: "etsy"
      }
    ]
  }
  const partnersDataImages = [
      {
        img: carewind,
        imgAlt: "carewind"
      },
      {
        img: edm,
        imgAlt: "edm"
      },
      {
        img: masis,
        imgAlt: "masis"
      },
      {
        img: onur,
        imgAlt: "onur ayran"
      },
      {
        img: etsy,
        imgAlt: "etsy"
      }
  ]

    return (
      <div>
        <Head>
          <title>Atlantic Valley</title>
          {seo.map((val,index) => {
              return <meta key={index} {...val} />
          })}
        </Head>
        <Script 
          async 
          src={"https://www.googletagmanager.com/gtag/js?id=G-R9FY9KSY4R"} 
          strategy="afterInteractive"
        />  
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R9FY9KSY4R');
          `}
        </Script>
        <Header />
        <main className='text-white items-center justify-center bg-transparent w-full h-screen flex' id='main'>
          <Entrance />
        </main>
        <Slogan 
          title={"Avrupada'ki faaliyetlerinizin %60'ının devlet desteği ile karşılandığını biliyor muydunuz?"}
          textSize={"5"}
          textColor1={`text-white`}
          textColor2={"text-white"}
          buttonColor={"bg-white"}
          buttonTextColor={"text-black"}
          des={"Size en uygun devlet teşviklerinin neler olduğunu öğrenmek ister misiniz?"}
          buttonText={"Devlet Teşvikleri"}
          bgColor={"bg-slate-950"}
          route={"/incentive"}
        />
        <Partners props={partnersData} images={partnersDataImages}/>
        <Stats />
        <div className="lg:w-full lg:hidden lg:h-48 md:hidden md:w-full sm:h-48 sm:w-full block w-full h-48"></div>
        <World /> 
        <Blog blogs={...blogs}/>
        <ButtonUp />
        <Footer />
      </div>
    );
  }
  
