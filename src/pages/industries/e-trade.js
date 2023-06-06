import "../../css/globals.css"
import "../../css/app.css"
import sakura from "../../assets/images/industries/sakura_ref.png"
import santa from "../../assets/images/industries/santa_ref.png"

import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp";
import MainHeader from '@/components/MainHeader';
import Graph from "@/components/Graph";
import Referances from "@/components/Referances";
import Steps from "@/components/Steps";
import TrailText from "@/components/TrailText";

export default function ETrade() {
    const seo = [
          {
              name:"description",
              content: "E-Ticaret Dunyası, insanların bildiğinin aksine pasif gelir kaynağı olmadığını çok daha kapsamlı ve geniş bir operasyon olduğunun farkındayız."
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
      const steps = [
        {
            text: "Markanın vizyonunun, misyonunun ve ürünlerinin analiz edilerek dijital pazar yerinin seçilmesi.",
            header: "Pazar Yeri Seçimi",
            bgColor: "bg-slate-950",
            number: "1"
        },
        {
            text: "Gerek markanın copyright hakkının alınması, gerekse vergi maaliyetlerine göre marka için uygun ülkeye şirket açılması. (Bizim önerimiz USA, Wyoming)",
            header: "Şirket Açımı Ve Hak Alımı",
            bgColor: "bg-slate-950",
            number: "2"
        },
        {
            text: "Operasyon ihtiyaçlarına göre depo, lojistik ve kargo servislerinin tanımlanması. Buradaki en önemli mali kısmın ihracat teşviklerinden yararlanmak olduğunu düşünüyoruz.",
            header: "Gereksinimlerin Tanımlanması",
            bgColor: "bg-slate-950",
            number: "3"
        },
        {
            text:"Sağlanan belge, evrak ve operasyonel aşamalardan sonra dijital pazar yeri veya yerlerine marka başvurusu ve hesapların açılması.",
            header: "Marka Başvurusu Ve Hesap Açımı",
            bgColor: "bg-slate-950",
            number: "4"
        },
        {
            text:"Artık markanız operasyonel süreçleri ile birlikte e-ticarete hazırdır.",
            header: "Artık Hazırsınız!",
            bgColor: "bg-slate-950",
            number: "5"
        },
        {
            text: "E-Ticaret Operasyonel Süreçleri",
            bgColor: "bg-slate-950",
            number: ""
        }
      ]
      const texts = [
        "Dijitalde ","Dönüşümün","Kritiği,","E-ticaret!"
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
                <title>Atlantic Valley | E-TİCARET</title>
               {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header />
            <ButtonUp />
            <main>
                <MainHeader 
                    top="E Ticaret" 
                    main="Milyarlarca dolarlık işlem hacmiyle..."
                    des="E-Ticaret Dunyasi, insanların bildiğinin aksine pasif gelir kaynağı olmadığını çok daha kapsamlı ve geniş bir operasyon olduğunun farkındayız. Tedarik zinciri planlamasından maliyet kazançlı depo fikrine, depodan marka copyright işlemlerine kadarki bütün alt elementleri ile markalarımıza profesyonel hizmetler veriyoruz."
                    buttonText="Referanslarımız"
                    on={true}
                    textSize={6}
                    buttonLink = {"/all-referances"}
                    marginTop = {24}
                />
            </main>
            <Graph 
                name2="2019 e-ticaret 578 Trillion $" 
                name1="2021 e-ticaret 870 Trillion $"
                val1={72}
                val2={28}
                worth2={578}
                worth1={870}
                currency={'T'}
                link="Euromonitor International"
                header="Global e-ticaret hacminin 2016-2020 yılları arasında yıllık ortalama büyüme oranı %21 ile toplam 2,5 Trilyon Dolardır"
                desc="2019-2021 Amerika'daki toplam parekende satışların içindeki e-ticaret hacmi"

            /> 
            {/* <Graph 
                name1="2019" 
                name2="2021"
                val1={57}
                val2={87}
                worth1={578}
                worth2={870}
                currency={'T'}
                link="Euromonitor International"
                header="Global e-ticaret hacminin 2016-2020 yılları arasında yıllık ortalama büyüme oranı %21 ile toplam 2,5 Trilyon Dolardır"
                desc="2019-2021 Amerika'daki toplam parekende satışların içindeki e-ticaret hacmi"
            /> */}  
            <Referances props={referances}/> 
            <Steps steps={steps}/>
            <TrailText texts={texts}/>
            <Footer />
        </div>
      )
}