import '../css/app.css'
import '../css/globals.css'
import React from "react";
import Head from 'next/head';
import ContactUsComponent from '@/components/ContactUsComponent';
import Header from '@/components/HeaderComponents';
function ContactUs() {  
    return (
        <div>
          <Head>
            <title>Atlantic Valley | İletişime Geçin</title>
            <meta name="description" content="" />
            <meta property="og:title" content="My Page Title" />
            <meta property="og:description" content="This is the description of my page." />
          </Head>
          <Header />

          <main>
            <ContactUsComponent />
          </main>
        </div>
    );
  }
  
  export default ContactUs;