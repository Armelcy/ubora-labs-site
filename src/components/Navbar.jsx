import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-backgroundPrimary relative z-10">
      <div className="max-w-content mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <div className="flex items-center space-x-3">
            {/* Placeholder for logo - Replace with actual logo */}
            <div className="w-8 h-8 bg-accentGold rounded-sm">
              {/* Ubora Labs gold logo placeholder */}
            </div>
            <span className="text-accentGold font-semibold text-lg tracking-wide">
              UBORA LABS
            </span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#research" className="text-textDim hover:text-textPrimary transition-colors duration-200">
              Research
            </a>
            <a href="#about" className="text-textDim hover:text-textPrimary transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-textDim hover:text-textPrimary transition-colors duration-200">
              Contact
            </a>
            
            {/* Build & Research button */}
            <button className="border border-accentGold text-accentGold px-4 py-2 rounded-full text-sm font-medium hover:bg-accentGold hover:text-backgroundPrimary transition-all duration-200">
              Build & Research
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-textDim hover:text-textPrimary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar