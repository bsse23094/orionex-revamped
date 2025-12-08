import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Galaxy from './components/Galaxy'
import CardNav from './components/CardNav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AIAutomation from './pages/AIAutomation'
import WebDevelopment from './pages/WebDevelopment'
import EmbeddedIoT from './pages/EmbeddedIoT'
import './App.css'

function App() {
  const navItems = [
    {
      label: "services",
      bgColor: "transparent",
      textColor: "#fff",
      links: [
        { label: "ai & automation", ariaLabel: "AI & Automation Services", href: "/ai-automation" },
        { label: "web development", ariaLabel: "Web Development Services", href: "/web-development" },
        { label: "embedded & iot", ariaLabel: "Embedded & IoT Services", href: "/embedded-iot" }
      ]
    },
    {
      label: "company", 
      bgColor: "transparent",
      textColor: "#fff",
      links: [
        { label: "about us", ariaLabel: "About Orionex", href: "/#about" },
        { label: "our process", ariaLabel: "Our Development Process", href: "/#process" },
        { label: "technologies", ariaLabel: "Technologies We Use", href: "/#technologies" }
      ]
    },
    {
      label: "connect",
      bgColor: "transparent", 
      textColor: "#fff",
      links: [
        { label: "get in touch", ariaLabel: "Contact Us", href: "/contact" },
        { label: "linkedin", ariaLabel: "LinkedIn", href: "#" },
        { label: "github", ariaLabel: "GitHub", href: "#" }
      ]
    }
  ];

  // Logo text element that links to home
  const logoElement = (
    <Link 
      to="/"
      style={{ 
        fontFamily: 'Syncopate, sans-serif',
        fontSize: '1.2rem',
        fontWeight: '700',
        textTransform: 'lowercase',
        textDecoration: 'none',
        color: 'white',
        letterSpacing: '0.1em'
      }}
    >
      orionex
    </Link>
  );

  return (
    <Router>
      <div className="app-container">
        {/* Galaxy Background - Mouse Reactive */}
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.2}
          glowIntensity={0.3}
          saturation={0}
          hueShift={0}
          transparent={true}
          speed={0.5}
          twinkleIntensity={0.2}
          repulsionStrength={3}
        />

        {/* Card Navigation */}
        <CardNav
          logoElement={logoElement}
          items={navItems}
          baseColor="rgba(0, 0, 0, 0.8)"
          menuColor="#fff"
          buttonBgColor="transparent"
          buttonTextColor="#fff"
          ease="power3.out"
        />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/embedded-iot" element={<EmbeddedIoT />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        
      </div>
    </Router>
  )
}

export default App
