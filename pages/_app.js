import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import "@fontsource/plus-jakarta-sans";
import '../components/Navbar/Navbar.css'
import '../components/Landing/Landing.css'
import '../components/About/About.css'
import '../components/Tech/Tech.css'
import '../components/Experience/Experience.css'
import '../components/Projects/Projects.css'
import '../components/Footer/Footer.css'
import '../components/Contact/Contact.css'
import '../pages/uses/uses.css'

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  <>

  <Head>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <link href="https://unpkg.com/react-custom-scroll@4.3.0/dist/customScroll.css" rel="stylesheet" />


    <title>Arnab Chatterjee</title>

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <link href="//db.onlinewebfonts.com/c/61486c71563f7840de6d1c7e0a2ed07e?family=Cosi+Azure+Bold" rel="stylesheet" type="text/css"/>

    <link rel="preconnect" href="https://fonts.googleapis.com" />

    <link href="https://fonts.googleapis.com/css2?family=Circular Std Bold:wght@100;200;300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 

    <meta property="og:title" content="Arnab Chatterjee" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://arn4b.vercel.app" />
    <meta property="og:image" content="https://user-images.githubusercontent.com/60937304/142048262-9fa15151-11ff-41cc-9a50-f3086b7cb530.png" />
    <meta property="og:description" content="Arnab Chatterjee | Frontend Developer" />
  </Head>

  <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>

  <Script src="https://unpkg.com/scrollreveal"></Script>

  <Script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></Script>

  <Script src="https://unpkg.com/react-custom-scroll@4.3.0/dist/reactCustomScroll.js"></Script>

  <Script src="https://unpkg.com/boxicons@2.0.9/dist/boxicons.js"></Script>

  </>


  return <Component {...pageProps} />
}

export default MyApp
