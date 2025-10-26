import React from 'react'
import { motion } from 'framer-motion'

const ContactBlock = () => {
  return (
    <section className="bg-backgroundPrimary border-t border-borderSoft">
      <div className="max-w-content mx-auto px-6 py-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            Start a conversation.
          </h2>
          
          <p className="text-textDim text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            If you're building for education, commerce, or infrastructure in Africa and believe 
            technology can unlock the next step — we'd like to hear from you.
          </p>
          
          <div className="space-y-6 text-center">
            <div>
              <p className="text-textDim mb-2">Email:</p>
              <p className="text-accentGold text-lg">
                contact@uboralabs.com <span className="text-textDim text-sm">(coming soon)</span>
              </p>
            </div>
            
            <div className="pt-8 border-t border-borderSoft">
              <p className="text-textDim text-sm">
                Ubora Labs is a technology division of Leukam Group.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactBlock