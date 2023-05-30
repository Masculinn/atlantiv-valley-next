import "../css/globals.css"
import "../css/app.css"

import React from 'react';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp";
import GovernmentIncentive from "@/components/IncentiveComponents";

export default function Incentive() {
    const seo = [
        {
            name: "description",
            content: "Türkiye Cumhuriyeti'nin İş Seyahat Teşvikleri, Türk firmalarının yurt dışındaki iş potansiyellerini değerlendirmeleri için seyahatlerini teşvik etmektedir..."
        },
        {
            name: "keywords",
            content: "Yatırım danışmanlığı Avrupa finans piyasaları portföy yönetimi Varlık yönetimi Yatırım stratejileri Risk yönetimi Yatırım fırsatları Piyasa analizi Hisse senedi piyasaları Tahvil ve bono piyasaları Döviz piyasaları Gayrimenkul yatırımları avrupa'da yatırım avrupa'da danışmanlık yatırım danışmanlığı  Avrupa'da şirket kurma danışmanlığı Avrupa'da iş kurma Şirket kurma süreci Avrupa'da şirket tescili Avrupa pazarına giriş Avrupa iş ortamı Yurtdışında şirket kurma Şirket kurulumu için danışmanlık hizmetleri Vergi avantajları Hukuki gereklilikler İş planı hazırlama Yatırım fırsatları Avrupa Uluslararası işletme hukuku Şirket türleri Bölgesel iş stratejileri Avrupa'da pazar araştırması Rekabet analizi İş büyütme stratejileri Avrupa'da pazarlama ve reklamcılık Yerel düzenlemeler ve uyum Devlet teşvikleri Yatırım teşvikleriİş teşvikleri Ekonomik teşvikler Vergi indirimleri Hibe programlarıDestek programları Kalkınma ajansları Bölgesel teşvikler İhracat teşvikleri Ar-Ge teşvikleri İnovasyon teşvikleri Sanayi teşvikleri İstihdam teşvikleri Enerji verimliliği teşvikleri Çevre dostu teşvikler Tarım ve gıda teşvikleri Eğitim teşvikleri İşletme geliştirme teşvikleri Sektörel teşvikler"
        },
        {
            name:"robots",
            content: "index, follow",
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
        {
            property:"og:video",
            content:"/incentive_video.mp4",
          },
          {
            property:"og:video:secure_url",
            content:"/incentive_video.mp4"
          },
          {
            property:"og:video:width",
            content:"1200"
          },
          {
            property:"og:video:height",
            content:"630"
          },
          {
            name:"twitter:video",
            content:"/incentive_video.mp4"
            },

    ]
    return (
        <div>
            <Head>
                <title>Atlantic Valley | Devlet Teşvikleri</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header />
            <ButtonUp />
            <main>
                <GovernmentIncentive />
            </main>
            <Footer />
        </div>
    )
}