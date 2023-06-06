import "../css/globals.css"
import "../css/app.css"

import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp";
import InvestingComponent from "@/components/InvestingComponent";

export default function Investing() {
    const seo = [
        {
            name: "description",
            content: "Avrupa'da yatırım danışmanlığı"
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
    return (
        <div>
            <Head>
                <title>Atlantic Valley | Avrupa&apos;da Yatırım</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header />
            <ButtonUp />
            <InvestingComponent />
            <Footer />
        </div>
    )
}