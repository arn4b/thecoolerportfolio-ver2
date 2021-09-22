import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import "@fontsource/plus-jakarta-sans";
import '../components/Navbar/Navbar.css'
import '../components/Landing/Landing.css'
import '../components/About/About.css'

import React, { useEffect } from 'react'
import AOS from "aos";
import Head from 'next/head'
import Script from 'next/script'
import "aos/dist/aos.css"


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      startEvent: 'load',
      once: false,
    })

    window.addEventListener(`load`, AOS.refresh());
  }, []);
  <>

  <Head>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

    <title>Arnab Chatterjee</title>
    <link rel="shortcut icon" href="https://maukaedu.s3.ap-south-1.amazonaws.com/favicon.ico" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>

  <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>

  </>


  return <Component {...pageProps} />
}

export default MyApp
