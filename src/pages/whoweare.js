import "../css/globals.css"
import "../css/app.css"

import React from "react"
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp";
import WhoWeAreComponents from "@/components/WhoWeAreComponents";

export default function whoweare() {
    const seo = [
        {
          name:"avrupa'da yatırım danışmanlığı",
          content: "Yatırım danışmanlığı Avrupa finans piyasaları portföy yönetimi Varlık yönetimi Yatırım stratejileri Risk yönetimi Yatırım fırsatları Piyasa analizi Hisse senedi piyasaları Tahvil ve bono piyasaları Döviz piyasaları Gayrimenkul yatırımları avrupa'da yatırım avrupa'da danışmanlık yatırım danışmanlığı  Avrupa'da şirket kurma danışmanlığı Avrupa'da iş kurma Şirket kurma süreci Avrupa'da şirket tescili Avrupa pazarına giriş Avrupa iş ortamı Yurtdışında şirket kurma Şirket kurulumu için danışmanlık hizmetleri Vergi avantajları Hukuki gereklilikler İş planı hazırlama Yatırım fırsatları Avrupa Uluslararası işletme hukuku Şirket türleri Bölgesel iş stratejileri Avrupa'da pazar araştırması Rekabet analizi İş büyütme stratejileri Avrupa'da pazarlama ve reklamcılık Yerel düzenlemeler ve uyumu Kurumsallaşma Şirket kuruluşu Şirketleşme süreci Avrupa'da şirket kurma Kurumsal yapının oluşturulması Şirket yönetimi Şirket hukuku Kurumsal finansman Kurumsal yönetim Şirket politikaları Kurumsal strateji Şirket büyütme Şirket satın alma şirket birleşme Şirket sınıflandırması Şirket belgelendirme Şirket tescili Avrupa iş dünyası Avrupa pazar analizi Kurumsallaşma danışmanlığı"
        },
    ]
    return (
        <div>
            <Head>
                <title>Atlantic Valley | Biz Kimiz?</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header />
            <ButtonUp />
            <WhoWeAreComponents />
            <Footer />
        </div>
    )
}