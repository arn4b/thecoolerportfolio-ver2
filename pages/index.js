import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'

export default function Home() {
  return (
    <div className="body">

        <Head>
        <title>Arnab Chatterjee</title>
        </Head>
        
      <Navbar />
      <Landing />
      <About />
    </div>
  )
}
