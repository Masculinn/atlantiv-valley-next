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
            <meta name="description" content="BÜYÜRKEN YANINIZDAYIZ. Atlantic Valley Partners , küresel bir yönetim danışmanlığı firmasıdır. Önde gelen işletmelerin, hükümetlerin ve kurumların güvenilir danışmanıyız." />
            <meta property="og:title" content="BÜYÜRKEN YANINIZDAYIZ" />
            <meta name='robots' content='index, follow'></meta>
          </Head>
          <Header />
          <main>
            <ContactUsComponent />
          </main>
        </div>
    );
  }
  
  export default ContactUs;