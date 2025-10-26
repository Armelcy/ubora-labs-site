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
      
      {/* Mission & Vision Section */}
      <section id="about" className="bg-backgroundSecondary">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🧭</div>
                <div>
                  <h2 className="text-3xl font-bold text-textPrimary mb-4">Mission</h2>
                  <p className="text-textDim text-lg leading-relaxed">
                    To imagine, engineer, and scale systems that make Africa work better — building tools that bridge creativity, code, and community.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌟</div>
                <div>
                  <h2 className="text-3xl font-bold text-textPrimary mb-4">Vision</h2>
                  <p className="text-textDim text-lg leading-relaxed">
                    A future where African-built technology powers education, commerce, and innovation — systems designed for real people in real places.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Philosophy */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <div className="flex items-start justify-center space-x-4 mb-6">
              <div className="text-4xl">💡</div>
              <h2 className="text-3xl font-bold text-textPrimary">Philosophy</h2>
            </div>
            <div className="space-y-4 text-textDim text-lg leading-relaxed">
              <p>We believe in measured innovation: technology that serves, not dazzles.</p>
              <p>Our work blends rigor with empathy — designing for impact, longevity, and cultural context.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Pillars Section */}
      <section id="pillars" className="bg-backgroundPrimary">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-4xl">🧬</div>
              <h2 className="text-4xl md:text-5xl font-bold text-textPrimary">Core Pillars</h2>
            </div>
          </div>
          <Pillars />
        </div>
      </section>
      
      {/* Values Section */}
      <section className="bg-backgroundSecondary">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-4xl">🧩</div>
              <h2 className="text-4xl md:text-5xl font-bold text-textPrimary">Values</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-backgroundPrimary rounded-xl p-6 border border-borderSoft">
              <h3 className="text-xl font-bold text-textPrimary mb-3">Integrity in Design</h3>
              <p className="text-textDim">Thoughtful, intentional systems — no shortcuts.</p>
            </div>
            <div className="bg-backgroundPrimary rounded-xl p-6 border border-borderSoft">
              <h3 className="text-xl font-bold text-textPrimary mb-3">Empathy in Technology</h3>
              <p className="text-textDim">We build with, not just for, communities.</p>
            </div>
            <div className="bg-backgroundPrimary rounded-xl p-6 border border-borderSoft">
              <h3 className="text-xl font-bold text-textPrimary mb-3">Sustainability</h3>
              <p className="text-textDim">Code and culture should both endure.</p>
            </div>
            <div className="bg-backgroundPrimary rounded-xl p-6 border border-borderSoft">
              <h3 className="text-xl font-bold text-textPrimary mb-3">Precision</h3>
              <p className="text-textDim">Excellence is not speed; it's accuracy with purpose.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Focus Section */}
      <section id="research" className="bg-backgroundPrimary">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-4xl">🧠</div>
              <h2 className="text-4xl md:text-5xl font-bold text-textPrimary">Research Focus</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-backgroundSecondary rounded-xl p-8 border border-borderSoft h-full">
                <h3 className="text-xl font-bold text-textPrimary mb-4">Digital Infrastructure</h3>
                <p className="text-textDim">For education and trade.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-backgroundSecondary rounded-xl p-8 border border-borderSoft h-full">
                <h3 className="text-xl font-bold text-textPrimary mb-4">Scalable Solutions</h3>
                <p className="text-textDim">Cloud and AI solutions tailored for African realities.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-backgroundSecondary rounded-xl p-8 border border-borderSoft h-full">
                <h3 className="text-xl font-bold text-textPrimary mb-4">Open Innovation</h3>
                <p className="text-textDim">Experiments that feed public knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Placeholder */}
      <section id="projects" className="bg-backgroundSecondary">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">Projects</h2>
            <p className="text-textDim text-xl">Coming Soon</p>
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