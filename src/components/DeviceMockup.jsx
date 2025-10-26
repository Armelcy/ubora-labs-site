import React from 'react'
import { motion } from 'framer-motion'

const DeviceMockup = () => {
  return (
    <div className="relative max-w-6xl mx-auto mt-16">
      {/* Desktop mockup */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {/* Desktop frame */}
        <div className="bg-gray-800 rounded-t-2xl p-6 shadow-2xl">
          {/* Desktop header */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          
          {/* Desktop screen content */}
          <div className="bg-backgroundSecondary rounded-lg p-8 h-96 relative overflow-hidden">
            {/* Simulated dashboard/interface */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accentGold rounded"></div>
                <span className="text-accentGold font-semibold">UBORA LABS</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-16 h-6 bg-gray-600 rounded"></div>
                <div className="w-16 h-6 bg-gray-600 rounded"></div>
              </div>
            </div>
            
            {/* Simulated charts/data */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4 h-24">
                <div className="w-full h-2 bg-accentGold rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-gray-500 rounded"></div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 h-24">
                <div className="w-full h-2 bg-blue-500 rounded mb-2"></div>
                <div className="w-2/3 h-2 bg-gray-500 rounded"></div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 h-24">
                <div className="w-full h-2 bg-green-500 rounded mb-2"></div>
                <div className="w-1/2 h-2 bg-gray-500 rounded"></div>
              </div>
            </div>
            
            {/* Simulated graph */}
            <div className="bg-gray-700 rounded-lg p-4 h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 300 100">
                <motion.path
                  d="M 0,80 Q 75,20 150,40 T 300,30"
                  stroke="#C6A756"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                />
                <motion.path
                  d="M 0,60 Q 75,40 150,30 T 300,20"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2.5 }}
                />
              </svg>
            </div>
            
            {/* Floating data points */}
            <motion.div
              className="absolute top-16 right-16 bg-accentGold text-backgroundPrimary px-3 py-1 rounded-full text-sm font-semibold"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              +127% Growth
            </motion.div>
            
            <motion.div
              className="absolute bottom-20 left-16 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              Analytics Active
            </motion.div>
          </div>
        </div>
        
        {/* Desktop base */}
        <div className="bg-gray-700 h-8 rounded-b-2xl"></div>
        <div className="bg-gray-600 h-4 w-32 mx-auto rounded-b-lg"></div>
      </motion.div>
      
      {/* Mobile mockup */}
      <motion.div
        className="absolute -bottom-12 -right-8 md:-right-16"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="bg-gray-800 rounded-3xl p-3 shadow-xl w-48">
          {/* Mobile notch */}
          <div className="bg-black rounded-2xl w-20 h-1 mx-auto mb-2"></div>
          
          {/* Mobile screen */}
          <div className="bg-backgroundSecondary rounded-2xl p-4 h-80 relative overflow-hidden">
            {/* Mobile header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-6 h-6 bg-accentGold rounded"></div>
              <div className="text-accentGold text-xs font-semibold">UBORA LABS</div>
              <div className="w-6 h-1 bg-gray-600 rounded"></div>
            </div>
            
            {/* Mobile content */}
            <div className="space-y-3">
              <div className="bg-gray-700 rounded-lg p-3 h-16">
                <div className="w-full h-1 bg-accentGold rounded mb-2"></div>
                <div className="w-3/4 h-1 bg-gray-500 rounded"></div>
              </div>
              <div className="bg-gray-700 rounded-lg p-3 h-16">
                <div className="w-full h-1 bg-blue-500 rounded mb-2"></div>
                <div className="w-2/3 h-1 bg-gray-500 rounded"></div>
              </div>
              <div className="bg-gray-700 rounded-lg p-3 h-24">
                <div className="w-full h-8 bg-gradient-to-r from-accentGold to-blue-500 rounded opacity-30"></div>
              </div>
            </div>
            
            {/* Mobile floating indicator */}
            <motion.div
              className="absolute top-20 right-2 w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default DeviceMockup