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





        {/*Arabian Arrow Section*/}


        <h2 className='clients-partner-divider'>Arabian Arrow Supply & Services Co. Ltd.</h2>

        {/* FEATURED PARTNER — ARABIAN ARROW */}
        <div className='clients-partner-section'>
          <div className='clients-partner-logo-wrap'>
            <img
              src='/arabianarrow.png'
              alt='Arabian Arrow Supply and Services Co. Ltd.'
              className='clients-partner-logo'
            />
          </div>

          <div className='clients-partner-text'>
            <h2 className='clients-page-heading'>
              Arabian Arrow Supply & Services Co. Ltd.
            </h2>
            <p>
              Arabian Arrow Supply & Services Company Limited (ARACO) is
              based in the Eastern Province of Saudi Arabia and is a
              well-established authorized distributor and stockist of
              major international brands including Band-IT, 3M,
              Fothergill, Cobra, and INCA Firestop. Their inventory spans
              stainless steel cable ties, fire barrier sealants, welding
              fire blankets, nylon fasteners, and industrial safety
              equipment for demanding environments across the Kingdom.
            </p>
            <p>
              <strong>Nexon Global Trading is proud to partner with
              Arabian Arrow</strong> to bring their trusted range of
              industrial fastening, fire protection, and safety products
              to our clients with full authorization and support.
            </p>
          </div>
        </div>

        {/* PARTNERSHIP IN ACTION — ARABIAN ARROW */}
        <div className='clients-visit-section'>
          <h2 className='clients-page-heading center'>
            Partnership in Action
          </h2>
          <p className='clients-visit-intro'>
            Our team meets regularly with Arabian Arrow Supply & Services
            to coordinate distribution, review product training, and
            strengthen our working relationship.
          </p>

          <div className='clients-visit-grid'>
            <div className='clients-visit-card'>
              <img
                src='/arabianarrow1.jpeg'
                alt='Nexon Global Trading and Arabian Arrow Supply & Services teams meeting'
              />
              <p className='clients-visit-caption'>
                Nexon Global Trading and Arabian Arrow Supply & Services
                representatives during a partnership meeting.
              </p>
            </div>

            <div className='clients-visit-card'>
              <img
                src='/arabianarrow2.jpeg'
                alt='Nexon Global Trading and Arabian Arrow Supply & Services collaboration'
              />
              <p className='clients-visit-caption'>
                Nexon Global Trading and Arabian Arrow Supply & Services
                teams coordinating on product distribution.
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT CATALOG — ARABIAN ARROW */}
        <div className='clients-catalog-section'>
          <h2 className='clients-page-heading center'>
            Products We Distribute
          </h2>

          <div className='clients-catalog-grid'>
            <div className='clients-catalog-card'>
              <img
                src='https://www.arabianarrow.com.sa/web/image/122303-d76a9da6/Band-%20IT%20Products.png'
                alt='Band-IT Stainless Steel Cable Ties, Straps and Clamps'
              />
              <div className='clients-catalog-caption'>
                <h3>Band-IT Stainless Steel</h3>
                <p>Cable ties, strapping, clamps, banding, buckles, and ID tag systems built for corrosion resistance and extreme temperatures.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img
                src='https://www.arabianarrow.com.sa/web/image/122323-320d1dc5/3M%20Products.png'
                alt='3M Fire Barrier Sealant Products'
              />
              <div className='clients-catalog-caption'>
                <h3>3M Fire Barrier Sealant</h3>
                <p>Industry-leading firestop systems engineered for penetrations, joints, and protective wraps to halt fire, smoke, and toxic gases.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img
                src='https://www.arabianarrow.com.sa/web/image/122349-7e246030/Fothergill%20Fire%20Blanket%20products.png'
                alt='Fothergill Welding Fire Blanket'
              />
              <div className='clients-catalog-caption'>
                <h3>Fothergill Fire Blanket</h3>
                <p>Premium welding fire blankets and high-temperature thermal insulation fabrics for protection against sparks, molten metal, and welding slag.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img
                src='https://www.arabianarrow.com.sa/web/image/122370-aa320e41/cobra%20cable%20tie%20products.png'
                alt='Cobra Nylon Cable Tie and Adhesive Mounts'
              />
              <div className='clients-catalog-caption'>
                <h3>Cobra Cable Tie & Adhesive Mounts</h3>
                <p>Premium nylon cable ties and high-strength self-adhesive mounts for secure, tool-free cable routing and wire management.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img
                src='https://www.arabianarrow.com.sa/web/image/122416-d2536ce2/MVL%20INCA%20Firestop.png'
                alt='INCA Firestop Fireproof Duct Wrap'
              />
              <div className='clients-catalog-caption'>
                <h3>INCA Firestop Duct Wrap</h3>
                <p>Lightweight, non-combustible ceramic fibre duct wrap for cable trays, metal conduits, and ventilation ducts.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img
                src='https://www.arabianarrow.com.sa/web/image/122418-bb84dd71/3M%E2%84%A2%20Interam%20Endothermic%20Mat.png'
                alt='3M Interam Endothermic Mat'
              />
              <div className='clients-catalog-caption'>
                <h3>3M Interam Endothermic Mat</h3>
                <p>Heat-absorbing wrap system protecting structural steel, electrical circuitry, and wall penetrations against severe fire risk.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img
                src='https://www.arabianarrow.com.sa/web/image/126033-c32d6a30/dymo%20img.jpg'
                alt='DYMO Rhino M1011 Embossing Machine'
              />
              <div className='clients-catalog-caption'>
                <h3>DYMO Rhino M1011</h3>
                <p>Rugged embossing machine producing permanent metal labels for equipment identification and asset tracking.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img
                src='https://www.arabianarrow.com.sa/web/image/127446-913179c7/coastal_safety_helmet_saudi.png'
                alt='Coastal Arabia Premium Safety Helmet'
              />
              <div className='clients-catalog-caption'>
                <h3>Coastal Arabia Safety Helmet</h3>
                <p>Premium HDPE safety helmet tested for high temperatures, certified to ANSI/ISEA Z89.1-2014 Type I, Class E, G, and C.</p>
              </div>
            </div>

            <div className='clients-catalog-card'>
              <img
                src='https://www.arabianarrow.com.sa/web/image/131606-cbad241a/INCA%20fire%20barrier%20inss440.png'
                alt='INCA Fire Barrier INSS440 Sealant'
              />
              <div className='clients-catalog-caption'>
                <h3>INCA Fire Barrier INSS440</h3>
                <p>Acrylic-based firestop sealant offering up to 3 hours of fire resistance for cable, pipe, and wall penetrations.</p>
              </div>
            </div>
          </div>


          {/* TRUSTED BY / MAJOR CLIENTS */}
          <div className='clients-trusted-section1'>
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
    </div>
  )
}

export default OurClients