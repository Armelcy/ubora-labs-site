# Ubora Labs Website

Excellence through Innovation - Official website for Ubora Labs.

## Features

- 🚀 Modern React application built with Vite
- 🎨 Beautiful UI with TailwindCSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🌐 Production-ready for Vercel deployment

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Vercel** - Deployment platform

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment

This project is configured for easy deployment on Vercel:

1. Connect your repository to Vercel
2. Vercel will automatically detect the build settings
3. Deploy with a single click

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Header navigation
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Pillars.jsx     # Core pillars section
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles
```

## Customization

- **Colors**: Update the color palette in `tailwind.config.js`
- **Fonts**: Modify font imports in `src/index.css`
- **Content**: Update component content directly in the respective files
- **Animations**: Customize Framer Motion animations in component files

## License

© 2024 Ubora Labs. All rights reserved.