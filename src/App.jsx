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
      <section id="about" className="bg-backgroundPrimary relative">
        <div className="max-w-content mx-auto px-6 py-24">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              Redefining <span className="text-accentGold">African Innovation</span>
            </h2>
            <p className="text-textDim text-xl max-w-3xl mx-auto leading-relaxed">
              We're not just building software — we're crafting the digital infrastructure that will power Africa's next chapter.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto items-center">
            {/* Left column - Enhanced storytelling */}
            <div className="space-y-8">
              <div className="border-l-4 border-accentGold pl-6">
                <h3 className="text-2xl font-bold text-textPrimary mb-4">
                  Why we exist.
                </h3>
                <p className="text-textDim text-lg leading-relaxed">
                  Ubora Labs exists to imagine and engineer the systems that make Africa work better. 
                  We design technology for real people, in real places — blending creativity, code, and courage.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-textPrimary mb-4">
                  Our Approach
                </h3>
                <p className="text-textDim text-lg leading-relaxed">
                  Our work is not about hype. It's about building tools that can outlive us: platforms for education, 
                  infrastructure for trade, systems that respect the realities on the ground.
                </p>
              </div>
              
              <div className="bg-backgroundSecondary rounded-xl p-6 border border-borderSoft">
                <p className="text-accentGold text-xl font-medium italic text-center">
                  "Where hope meets code."
                </p>
              </div>
            </div>
            
            {/* Right column - Impact metrics and vision */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-backgroundSecondary to-gray-800 rounded-2xl p-8 border border-borderSoft">
                <h3 className="text-2xl font-bold text-textPrimary mb-6">
                  Our Impact Vision
                </h3>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accentGold mb-2">1M+</div>
                    <div className="text-textDim text-sm">Lives Impacted Goal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-textDim text-sm">Partner Organizations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">15</div>
                    <div className="text-textDim text-sm">African Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-textDim text-sm">Innovation Labs</div>
                  </div>
                </div>
                
                <p className="text-textDim leading-relaxed">
                  Ubora Labs is an African research and development studio building systems that power education, 
                  commerce, and innovation across the continent. Our philosophy blends curiosity, precision, and 
                  empathy — technology designed for real lives.
                </p>
              </div>
              
              {/* Technology stack showcase */}
              <div className="bg-backgroundSecondary rounded-xl p-6 border border-borderSoft">
                <h4 className="text-lg font-semibold text-textPrimary mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Python', 'AI/ML', 'Cloud', 'Blockchain', 'IoT', 'Mobile'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-accentGold text-backgroundPrimary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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