import React from 'react'

function App() {
  return (
    <div style={{ 
      backgroundColor: '#0A1630', 
      color: '#FFFFFF', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '20px' }}>
        Whiteboard Tomorrow
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#9CA3AF' }}>
        Ubora Labs is an African R&D studio moving ideas from byte to impact.
      </p>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p style={{ color: '#C6A756' }}>
          If you can see this, React is working!
        </p>
      </div>
    </div>
  )
}

export default App