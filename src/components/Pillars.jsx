import React from 'react'
import { motion } from 'framer-motion'

const Pillars = () => {
  const pillars = [
    {
      title: "Experiment Boldly.",
      description: "We prototype fast and test in real environments. We learn in days, not quarters."
    },
    {
      title: "Build for Scale.",
      description: "Our systems are designed to last — built for reliability, reach, and growth across Africa."
    },
    {
      title: "Collaborate for Impact.",
      description: "We work with founders, schools, and community builders to turn local problems into durable infrastructure."
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {pillars.map((pillar, index) => (
        <motion.div
          key={index}
          className="bg-backgroundSecondary border border-borderSoft rounded-lg p-6 h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.5 + (index * 0.2),
            ease: "easeOut"
          }}
        >
          <h3 className="text-textPrimary font-medium text-lg mb-3">
            {pillar.title}
          </h3>
          <p className="text-textDim text-sm leading-relaxed max-w-28ch">
            {pillar.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default Pillars