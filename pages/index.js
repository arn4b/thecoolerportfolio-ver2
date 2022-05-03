import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'
import Tech from '../components/Tech/Tech'
import Experience from '../components/Experience/Experience'
import ReactFlow from '../components/ReactFlow/ReactFlow'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

// import { PopupWidget, InlineWidget  } from "react-calendly";

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

        <meta property="og:title" content="Arnab Chatterjee" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arn4b.vercel.app" />
        <meta property="og:image" content="https://user-images.githubusercontent.com/60937304/142048262-9fa15151-11ff-41cc-9a50-f3086b7cb530.png" />
        <meta property="og:description" content="Arnab Chatterjee | Frontend Developer" />
        </Head>

        

        <Navbar />
        <Landing />
        <About />
        <Experience />
        <ReactFlow />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
        {/* <InlineWidget  url="https://calendly.com/arn4b/30min"/> */}
    </div>
  )
}
