import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import DeviceMockup from './DeviceMockup'

const Hero = () => {
  return (
    <section className="relative bg-backgroundPrimary min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background particles */}
      <BackgroundParticles />
      
      {/* Hero content */}
      <div className="relative z-10 max-w-content mx-auto px-6 py-20">
        {/* Headline section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-hero font-bold text-textPrimary leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Excellence through{' '}
            <span className="text-accentGold">Innovation</span>
          </motion.h1>
          
          <motion.p 
            className="text-textDim text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            At Ubora Labs, we transform visionary ideas into cutting-edge digital solutions. 
            Building the future of technology with precision, creativity, and unwavering dedication to excellence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="bg-accentGold text-backgroundPrimary font-semibold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Discover Our Vision
            </motion.button>
            
            <motion.button
              className="border-2 border-accentGold text-accentGold font-semibold py-4 px-8 rounded-lg text-lg hover:bg-accentGold hover:text-backgroundPrimary transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
        
        {/* Device mockup */}
        <DeviceMockup />
      </div>
    </section>
  )
}

export default Hero