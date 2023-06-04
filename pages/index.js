import Image from 'next/image'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

function Home() {
  return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
        </>
  )
}

export default Home