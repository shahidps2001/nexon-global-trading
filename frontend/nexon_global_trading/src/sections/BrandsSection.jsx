import './BrandsSection.css'

function BrandsSection() {
  return (
    <section className='br-section'>

      {/* HEADER */}
      <div className='br-header'>
        <div className='section-tag'>What We Carry</div>
        <h2 className='section-title'>
          Our <span>Brands</span>
        </h2>
        <div className='section-line'></div>
        <p className='br-subtitle'>
          Authorized and trusted brands we proudly supply across Saudi Arabia.
        </p>
      </div>

      {/* BRAND GRID IMAGE */}
      <div className='br-image-wrap'>
        <img
          src='/brands-grid.jpg'
          alt='Our Brands: Nexon, 3M, DeltaPlus, Fothergill Engineered Fabrics, INCA, Band-IT, Cobra, Eastern Lagoon Fiberglass Factory, Toolgram'
          className='br-image'
        />
      </div>

    </section>
  )
}

export default BrandsSection