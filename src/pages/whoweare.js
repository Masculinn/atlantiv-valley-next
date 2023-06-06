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
            name: "description",
            conent: "Biz Kimiz? Atlantic Valley Partner kimdir?"
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