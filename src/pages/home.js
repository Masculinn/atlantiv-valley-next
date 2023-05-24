import Head from "next/head";

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import Slogan from "@/components/Slogan"
import Entrance from "@/components/Entrance";
// import World from "@/components/World";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import Blog from "@/components/Blog";
import ButtonUp from "@/components/ButtonUp";

import chatgpt from "../assets/images/blogs/chatgpt.png"
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
      name:"avrupa'da yatırım danışmanlığı",
      content: "Yatırım danışmanlığı Avrupa finans piyasaları portföy yönetimi Varlık yönetimi Yatırım stratejileri Risk yönetimi Yatırım fırsatları Piyasa analizi Hisse senedi piyasaları Tahvil ve bono piyasaları Döviz piyasaları Gayrimenkul yatırımları avrupa'da yatırım avrupa'da danışmanlık yatırım danışmanlığı  Avrupa'da şirket kurma danışmanlığı Avrupa'da iş kurma Şirket kurma süreci Avrupa'da şirket tescili Avrupa pazarına giriş Avrupa iş ortamı Yurtdışında şirket kurma Şirket kurulumu için danışmanlık hizmetleri Vergi avantajları Hukuki gereklilikler İş planı hazırlama Yatırım fırsatları Avrupa Uluslararası işletme hukuku Şirket türleri Bölgesel iş stratejileri Avrupa'da pazar araştırması Rekabet analizi İş büyütme stratejileri Avrupa'da pazarlama ve reklamcılık Yerel düzenlemeler ve uyumu Kurumsallaşma Şirket kuruluşu Şirketleşme süreci Avrupa'da şirket kurma Kurumsal yapının oluşturulması Şirket yönetimi Şirket hukuku Kurumsal finansman Kurumsal yönetim Şirket politikaları Kurumsal strateji Şirket büyütme Şirket satın alma şirket birleşme Şirket sınıflandırması Şirket belgelendirme Şirket tescili Avrupa iş dünyası Avrupa pazar analizi Kurumsallaşma danışmanlığı"
    },
 ]
  const blogs = [
    {
        title: "Atlantic Valley Dijital & Chat-GPT",
        des: "İnovasyonların günümüze uyarlanabilirliği...",
        imgAlt: "Atlantic Valley Digital & chat-GPT",
        imgSource: chatgpt,
        sector: "Yazılım",
        linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_project-mining-commerce-activity-7003007881717387264-3Kpz?utm_source=share&utm_medium=member_desktop"
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
        title: "Atlantic Vaxlley",
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
        {/* <World /> */}
        <Stats />
        <Partners props={partnersData} images={partnersDataImages}/>
        <Blog blogs={blogs}/>
        <ButtonUp />
        <Footer />
      </div>
    );
  }
  
