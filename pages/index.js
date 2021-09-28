import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'
import Tech from '../components/Tech/Tech'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="body">
      <AnimatedCursor 
            innerSize={15}
            outerSize={40}
            color='255, 255, 255'
            outerAlpha={0.2}
            innerScale={0.6}
            outerScale={2}
            trailingSpeed={7}/>
        <Head>
        <title>Arnab Chatterjee</title>
        </Head>
        
      <Navbar />
      <Landing />
      <About />
      <Tech />
    </div>
  )
}
