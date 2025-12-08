import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCode, 
  faMobile, 
  faServer, 
  faDatabase, 
  faBolt,
  faShieldAlt,
  faInfinity
} from '@fortawesome/free-solid-svg-icons'
import { 
  faReact, 
  faAngular, 
  faNode, 
  faDocker, 
  faAws,
  faJs
} from '@fortawesome/free-brands-svg-icons'
import CurvedLoop from '../components/CurvedLoop'
import CardSwap, { Card } from '../components/CardSwap'
import { useState } from 'react'
import './WebDevelopment.css'

function WebDevelopment() {
  const [activeTab, setActiveTab] = useState('frontend')

  const services = [
    {
      icon: faCode,
      title: 'frontend development',
      description: 'Modern, responsive interfaces built with React, Angular, and cutting-edge web technologies.'
    },
    {
      icon: faServer,
      title: 'backend systems',
      description: 'Scalable server architecture with Node.js, Python, and cloud-native solutions.'
    },
    {
      icon: faMobile,
      title: 'progressive web apps',
      description: 'Fast, reliable web applications that work offline and feel like native apps.'
    },
    {
      icon: faDatabase,
      title: 'api development',
      description: 'RESTful and GraphQL APIs designed for performance and scalability.'
    }
  ]

  const features = [
    {
      icon: faMobile,
      title: 'responsive design',
      description: 'pixel-perfect designs that adapt seamlessly to all devices and screen sizes.',
      badges: ['css3', 'flexbox', 'grid']
    },
    {
      icon: faBolt,
      title: 'performance optimization',
      description: 'lightning-fast load times with code splitting, lazy loading, and efficient bundling.',
      badges: ['webpack', 'vite', 'turbo']
    },
    {
      icon: faShieldAlt,
      title: 'security first',
      description: 'enterprise-grade security with proper authentication, authorization, and data protection.',
      badges: ['jwt', 'oauth', 'cors']
    },
    {
      icon: faServer,
      title: 'full-stack solutions',
      description: 'end-to-end development from frontend ui to backend apis and database architecture.',
      badges: ['react', 'node.js', 'postgresql']
    }
  ]

  const techStack = {
    frontend: [
      { icon: faReact, name: 'react', description: 'component-based ui library for building interactive interfaces' },
      { icon: faJs, name: 'next.js', description: 'react framework for server-side rendering and static generation' },
      { icon: faAngular, name: 'angular', description: 'comprehensive framework for building enterprise-grade applications' }
    ],
    backend: [
      { icon: faNode, name: 'node.js', description: 'javascript runtime for building scalable network applications' },
      { icon: faCode, name: 'golang', description: 'high-performance language for backend services' },
      { icon: faDatabase, name: 'postgresql', description: 'powerful open-source relational database system' }
    ],
    devops: [
      { icon: faDocker, name: 'docker', description: 'containerization platform for consistent deployments' },
      { icon: faAws, name: 'aws', description: 'cloud platform for scalable hosting and services' },
      { icon: faInfinity, name: 'ci/cd', description: 'automated deployment pipelines for rapid iteration' }
    ]
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>web development services</h1>
          <p>building high-performance, scalable web applications with modern architectures.</p>
        </div>
        <div className="hero-cards">
          <CardSwap
            width={500}
            height={600}
            cardDistance={40}
            verticalDistance={50}
            delay={4000}
            pauseOnHover={true}
            easing="power1"
          >
            {services.map((service, index) => (
              <Card key={index}>
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>
      
      {/* 3D Code Editor Section */}
      <section className="code-editor-section">
        <div className="browser-window">
          <div className="browser-header">
            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="browser-content">
            <div className="code-editor">
              <div className="editor-header">
                <span className="file-name">app.component.ts</span>
              </div>
              <div className="editor-content">
                <pre><code>{`@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-app';
}`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="section-header">
          <h2 className="section-title">our web development expertise</h2>
          <p>we create responsive, seo-optimized web applications that deliver exceptional user experiences.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="tech-badges">
                {feature.badges.map((badge, i) => (
                  <span key={i}>{badge}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <div className="section-header">
          <h2 className="section-title">our web development stack</h2>
          <p>we leverage the best technologies to build robust, scalable web applications.</p>
        </div>
        
        <div className="tech-tabs">
          <div className="tab-header">
            <button 
              className={`tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveTab('frontend')}
            >
              frontend
            </button>
            <button 
              className={`tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
              onClick={() => setActiveTab('backend')}
            >
              backend
            </button>
            <button 
              className={`tab-btn ${activeTab === 'devops' ? 'active' : ''}`}
              onClick={() => setActiveTab('devops')}
            >
              devops
            </button>
          </div>
          
          <div className="tab-content active">
            <div className="tech-items">
              {techStack[activeTab].map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-logo">
                    <FontAwesomeIcon icon={tech.icon} />
                  </div>
                  <h4>{tech.name}</h4>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <h2>ready to build your next web application?</h2>
        <p>let's discuss how we can bring your vision to life with cutting-edge web technologies.</p>
        <a href="/#contact" className="cta-button">get in touch</a>
      </section>

      <CurvedLoop 
        marqueeText="web ✦ development ✦ design ✦ "
        speed={1.5}
        curveAmount={350}
        interactive={true}
      />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>orionex</span>
            <p>ai-powered digital solutions</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>navigation</h4>
              <a href="/#services">services</a>
              <a href="/#about">about</a>
              <a href="/#process">our process</a>
              <a href="/#contact">contact</a>
            </div>
            <div className="link-group">
              <h4>technologies</h4>
              <a href="/#technologies">ai & ml</a>
              <a href="/#technologies">web development</a>
              <a href="/#technologies">embedded systems</a>
              <a href="/#technologies">iot solutions</a>
            </div>
            <div className="link-group">
              <h4>legal</h4>
              <a href="#">privacy policy</a>
              <a href="#">terms of service</a>
              <a href="#">cookie policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 orionex technologies. all systems operational.</p>
        </div>
      </footer>
    </>
  )
}

export default WebDevelopment
