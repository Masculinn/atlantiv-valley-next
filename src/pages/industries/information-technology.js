import "../../css/globals.css"
import "../../css/app.css"

import edm from "../../assets/images/industries/edm_ref.png"
import react from "../../assets/images/sponsors/react.png"
import node from "../../assets/images/sponsors/node.png"
import next from "../../assets/images/sponsors/next.png"
import tailwind from "../../assets/images/sponsors/tailwind.png"
import mysql from "../../assets/images/sponsors/mysql.png"

import React from 'react';
import Head from "next/head";

import chatgpt from "../../assets/images/blogs/chatgpt.png"
import nextjs from "../../assets/images/blogs/nextjs.png"
import avrupadayatirim from "../../assets/images/blogs/avrupadayatirim.png"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp"
import MainHeader from '@/components/MainHeader';
import TrailText from "@/components/TrailText";
import Steps from "@/components/Steps"
import Partners from "@/components/Partners"
import Referances from "@/components/Referances"
import Blog from "@/components/Blog"

export default function InformationTechnology() {
  const seo = [
    {
      name: "IT hizmetleri danışmanlığı",
      content: "Bilgi teknolojileri BT hizmetleri Yazılım geliştirme Web geliştirme Mobil uygulama geliştirme Veritabanı yönetimi Ağ güvenliği Bulut bilişim Büyük veri analitiği Yapay zeka Makine öğrenimi Siber güvenlik Network altyapısı Web hosting Veri merkezi IT danışmanlığı Yazılım testi Proje yönetimi Teknoloji eğitimi Dijital dönüşüm Yatırım danışmanlığı Avrupa finans piyasaları portföy yönetimi Varlık yönetimi Yatırım stratejileri Risk yönetimi Yatırım fırsatları Piyasa analizi Hisse senedi piyasaları Tahvil ve bono piyasaları Döviz piyasaları Gayrimenkul yatırımları avrupa'da yatırım avrupa'da danışmanlık yatırım danışmanlığı  Avrupa'da şirket kurma danışmanlığı Avrupa'da iş kurma Şirket kurma süreci Avrupa'da şirket tescili Avrupa pazarına giriş Avrupa iş ortamı Yurtdışında şirket kurma Şirket kurulumu için danışmanlık hizmetleri Vergi avantajları Hukuki gereklilikler İş planı hazırlama Yatırım fırsatları Avrupa Uluslararası işletme hukuku Şirket türleri Bölgesel iş stratejileri Avrupa'da pazar araştırması Rekabet analizi İş büyütme stratejileri Avrupa'da pazarlama ve reklamcılık Yerel düzenlemeler ve uyum",
    },
    {
      name: "IT hizmetleri",
      content: "Bilgi teknolojileri BT hizmetleri Yazılım geliştirme Web geliştirme Mobil uygulama geliştirme Veritabanı yönetimi Ağ güvenliği Bulut bilişim Büyük veri analitiği Yapay zeka Makine öğrenimi Siber güvenlik Network altyapısı Web hosting Veri merkezi IT danışmanlığı Yazılım testi Proje yönetimi Teknoloji eğitimi Dijital dönüşüm Yatırım danışmanlığı Avrupa finans piyasaları portföy yönetimi Varlık yönetimi Yatırım stratejileri Risk yönetimi Yatırım fırsatları Piyasa analizi Hisse senedi piyasaları Tahvil ve bono piyasaları Döviz piyasaları Gayrimenkul yatırımları avrupa'da yatırım avrupa'da danışmanlık yatırım danışmanlığı  Avrupa'da şirket kurma danışmanlığı Avrupa'da iş kurma Şirket kurma süreci Avrupa'da şirket tescili Avrupa pazarına giriş Avrupa iş ortamı Yurtdışında şirket kurma Şirket kurulumu için danışmanlık hizmetleri Vergi avantajları Hukuki gereklilikler İş planı hazırlama Yatırım fırsatları Avrupa Uluslararası işletme hukuku Şirket türleri Bölgesel iş stratejileri Avrupa'da pazar araştırması Rekabet analizi İş büyütme stratejileri Avrupa'da pazarlama ve reklamcılık Yerel düzenlemeler ve uyum",
    },
  ]
    const steps = [
        {
            text: "İşletmenizdeki iş süreçlerini, problemleri ve bu problemleri çözmek için ihtiyaç duyulan işlevleri belirleyin.",
            header:"İhtiyaçların Analizi",
            number: "1",
            bgColor: "bg-slate-950",
          },
        {
            text: "Projeyi planlaması, tarafımızdan ayrıntılı bir proje planı hazırlanması ve zaman çizelgesi oluşturulması.",
            header:"Planlama",
            number: "2", 
            bgColor: "bg-slate-950",
        },
        {
            text: "Tasarım, yazılım geliştirme, test etme, entegrasyon ve kalite kontrol süreçlerini takip edilmesi.",
            header:"Geliştirme",
            number: "3", 
            bgColor: "bg-slate-950",
        },
        {
            text: "Yazılımın canlıya geçirilmesi için hazırlık yapılması, uygun bir sunucu seçilmesi ve yayınlama işlemini gerçekleştirilmesi.",
            bgColor: "bg-slate-950",
            header:"Yayınlama",
            number: "4", 
        },
        {
            text:" Yazılımın sorunsuz çalışmasını sağlamak için düzenli bakım yapılması, güvenlik açıklarını düzeltilmesi ve kullanıcıların karşılaştığı sorunların çözülmesi.",
            bgColor: "bg-slate-950",
            header:"Bakım ve Güncelleme",
            number: "5", 
        },
        {
            text: "Yazılım projesi yapım süreci",
            bgColor: "bg-blue-950",
            header:"",
            number: "6", 
        }
    ] 
    
    const partnersData = {
      subHeader: "Kullandığımız Teknolojiler'den Bazıları",
      header: "Bu yolda, güçlü, yenilikçi ve en yeni teknolojileri sizlerle buluşturuyoruz",
      images: [
        {
          img:node,
          imgAlt: "nodejs"
        },
        {
          img: next,
          imgAlt: "nextjs"
        },
        {
          img: mysql,
          imgAlt: "mysql"
        },
        {
          img: react,
          imgAlt: "react"
        },
        {
          img: tailwind,
          imgAlt: "tailwind css"
        }
      ]
    }
    
    const blogs = [
      {
          title: "Atlantic Valley Dijital & chat-GPT",
          des: "İnovasyonların günümüze uyarlanabilirliği...",
          imgAlt: "Atlantic Valley Digital & chat-GPT",
          imgSource: chatgpt,
          sector: "Yazılım",
          linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_project-mining-commerce-activity-7003007881717387264-3Kpz?utm_source=share&utm_medium=member_desktop"
      },
      {
          title: "Atlantic Valley Dijital & Next.js",
          des: "Websitemizin altında yatan teknolojiler",
          imgAlt: "Atlantic Valley Digital & Next.js",
          imgSource: nextjs,
          sector: "Yazılım",
          linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_event-opportunities-project-activity-7012563088893702144-EYoK?utm_source=share&utm_medium=member_desktop"
      },
      {
          title: "Atlantic Valley",
          des: "Avrupa yatırımlarınız için merkez ülke olarak Polonya'ı tavsiye etmemizin bir çok sebebi var...",
          imgAlt: "Avrupa yatırım",
          imgSource: avrupadayatirim,
          sector: "Avrupa'da yatırım",
          linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_teknoloji-ekonomi-enerji-activity-7056985720854315008-x3um?utm_source=share&utm_medium=member_desktop"
      }
    ]
    
    const referances = [
      {
        imgSrc: edm,
        imgAlt: "EDM",
        name: "EDM",
        des: "İş ortaklarımızdan olan EDM Technologies ile birlikte Polanya pazarında bir çok alanda birlikte ilerlemekteyiz. Yazılım ve iş geliştirme kısmında Avrupa pazarında EDM ekibine destek veriyoruz",
        buttonName: "EDM",
        link: "https://www.edmbilisim.com.tr/"
      }
    ]
    const texts = [
        "Zorlukları ","Fırsatlara","Dönüştüren,","Yazılım","Çözümleri"
      ] 

    return (
        <div>
            <Head>
                <title>Atlantic Valley | Bilgi Teknolojileri</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header />
            <ButtonUp />
            <MainHeader 
                top="IT Hizmetleri" 
                main="Bilgi Teknolojilerine çözümler sunuyoruz"
                des="Dunyanin en buyuk yatirim sektorlerinden bir tanesinin bilgi teknolojileri oldugu gercegi herkes tarafindan biliniyor. Biz de bu yolda yaratici farkli ve orijinal cozumler sunuyoruz."  
                buttonText="Referanslarımız"
                textSize ={6}
                on={true}
                buttonLink = {"/referances"}
            />   
            <MainHeader 
                top="IT Hizmetleri" 
                main="Yazılım"            
                des="Bilgi hizmetlerimiz, işletmenizin büyümesine yardımcı olacak bilgi, araçlar ve teknolojiler sunar. İhtiyaçlarınızı karşılamak için esnek, özelleştirilebilir çözümler sunuyoruz."
                buttonText="Referanslarımız"
                textSize ={6}
                on={false}
                bgColor={"bg-slate-950"}
                mid={true}
                mode={true}
                buttonLink={"/"}  
            />
            <TrailText texts={texts}/>
            <Steps steps={steps} />
            <Partners images={partnersData.images} props={partnersData}/>
            <Referances props={referances} />
            <Blog blogs={blogs} />
            <Footer />
        </div>
    )
}
