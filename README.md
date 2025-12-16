# Orionex - AI-Powered Digital Solutions

[![Live Site](https://img.shields.io/badge/Live-orionex.site-blue?style=for-the-badge)](https://orionex.site)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

A modern, interactive portfolio website for Orionex showcasing AI & Automation, Web Development, and Embedded & IoT services. Built with cutting-edge web technologies and featuring stunning visual effects including a real-time WebGL galaxy background and advanced 3D animations.

## 🌟 Features

- **WebGL Galaxy Background** - Real-time GPU-accelerated starfield with interactive mouse tracking
- **3D Animated Navigation** - GSAP-powered card navigation with depth and perspective
- **Advanced UI Components** - Custom-built interactive components with smooth animations
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Single Page Application** - Client-side routing with React Router
- **GitHub Pages Deployment** - Automated deployment workflow

## 🚀 Live Demo

Visit [orionex.site](https://orionex.site) to see the project in action.

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Pages](#-pages)
- [Installation](#-installation)
- [Development](#-development)
- [Deployment](#-deployment)
- [License](#-license)

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - Latest React with modern hooks and features
- **Vite 7.2.4** - Next-generation frontend build tool
- **React Router DOM 7.10.1** - Client-side routing

### Animation & Graphics
- **GSAP 3.13.0** - Professional-grade JavaScript animation library
- **Motion 12.23.25** - Modern animation library for React
- **OGL 1.0.11** - Minimal WebGL library for 3D graphics
- **gl-matrix 3.4.4** - High-performance matrix and vector operations

### UI & Icons
- **FontAwesome** - Comprehensive icon library (7.1.0)
- **React Icons 5.5.0** - Popular icon collections

### Development Tools
- **ESLint** - Code linting and quality assurance
- **gh-pages** - Automated GitHub Pages deployment

## 📁 Project Structure

```
orionex-revamped/
├── public/
│   ├── 404.html              # SPA fallback for GitHub Pages
│   └── CNAME                 # Custom domain configuration
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── CardNav.jsx       # Animated navigation menu
│   │   ├── CardSwap.jsx      # 3D card stack component
│   │   ├── CurvedLoop.jsx    # SVG-based curved text marquee
│   │   ├── Galaxy.jsx        # WebGL starfield background
│   │   └── InfiniteMenu.jsx  # 3D rotating disc menu
│   ├── pages/                # Application pages
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # About page
│   │   ├── Contact.jsx       # Contact page
│   │   ├── AIAutomation.jsx  # AI & Automation service page
│   │   ├── WebDevelopment.jsx# Web Development service page
│   │   └── EmbeddedIoT.jsx   # Embedded & IoT service page
│   ├── App.jsx               # Main application component
│   ├── App.css               # Global application styles
│   ├── main.jsx              # Application entry point
│   └── index.css             # Base styles and CSS variables
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── package.json              # Project dependencies
```

## 🧩 Components

### Galaxy Component
**File:** `src/components/Galaxy.jsx`

A WebGL-powered animated galaxy background using custom GLSL shaders. Features include:
- Real-time GPU rendering with OGL
- Custom vertex and fragment shaders
- Interactive mouse tracking with repulsion effect
- Dynamic star generation and twinkling
- Configurable density, speed, and visual parameters
- Automatic camera rotation with smooth transitions

**Key Props:**
- Star density control
- Hue shifting for color variations
- Mouse interaction with repulsion strength
- Auto-centering with configurable behavior
- Transparency support

### CardNav Component
**File:** `src/components/CardNav.jsx`

An innovative navigation menu with 3D card-based design. Features:
- Responsive hamburger menu for mobile
- GSAP-powered animations with stagger effects
- Depth-based card stacking
- Smooth expand/collapse transitions
- External link handling with icons
- Custom color theming

**Key Props:**
- `logoElement` - Custom logo component
- `items` - Navigation menu structure
- `ease` - GSAP easing function
- `baseColor`, `menuColor` - Theming options

### CardSwap Component
**File:** `src/components/CardSwap.jsx`

A 3D card stack with automatic cycling and interactive controls. Features:
- GSAP-based 3D transformations
- Automatic card rotation with customizable timing
- Manual navigation controls (next/prev)
- Perspective-based depth simulation
- Smooth skew animations
- Support for custom card components

**Key Props:**
- `dur` - Animation duration
- `distX`, `distY` - Card spacing configuration
- `skew` - Skew angle for 3D effect
- `autoRotate` - Enable/disable auto-cycling

### CurvedLoop Component
**File:** `src/components/CurvedLoop.jsx`

An SVG-based marquee with curved text path. Features:
- Dynamic text spacing calculation
- Interactive drag functionality
- Configurable curve amount and direction
- Velocity-based momentum
- Seamless looping with proper character spacing

**Key Props:**
- `marqueeText` - Text to display
- `speed` - Animation speed
- `curveAmount` - Curve intensity
- `direction` - Movement direction ('left'/'right')
- `interactive` - Enable/disable drag interaction

### InfiniteMenu Component
**File:** `src/components/InfiniteMenu.jsx`

A 3D rotating disc menu built with WebGL. Features:
- Custom WebGL2 rendering pipeline
- Matrix transformations with gl-matrix
- Quaternion-based rotations
- Interactive camera controls
- Perspective projection
- Instanced rendering for performance

**Technical Details:**
- Vertex and fragment shaders for disc rendering
- Camera manipulation with mouse/touch
- Smooth transitions using easing functions
- Optimized rendering loop

## 📄 Pages

### Home Page
**File:** `src/pages/Home.jsx`

The main landing page featuring:
- Hero section with CurvedLoop component
- Services showcase with icons and descriptions
- Technology stack section using InfiniteMenu
- Development process timeline with CardSwap
- Call-to-action sections
- Contact information

### Service Pages

1. **AI Automation** (`AIAutomation.jsx`)
   - AI/ML capabilities showcase
   - Automation solutions
   - Technology stack and use cases

2. **Web Development** (`WebDevelopment.jsx`)
   - Full-stack development services
   - Modern frameworks and architectures
   - Project examples

3. **Embedded & IoT** (`EmbeddedIoT.jsx`)
   - Hardware integration
   - IoT solutions
   - Embedded systems expertise

### About & Contact
- **About** (`About.jsx`) - Company information and values
- **Contact** (`Contact.jsx`) - Contact form and information

## 💻 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/orionex-revamped.git

# Navigate to project directory
cd orionex-revamped

# Install dependencies
npm install
```

## 🏃 Development

### Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run deploy` - Deploy to GitHub Pages

## 📦 Deployment

The project is configured for deployment to GitHub Pages with custom domain support.

### Automated Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

This will:
1. Run the production build
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make the site available at your configured domain

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains the production build
# Upload to your hosting provider
```

### GitHub Pages Configuration

The project includes:
- Custom 404.html for SPA routing support
- CNAME file for custom domain (orionex.site)
- Automatic redirect script in index.html

## 🎨 Customization

### Theming

Colors and styles can be customized in:
- `src/index.css` - CSS variables and base styles
- `src/App.css` - Global component styles
- Individual component CSS files

### Galaxy Settings

Modify the Galaxy component props in `App.jsx`:
```jsx
<Galaxy
  density={0.8}
  speed={0.5}
  hueShift={0.2}
  glowIntensity={1.5}
/>
```

### Navigation Menu

Update navigation items in `App.jsx`:
```jsx
const navItems = [
  {
    label: "services",
    links: [...]
  }
]
```

## 🔧 Configuration Files

### vite.config.js
Vite build configuration with React plugin

### eslint.config.js
ESLint rules for code quality and consistency

### package.json
Project metadata, dependencies, and scripts

## 🐛 Troubleshooting

### Common Issues

**Issue:** Blank page after deployment
- Check that the `homepage` in package.json matches your domain
- Verify CNAME file contains correct domain
- Check browser console for routing errors

**Issue:** WebGL not working
- Ensure browser supports WebGL2
- Check for hardware acceleration in browser settings
- Verify no extensions are blocking WebGL

**Issue:** Animations not smooth
- Check browser performance/dev tools
- Reduce animation complexity for low-end devices
- Enable hardware acceleration

## 📜 License

This project is private and proprietary to Orionex.

## 👥 Authors

Orionex Development Team

## 🔗 Links

- [Website](https://orionex.site)
- [LinkedIn](https://www.linkedin.com/company/orionex/)
- [GitHub](https://github.com/bsse23094)

---

Built with ❤️ using React, Vite, and cutting-edge web technologies.
