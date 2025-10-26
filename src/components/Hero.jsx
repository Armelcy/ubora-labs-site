import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

const Hero = () => {
  return (
    <section className="relative bg-backgroundPrimary min-h-screen flex flex-col justify-center">
      {/* Background particles */}
      <BackgroundParticles />
      
      {/* Hero content */}
      <div className="relative z-10 max-w-content mx-auto px-6 py-20">
        {/* Headline section */}
        <div className="text-center">
          <motion.h1 
            className="text-hero font-bold text-textPrimary leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Whiteboard Tomorrow
          </motion.h1>
          
          <motion.p 
            className="text-textDim text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Ubora Labs is an African R&D studio moving ideas from byte to impact.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Hero