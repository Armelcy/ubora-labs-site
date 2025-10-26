import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-backgroundPrimary">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="text-center space-y-4">
          <div className="text-accentGold text-sm font-medium tracking-wider uppercase">
            UBORA LABS
          </div>
          
          <div className="text-textDim text-sm">
            A technology division of Leukam Group.
          </div>
          
          <div className="text-textDim text-xs pt-4">
            © 2025 Ubora Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer