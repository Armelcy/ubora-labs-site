import React from 'react'
import { motion } from 'framer-motion'

const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 800 600" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Constellation network of lines and nodes */}
        <defs>
          <radialGradient id="nodeGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#C6A756" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C6A756" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        
        {/* Connection lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {/* Horizontal connections */}
          <motion.line
            x1="100" y1="150" x2="300" y2="180"
            stroke="#C6A756"
            strokeWidth="1"
            strokeOpacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.line
            x1="300" y1="180" x2="500" y2="160"
            stroke="#C6A756"
            strokeWidth="1"
            strokeOpacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
          <motion.line
            x1="500" y1="160" x2="700" y2="190"
            stroke="#C6A756"
            strokeWidth="1"
            strokeOpacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 2 }}
          />
          
          {/* Vertical connections */}
          <motion.line
            x1="200" y1="100" x2="250" y2="280"
            stroke="#C6A756"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 2.5 }}
          />
          <motion.line
            x1="400" y1="80" x2="420" y2="300"
            stroke="#C6A756"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 3 }}
          />
          <motion.line
            x1="600" y1="120" x2="580" y2="320"
            stroke="#C6A756"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 3.5 }}
          />
          
          {/* Diagonal connections */}
          <motion.line
            x1="150" y1="200" x2="350" y2="120"
            stroke="#C6A756"
            strokeWidth="1"
            strokeOpacity="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, delay: 4 }}
          />
          <motion.line
            x1="450" y1="220" x2="650" y2="140"
            stroke="#C6A756"
            strokeWidth="1"
            strokeOpacity="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, delay: 4.5 }}
          />
        </motion.g>
        
        {/* Network nodes */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5 }}
        >
          {/* Primary nodes */}
          <motion.circle
            cx="100" cy="150" r="3"
            fill="url(#nodeGradient)"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle
            cx="300" cy="180" r="4"
            fill="url(#nodeGradient)"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.circle
            cx="500" cy="160" r="3"
            fill="url(#nodeGradient)"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.circle
            cx="700" cy="190" r="3"
            fill="url(#nodeGradient)"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              duration: 4.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          
          {/* Secondary nodes */}
          <motion.circle
            cx="200" cy="100" r="2"
            fill="#C6A756"
            opacity="0.6"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          <motion.circle
            cx="400" cy="80" r="2"
            fill="#C6A756"
            opacity="0.6"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 5.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          <motion.circle
            cx="600" cy="120" r="2"
            fill="#C6A756"
            opacity="0.5"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 6.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          />
        </motion.g>
      </svg>
    </div>
  )
}

export default BackgroundParticles