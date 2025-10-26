import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ContactBlock from './components/ContactBlock'
import Pillars from './components/Pillars'

function App() {
  return (
    <div className="min-h-screen bg-backgroundPrimary">
      <Navbar />
      <Hero />
      
      {/* Research Section */}
      <section id="research" className="bg-backgroundSecondary">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-textDim text-lg leading-relaxed">
              We explore the intersection of creativity, code, and community — transforming ideas into infrastructure.
            </p>
          </div>
          <Pillars />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="bg-backgroundPrimary">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left column - Why we exist */}
            <div>
              <h2 className="text-3xl font-bold text-textPrimary mb-8">
                Why we exist.
              </h2>
              
              <div className="space-y-6 text-textDim text-lg leading-relaxed">
                <p>
                  Ubora Labs exists to imagine and engineer the systems that make Africa work better. 
                  We design technology for real people, in real places — blending creativity, code, and courage.
                </p>
                
                <p>
                  Our work is not about hype. It's about building tools that can outlive us: platforms for education, 
                  infrastructure for trade, systems that respect the realities on the ground.
                </p>
              </div>
              
              <div className="mt-12">
                <p className="text-accentGold text-lg font-medium">
                  Where hope meets code.
                </p>
              </div>
            </div>
            
            {/* Right column - Ubora vision */}
            <div>
              <h3 className="text-2xl font-bold text-textPrimary mb-8">
                Our Vision
              </h3>
              
              <p className="text-textDim text-lg leading-relaxed">
                Ubora Labs is an African research and development studio building systems that power education, 
                commerce, and innovation across the continent. Our philosophy blends curiosity, precision, and 
                empathy — technology designed for real lives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <ContactBlock />
        <Footer />
      </section>
    </div>
  )
}

export default App