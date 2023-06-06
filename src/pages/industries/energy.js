import "../../css/globals.css"
import "../../css/app.css"
import carewind from "../../assets/images/industries/carewind_ref.png"
import masis from "../../assets/images/industries/masis_ref.png"
import enerji1 from "../../assets/images/blogs/enerji1.png"
import enerji2 from "../../assets/images/blogs/enerji2.png"
import avrupadayatirim from "../../assets/images/blogs/avrupadayatirim.png"

import React from 'react';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp";

import MainHeader from "@/components/MainHeader";
import Referances from "@/components/Referances";
import Blog from "@/components/Blog";

export default function Energy() {
    const seo = [
        {
            name:"description",
            content:"Avrupa'da gün geçtikçe büyüyen Yenilenebilir Enerji Dönüşümü ve aynı zamanda savaş sonrası gelişen Enerji ihtiyacında gelişen Kömür açığında aktif rol oynamaya çalışıyoruz.",
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
      const referances = [
        {
            imgSrc: masis,
            imgAlt: "MASIS",
            name: "MASIS",
            des:"MASİS ile bir Avrupa Birliği projesinde bir araya gelip kendilerini Polonya Katowice Bolgesindeki Touran Maden İşletmeleri ve GIPH (Polanya İşçi ve İşveren Sendikası) ile buluşturduk. Sektör dinamikleri ve iki ülke arasında kurulabilecek ticari köprüler hakkında fikir alışverişinde bulunduk",
            buttonName: "Masis",
            link: "https://masis.org.tr/"
        },
        {
            imgSrc: carewind,
            imgAlt: "Carewind",
            name: "Carewind",
            des: "Avrupa'da kurumsallaşma ve şirketleşme ayağını tamamladığımız onlarca şirketten biri olan Carewind şirketimizle birlikte Avrupa'daki yolumuza birlikte devam ettik ve kendileriyle birlikte bir çok Enerji Fuarına katılarak kendilerini temsil ettik",
            buttonName: "Carewind",
            link: "https://www.carewindservice.com/"
        },   
      ]
      const blogs = [
        {
            title: "Atlantic Valley & MASIS Partnerliği",
            des: "MASIS'in katılımıyla lider enerji etkinliği",
            imgAlt: "MASIS'in katılımı",
            imgSource:enerji1,
            sector: "Enerji",
            linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_project-mining-commerce-activity-7003007881717387264-3Kpz?utm_source=share&utm_medium=member_desktop"
        },
        {
            title: "Atlantic Valley & TAURON Partnerliği",
            des: "TAURON firmasına bizleri ağırladıkları için teşekkür ederiz",
            imgAlt: "TAURON Partnerliği",
            imgSource:enerji2,
            sector: "Enerji",
            linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_event-opportunities-project-activity-7012563088893702144-EYoK?utm_source=share&utm_medium=member_desktop"
        },
        {
            title: "Atlantic Valley",
            des: "Avrupa yatırımlarınız için merkez ülke olarak Polonya'ı tavsiye etmemizin bir çok sebebi var...",
            imgAlt: "Avrupa yatırım",
            imgSource:avrupadayatirim,
            sector: "Avrupa'da yatırım",
            linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_teknoloji-ekonomi-enerji-activity-7056985720854315008-x3um?utm_source=share&utm_medium=member_desktop"
        }
    ]
    return (
        <div>
            <Head>
                <title>Atlantic Valley | Enerji</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header />
            <ButtonUp />
            <MainHeader 
              top="Enerji" 
              main="Yenilenebilir Enerji ve Doğal Kaynaklar "
              des="Avrupa'da gün geçtikçe büyüyen Yenilenebilir Enerji Dönüşümü ve aynı zamanda savaş sonrası gelişen Enerji ihtiyacında gelişen Kömür açığında aktif rol oynamaya çalışıyoruz."
              buttonText="Referanslarımız"
              textSize ={6}
              on={true}
              buttonLink = {"/all-referances"}
            />
           <MainHeader 
                top="Enerji" 
                main="Enerji Sektörü"            
                des="Enerji alanındaki müşterilerimizle birlikte, sektörün ileri gelen firmalarını aynı masada oturtmak bu alandaki başlıca görevlerimizden. Daha önce partnerlerimizle ve firmalarımızla bir çok toplantı gerçekleştirdik ve 2022 yılı Enerji Sektörü adına Atlantic Valley için en verimli geçen yıllarından biri oldu."
                buttonText="Referanslarımız"
                textSize ={6}
                on={false}
                bgColor={"bg-slate-950"}
                mid={true}
                mode={true}           
                buttonLink = {"/"}       
            />
            <Referances props={referances}/>
            <Blog blogs={blogs}/>
            <Footer />
        </div>
    )
}