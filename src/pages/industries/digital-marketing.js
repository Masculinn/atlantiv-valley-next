import "../../css/globals.css"
import "../../css/app.css"
import sakura from "../../assets/images/industries/sakura_ref.png"
import santa from "../../assets/images/industries/santa_ref.png"

import React from "react";
import Head from "next/head";
import Header from "@/components/HeaderComponents";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp";
import MainHeader from "@/components/MainHeader";
import Slogan from "@/components/Slogan";
import Steps from "@/components/Steps";
import Referances from "@/components/Referances";
import Graph from "@/components/Graph";

export default function DigitalMarketing() {
    const seo = [
          {
            name:"description",
            content: "Gelişen ve değişen yeni Dünya düzeninde kitlelere hitap etmenin en etkili yollarından birinin Dijital Pazarlama olduğunun farkındayız",
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
        ]
    const steps = [
        {
            text: "Pazarlama hedefleri ve hedef kitleler belirlenir",
            bgColor: "bg-slate-950",
            number: "1"
        },
        {
            text: "Ölçülen pazarlama metriklerine göre içerikler üretilir.",
            bgColor: "bg-slate-950",
            number: "2"
        },
        {
            text: "Bu içerikler, SEO (arama motoru optimizasyonu), SEM (arama motoru pazarlaması) ve bireysel uygulama algoritmalarına göre analiz edilerek paylaşılır.",
            bgColor: "bg-slate-950",
            number: "3"
        },
        {
            text: "Bu içerikler için hedef kitle ve pazar göz önünde bulundurularak reklam kampanyaları düzenlenir.",
            bgColor: "bg-slate-950",
            number: "4"
        },
        {
            text: "Gerekli periyodik analizler hesaplanır ve algoritmik veriler raporlanır. Buna göre stratejiler oluşturulur.",
            bgColor: "bg-slate-950",
            number: "5"
        },
        {
            text: "Pazarda yerinizi almak için,",
            bgColor: "bg-slate-950",
            number: ""
        }
      ]
      const referances = [
        {
            imgSrc: santa,
            imgAlt: "Santa Esmeralda",
            name: "Santa Esmeralda",
            des: "E-ticaret ve dijital pazarlama alanındaki en büyük satış hacmine ulaşan markamız Santa Esmeralda'da bu yıl içerisinde 1  Milyon Dolarlık ciroyu geride bırakırken %96 mutluluk oranı ile 4800 müşteriye Pırlanta El Yapımı Yüzüklerimizle buluşturduk",
            buttonName: "Santa",
            link: "https://www.etsy.com/shop/santaesmeralda"
        },
        {
            imgSrc: sakura,
            imgAlt: "Sakura",
            name: "Sakura",
            des: "Atlantic Valey'e ait olan markalardan biri olan Sakura Garden'da, 2500'den fazla satış ve %98 oranında mutlu müşteri istatisliği ile birlikte ilerliyoruz. Bu markalaşma ve e-ticaret operasyonunu 22'den fazla ülkedeki müşterilerimize ulaştırıyoruz",
            buttonName: "Sakura",
            link: "https://www.etsy.com/shop/SakuraGardens"
        },   
      ]
    return (
        <div>
            <Head>
                <title>Atlantic Valley | Dijital Pazarlama</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header />
            <ButtonUp />
            <main>
                <MainHeader 
                    top="Dijital Çözümler" 
                    main="Gelişen Pazarda Yerinizi Alın"
                    des="Gelişen ve değişen yeni Dünya düzeninde kitlere hitap etmenin en etkili yollarından birinin Dijital Pazarlama olduğunun farkındayiz. Varşova ve İstanbul'daki dijital labimizle markalarımıza dijital pazarlama alanında hizmetler veriyoruz"
                    buttonText="Referanslarımız"
                    textSize ={6}
                    on={true}
                    buttonLink = {"/all-referances"}
                    bgColor={"bg-transparent"}
                    mid={false}
                    mode={false}
                />
            </main>
            <Graph 
                name1="Digital Marketing 436 Million $" 
                name2="Manual Marketing 196 Million $"
                val1={72}
                val2={28}
                worth1={436}
                worth2={196}
                currency={'M'}
                link="Statista Research Department"
                header="Dijital reklamcılık hacminin 2021 yılında 436$ milyon dolar olduğunu biliyor muydunuz?"
                desc="(Bu hacmin 2023'ün son çeyreğinde 602,25 milyar dolara ulaşacağı tahmin ediliyor.)"
              /> 
            <Slogan     
                 title={"Avrupada'ki faaliyetlerinizin %60'ının devlet desteği ile karşılandığını biliyor muydunuz?"}
                 textSize={"5"}
                 textColor1={`text-black`}
                 textColor2={"text-black"}
                 buttonColor={"bg-black"}
                 buttonTextColor={"text-white"}
                 des={"Size en uygun devlet teşviklerinin neler olduğunu öğrenmek ister misiniz?"}
                 buttonText={"Devlet Teşvikleri"}
                 bgColor={"bg-transparent"}
                 route={"/incentive"}
              />
              <Steps steps={steps}/>
              <Referances props={referances}/> 
              <Footer />
        </div>
    )
}