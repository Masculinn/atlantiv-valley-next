import "../css/globals.css"
import "../css/app.css"
import carewind from "../assets/images/industries/carewind_ref.png"
import edm from "../assets/images/industries/edm_ref.png"
import masis from "../assets/images/industries/masis_ref.png"
import onur from "../assets/images/industries/onur_ayran_ref.png"
import sakura from "../assets/images/industries/sakura_ref.png"
import santa from "../assets/images/industries/santa_ref.png"


import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp"
import Referances from "@/components/Referances";

export default function AllReferances() {
 
    const referances1 = [
        {
            imgSrc: edm,
            imgAlt: "EDM",
            name: "EDM",
            des: "İş ortaklarımızdan olan EDM Technologies ile birlikte Polanya pazarında bir çok alanda birlikte ilerlemekteyiz. Yazılım ve iş geliştirme kısmında Avrupa pazarında EDM ekibine destek veriyoruz",
            buttonName: "EDM",
            link: ""
        }, 
        {
            imgSrc: sakura,
            imgAlt: "Sakura",
            name: "Sakura",
            des: "Atlantic Valey'e ait olan markalardan biri olan Sakura Garden'da, 2500'den fazla satış ve %98 oranında mutlu müşteri istatisliği ile birlikte ilerliyoruz. Bu markalaşma ve e-ticaret operasyonunu 22'den fazla ülkedeki müşterilerimize ulaştırıyoruz",
            buttonName: "Sakura",
            link: ""
        },
    ]
    const referances2 = [
        {
            imgSrc: masis,
            imgAlt: "MASIS",
            name: "MASIS",
            des: "MASİS ile bir Avrupa Birliği projesinde bir araya gelip kendilerini Polonya Katowice Bolgesindeki Touran Maden İşletmeleri ve GIPH (Polanya İşçi ve İşveren Sendikası) ile buluşturduk. Sektör dinamikleri ve iki ülke arasında kurulabilecek ticari köprüler hakkında fikir alışverişinde bulunduk",
            buttonName: "MASIS",
            link: ""
        },
        {
            imgSrc: santa,
            imgAlt: "SANTA",
            name: "SANTA",
            des: "E-ticaret ve dijital pazarlama alanındaki en büyük satış hacmine ulaşan markamız Santa Esmeralda'da bu yıl içerisinde 1  Milyon Dolarlık ciroyu geride bırakırken %96 mutluluk oranı ile 4800 müşteriye Pırlanta El Yapımı Yüzüklerimizle buluşturduk",
            buttonName: "SANTA",
            link: ""
        },
    ]
    const referances3 = [ 
        {
            imgSrc: carewind,
            imgAlt: "Carewind",
            name: "Carewind",
            des: "Avrupa'da kurumsallaşma ve şirketleşme ayağını tamamladığımız onlarca şirketten biri olan Carewind şirketimizle birlikte Avrupa'daki yolumuza birlikte devam ettik ve kendileriyle birlikte bir çok Enerji Fuarına katılarak kendilerini temsil ettik",
            buttonName: "Carewind",
            link: ""
        },
        {
            imgSrc: onur,
            imgAlt: "Onur",
            name: "Onur",
            des: "Ukrayna'nın süt ürünleri marketinde ilk sıralarda yer alan Onur Ayran ile Polanya pazarına birlikte girdik ve fabrikalaşma kısmında üretim sürecinde, şirketleşme sürecinde ve Polanya pazarında pazarlama sürecinde birlikte ilerliyoruz",
            buttonName: "Onur",
            link: ""
        }
    ]  
    return (
        <div>
            <Head>
                <title>Atlantic Valley | Referanslarımız</title>
                <meta name="Atlantic Valley Referanslarımız" content="Atlantic Valley Referansları" />
            </Head>
            <Header />
            <ButtonUp />
            <main>
                <Referances props={referances1} /> 
                <Referances props={referances2} /> 
                <Referances props={referances3} /> 
            </main>
            <Footer />
        </div>
    )
}