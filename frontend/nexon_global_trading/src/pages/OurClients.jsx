import React from 'react'
import './OurClients.css'

function OurClients() {

  return (
    <div className='clients-page'>

      {/* HERO BANNER */}
      <div className='clients-page-banner'>
        <div className='clients-page-banner-content'>
          <div className='section-tag'>Our Network</div>
          <h1 className='clients-page-title'>
            Our Major <span>Clients & Partners</span>
          </h1>
          <div className='section-line'></div>
          <p className='clients-page-subtitle'>
            Nexon Global Trading is proud to be the authorized distribution
            partner for Eastern Lagoon Fiberglass Factory, bringing
            certified fiberglass solutions to projects across the Kingdom
            of Saudi Arabia.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className='clients-page-container'>

        {/* FEATURED PARTNER */}
        <div className='clients-partner-section'>
          <div className='clients-partner-logo-wrap'>
            <img
              src='/eastern-lagoon-logo.jpg'
              alt='Eastern Lagoon Fiberglass Factory'
              className='clients-partner-logo'
            />
          </div>

          <div className='clients-partner-text'>
            <h2 className='clients-page-heading'>
              Eastern Lagoon Fiberglass Factory
            </h2>
            <p>
              Eastern Lagoon Fiberglass Factory is one of the Eastern
              Province's leading manufacturers of fiberglass (FRP)
              products, engineered to ASTM C582 standards and backed by
              a 25-year warranty. Their range covers water tanks, sewage
              tanks, custom industrial tanks, roofing sheets, portable
              toilets, and more.
            </p>
            <p>
              <strong>Nexon Global Trading holds the official
              distribution rights</strong> for Eastern Lagoon Fiberglass
              Factory's products, allowing us to market, sell, and
              support their full product line legally across our
              network of clients and projects.
            </p>
          </div>
        </div>


                {/* PARTNERSHIP IN ACTION */}
        <div className='clients-visit-section'>
          <h2 className='clients-page-heading center'>
            Partnership in Action
          </h2>
          <p className='clients-visit-intro'>
            Our team regularly meets with Eastern Lagoon Fiberglass
            Factory to review production standards, inspect new
            facilities, and strengthen our partnership.
          </p>

          <div className='clients-visit-grid'>
            <div className='clients-visit-card'>
              <img
                src='/sajidkka1.jpeg'
                alt='Nexon Global Trading and Eastern Lagoon Fiberglass Factory teams during a facility visit'
              />
              <p className='clients-visit-caption'>
                Nexon Global Trading and Eastern Lagoon Fiberglass Factory
                representatives during a site visit to the production
                facility.
              </p>
            </div>

            <div className='clients-visit-card'>
              <img
                src='/sajidkka2.jpeg'
                alt='Nexon Global Trading and Eastern Lagoon Fiberglass Factory teams during a partnership meeting'
              />
              <p className='clients-visit-caption'>
                Nexon Global Trading and Eastern Lagoon Fiberglass Factory
                teams during a partnership review meeting.
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT CATALOG */}
        <div className='clients-catalog-section'>
          <h2 className='clients-page-heading center'>
            Products We Distribute
          </h2>

          <div className='clients-catalog-grid'>
            <div className='clients-catalog-card'>
              <img src='/catalog-water-tank.jpg' alt='Fiberglass Water Tank' />
              <div className='clients-catalog-caption'>
                <h3>Fiberglass Water Tank</h3>
                <p>Corrosion, UV, and weather resistant storage tanks for residential, commercial, and industrial use. 25-year warranty, all custom sizes available.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img src='/catalog-sewage-tank.jpg' alt='Fiberglass Sewage Tank' />
              <div className='clients-catalog-caption'>
                <h3>Fiberglass Sewage Tank</h3>
                <p>Leak-proof, odour-free sewage tanks built for underground installation with robust, long-lasting construction.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img src='/catalog-industrial.jpg' alt='Custom Tanks and Industrial Applications' />
              <div className='clients-catalog-caption'>
                <h3>Custom Tanks & Industrial Solutions</h3>
                <p>Tailor-made tanks for chemical storage and high-temperature fluids, plus pipes, ducts, cladding, portable toilets, roofing sheets, and AC covers.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img src='/catalog-services.jpg' alt='Consultation, Design and After-Sales Support' />
              <div className='clients-catalog-caption'>
                <h3>Consultation & After-Sales Support</h3>
                <p>Expert engineering guidance to select and tailor the right product, plus full installation, maintenance, and repair support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* TRUSTED BY / MAJOR CLIENTS */}
        <div className='clients-trusted-section'>
          <h2 className='clients-page-heading center'>
            Trusted Across Leading Industries
          </h2>
          <p className='clients-trusted-intro'>
            Through our partnership with Eastern Lagoon Fiberglass
            Factory, our fiberglass solutions have supported projects for
            some of Saudi Arabia's most respected organizations.
          </p>

          <div className='clients-trusted-logo-wrap'>
            <img
              src='/trusted-clients.jpg'
              alt='Saudi Aramco, SABIC, Saudi Electricity Company, Royal Commission for Jubail and Yanbu, NEOM, Sika, Sinopec'
              className='clients-trusted-logo-img'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurClients