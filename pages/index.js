import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'

export default function Home() {
  return (
    <div className="body">
      <Navbar />
      <Landing />
    </div>
  )
}
