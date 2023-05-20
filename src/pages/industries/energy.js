import "../../css/globals.css"
import "../../css/app.css"
import carewind from "../../assets/images/industries/carewind_ref.png"
import masis from "../../assets/images/industries/masis_ref.png"

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
            name:"enerji yatırım danışmanlığı",
            content:"Enerji danışmanlığı Enerji yönetimi Enerji verimliliği Sürdürülebilir enerji Enerji tasarrufu Yenilenebilir enerji Enerji stratejileri Enerji analitiği Enerji veri yönetimi Enerji tüketim optimizasyonu Enerji auditleri Enerji maliyet analizi Enerji sistemleri entegrasyonu Enerji etüdü Enerji politikaları Enerji kaynakları çeşitlendirme Karbon ayak izi azaltma Enerji sertifikasyonu Enerji regülasyonları Enerji proje yönetimi  Enerji Enerji sektörü Enerji kaynakları Yenilenebilir enerji Fosil yakıtlar Enerji verimliliği Enerji tasarrufu Enerji üretimi Elektrik Güneş enerjisi Rüzgar enerjisi Hidroelektrik enerji Nükleer enerji Biyokütle enerjisi Enerji politikaları Enerji piyasası Enerji tüketimi Enerji dağıtımı Enerji altyapısı Enerji dönüşümü Yatırım danışmanlığı Avrupa finans piyasaları portföy yönetimi Varlık yönetimi Yatırım stratejileri Risk yönetimi Yatırım fırsatları Piyasa analizi Hisse senedi piyasaları Tahvil ve bono piyasaları Döviz piyasaları Gayrimenkul yatırımları avrupa'da yatırım avrupa'da danışmanlık yatırım danışmanlığı  Avrupa'da şirket kurma danışmanlığı Avrupa'da iş kurma Şirket kurma süreci Avrupa'da şirket tescili Avrupa pazarına giriş Avrupa iş ortamı Yurtdışında şirket kurma Şirket kurulumu için danışmanlık hizmetleri Vergi avantajları Hukuki gereklilikler İş planı hazırlama Yatırım fırsatları Avrupa Uluslararası işletme hukuku Şirket türleri Bölgesel iş stratejileri Avrupa'da pazar araştırması Rekabet analizi İş büyütme stratejileri Avrupa'da pazarlama ve reklamcılık Yerel düzenlemeler ve uyum"  
        },
        {
            name:"enerji yatırım",
            content:"Enerji danışmanlığı Enerji yönetimi Enerji verimliliği Sürdürülebilir enerji Enerji tasarrufu Yenilenebilir enerji Enerji stratejileri Enerji analitiği Enerji veri yönetimi Enerji tüketim optimizasyonu Enerji auditleri Enerji maliyet analizi Enerji sistemleri entegrasyonu Enerji etüdü Enerji politikaları Enerji kaynakları çeşitlendirme Karbon ayak izi azaltma Enerji sertifikasyonu Enerji regülasyonları Enerji proje yönetimi  Enerji Enerji sektörü Enerji kaynakları Yenilenebilir enerji Fosil yakıtlar Enerji verimliliği Enerji tasarrufu Enerji üretimi Elektrik Güneş enerjisi Rüzgar enerjisi Hidroelektrik enerji Nükleer enerji Biyokütle enerjisi Enerji politikaları Enerji piyasası Enerji tüketimi Enerji dağıtımı Enerji altyapısı Enerji dönüşümü Yatırım danışmanlığı Avrupa finans piyasaları portföy yönetimi Varlık yönetimi Yatırım stratejileri Risk yönetimi Yatırım fırsatları Piyasa analizi Hisse senedi piyasaları Tahvil ve bono piyasaları Döviz piyasaları Gayrimenkul yatırımları avrupa'da yatırım avrupa'da danışmanlık yatırım danışmanlığı  Avrupa'da şirket kurma danışmanlığı Avrupa'da iş kurma Şirket kurma süreci Avrupa'da şirket tescili Avrupa pazarına giriş Avrupa iş ortamı Yurtdışında şirket kurma Şirket kurulumu için danışmanlık hizmetleri Vergi avantajları Hukuki gereklilikler İş planı hazırlama Yatırım fırsatları Avrupa Uluslararası işletme hukuku Şirket türleri Bölgesel iş stratejileri Avrupa'da pazar araştırması Rekabet analizi İş büyütme stratejileri Avrupa'da pazarlama ve reklamcılık Yerel düzenlemeler ve uyum"  
        }  
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
            imgSource:"https://media.licdn.com/dms/image/C4D22AQE08CzY6Rotig/feedshare-shrink_1280/0/1669647187515?e=1685577600&v=beta&t=cjR6ykSvI0LiouceILBaTtIobkhTC2rLeh1jC5HQsyU",
            sector: "Enerji",
            linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_project-mining-commerce-activity-7003007881717387264-3Kpz?utm_source=share&utm_medium=member_desktop"
        },
        {
            title: "Atlantic Valley & TAURON Partnerliği",
            des: "TAURON firmasına bizleri ağırladıkları için teşekkür ederiz",
            imgAlt: "TAURON Partnerliği",
            imgSource: "https://media.licdn.com/dms/image/C4D22AQFo7CVnjo4Bfg/feedshare-shrink_1280/0/1671925325795?e=1685577600&v=beta&t=Cu-87souS8jV8rnz4KkwHIU_OjRRnYyPkoR7Ugm7bUQ",
            sector: "Enerji",
            linkedinUrl:"https://www.linkedin.com/posts/atlantic-valley-partners_event-opportunities-project-activity-7012563088893702144-EYoK?utm_source=share&utm_medium=member_desktop"
        },
        {
            title: "Atlantic Valley",
            des: "Avrupa yatırımlarınız için merkez ülke olarak Polonya'ı tavsiye etmemizin bir çok sebebi var...",
            imgAlt: "Avrupa yatırım",
            imgSource: "https://media.licdn.com/dms/image/D4D22AQEmyFmvKQV8Gw/feedshare-shrink_2048_1536/0/1682516507283?e=1685577600&v=beta&t=iIhj8SkKEMfeDNy7QNeOGGD6uvwEiRtujXlP1sMGJX0",
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