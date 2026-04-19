import React from 'react'
import './Home.css'
import Hero from '../sections/Hero'
import ProductHighlights from '../sections/ProductHighlights'
import AboutSection from '../sections/AboutSection'
import ServicesSection from '../sections/ServicesSection'
import Location from '../sections/Location'
import LetUsKnow from '../sections/LetUsKnow'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <ProductHighlights />
      <AboutSection />
      <ServicesSection />
      <Location />
      <LetUsKnow />
    </div>
  )
}

export default Home