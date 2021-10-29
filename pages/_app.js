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

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  <>

  <Head>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <link href="https://unpkg.com/react-custom-scroll@4.3.0/dist/customScroll.css" rel="stylesheet" />


    <title>Arnab Chatterjee</title>
    <link rel="shortcut icon" href="https://maukaedu.s3.ap-south-1.amazonaws.com/favicon.ico" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <link href="//db.onlinewebfonts.com/c/61486c71563f7840de6d1c7e0a2ed07e?family=Cosi+Azure+Bold" rel="stylesheet" type="text/css"/>

    <link href="//db.onlinewebfonts.com/c/961a181da27e7cbc072ec2fb5bbfe2a9?family=Circular+Std+Bold" rel="stylesheet" type="text/css"/> 

    <link href="//db.onlinewebfonts.com/c/27cb2381f8e348c531e19a16b9921082?family=Suisse+Works+Bold" rel="stylesheet" type="text/css"/> 
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
