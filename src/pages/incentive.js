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