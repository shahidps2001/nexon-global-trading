import React from 'react'
import './Home.css'
import Hero from '../sections/Hero'
import ProductHighlights from '../sections/ProductHighlights'
import AboutSection from '../sections/AboutSection'
import ServicesSection from '../sections/ServicesSection'
import Location from '../sections/Location'
import LetUsKnow from '../sections/LetUsKnow'
import PartnersSection from '../sections/PartnersSection'
import BrandsSection from '../sections/BrandsSection'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <ProductHighlights />
      <PartnersSection />
      <BrandsSection />
      <AboutSection />
      <ServicesSection />
      <Location />
      <LetUsKnow />
    </div>
  )
}

export default Home