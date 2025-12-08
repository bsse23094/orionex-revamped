import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, 
  faGlobe, 
  faMicrochip, 
  faBolt, 
  faCode, 
  faDatabase, 
  faVials, 
  faBrain,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faSearch,
  faPencilRuler,
  faLayerGroup,
  faFlask,
  faLaptopCode,
  faCheckCircle,
  faRocket,
  faChartLine
} from '@fortawesome/free-solid-svg-icons'
import { 
  faReact, 
  faAngular, 
  faPython, 
  faPhp 
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import CurvedLoop from '../components/CurvedLoop'
import CardSwap, { Card } from '../components/CardSwap'
import InfiniteMenu from '../components/InfiniteMenu'

function Home() {
  const services = [
    {
      icon: faRobot,
      title: 'ai & automation',
      description: 'transform your business with intelligent automation and cutting-edge ai technologies.',
      link: '/ai-automation'
    },
    {
      icon: faGlobe,
      title: 'web development',
      description: 'building high-performance, scalable web applications with modern architectures.',
      link: '/web-development'
    },
    {
      icon: faMicrochip,
      title: 'embedded & iot',
      description: 'smart connected devices and industrial iot solutions with real-time analytics.',
      link: '/embedded-iot'
    }
  ]

  const processSteps = [
    {
      icon: faSearch,
      title: 'requirements definition',
      description: 'we gather clear functional and non-functional requirements to ensure all stakeholders share the same vision.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/%3E%3C/svg%3E'
    },
    {
      icon: faPencilRuler,
      title: 'system design',
      description: 'we design scalable architectures that emphasize maintainability, modularity, and adaptability to future needs.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M482.7 29.3c39-39 102.3-39 141.3 0s39 102.3 0 141.3L527.4 267.3 244.7 484.7c-15.2 12.1-33.7 19.3-53.4 19.3H48c-26.5 0-48-21.5-48-48V312.7c0-19.7 7.2-38.2 19.3-53.4L236.7 76.6 482.7 29.3zM441.4 141.3l22.6-22.6c15.6-15.6 15.6-40.9 0-56.6s-40.9-15.6-56.6 0l-22.6 22.6 56.6 56.6zM64 312.7V432c0 8.8 7.2 16 16 16H200c6.5 0 12.3-3.9 14.8-9.9L336.5 256 256 175.5 73.9 297.2c-6 4.8-9.9 12.3-9.9 19.9z"/%3E%3C/svg%3E'
    },
    {
      icon: faLayerGroup,
      title: 'separation of concerns',
      description: 'we organize components and modules so each has a single, well-defined responsibility, reducing complexity.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M232.5 5.2c14.3-7 31.1-7 45.4 0l192 96c11 5.5 18 16.6 18 28.8s-7 23.3-18 28.8l-192 96c-14.3 7-31.1 7-45.4 0l-192-96C29 153.3 22 142.2 22 130s7-23.3 18-28.8l192-96zm0 244.8c14.3 7 31.1 7 45.4 0l146.1-73L471 205c11 5.5 18 16.6 18 28.8s-7 23.3-18 28.8l-192 96c-14.3 7-31.1 7-45.4 0l-192-96C29 257.3 22 246.2 22 234s7-23.3 18-28.8l47-23.5L232.5 250zm0 122c14.3 7 31.1 7 45.4 0l146.1-73L471 327c11 5.5 18 16.6 18 28.8s-7 23.3-18 28.8l-192 96c-14.3 7-31.1 7-45.4 0l-192-96C29 379.3 22 368.2 22 356s7-23.3 18-28.8l47-23.5L232.5 372z"/%3E%3C/svg%3E'
    },
    {
      icon: faFlask,
      title: 'prototyping',
      description: 'we create interactive prototypes to validate user flows and interface designs before full-scale development.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M288 0H224c-17.7 0-32 14.3-32 32s14.3 32 32 32v96c0 87.4-48.4 163.5-120 203.9V464c0 26.5 21.5 48 48 48H360c26.5 0 48-21.5 48-48V363.9C340.4 323.5 320 247.4 320 160V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 416c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm96-16c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16zm48 16c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16z"/%3E%3C/svg%3E'
    },
    {
      icon: faLaptopCode,
      title: 'implementation',
      description: 'we build clean, modular, and testable codebases following coding standards and best practices.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.7L272 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM160 160l80 48-80 48V160zm144 48l-80-48v96l80-48z"/%3E%3C/svg%3E'
    },
    {
      icon: faCheckCircle,
      title: 'testing & quality assurance',
      description: 'we conduct unit, integration, and performance testing to ensure software reliability and stability.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/%3E%3C/svg%3E'
    },
    {
      icon: faRocket,
      title: 'deployment & integration',
      description: 'we deploy seamlessly using ci/cd pipelines and ensure smooth integration with existing systems.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/%3E%3C/svg%3E'
    },
    {
      icon: faChartLine,
      title: 'monitoring & continuous improvement',
      description: 'we track performance metrics, collect feedback, and continuously refine and optimize the product.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/%3E%3C/svg%3E'
    }
  ]

  const technologies = [
    { icon: faReact, name: 'react', description: 'building dynamic, component-based uis with state-of-the-art hooks architecture.' },
    { icon: faBolt, name: 'next.js', description: 'server-side rendering and static generation for blazing fast web applications.' },
    { icon: faAngular, name: 'angular', description: 'enterprise-scale single-page applications with a robust framework and typescript support.' },
    { icon: faCode, name: 'golang', description: 'high-performance backend services and microservices architecture.' },
    { icon: faPython, name: 'flask', description: 'lightweight api development and rapid prototyping.' },
    { icon: faPython, name: 'django', description: 'secure and scalable web applications using python\'s most powerful framework.' },
    { icon: faPhp, name: 'php', description: 'server-side scripting for dynamic and data-driven websites.' },
    { icon: faDatabase, name: 'mysql', description: 'reliable relational database management for structured data storage.' },
    { icon: faDatabase, name: 'mongodb', description: 'flexible nosql database for high-performance and scalable applications.' },
    { icon: faVials, name: 'software quality assurance', description: 'comprehensive testing strategies ensuring reliability, performance, and maintainability.' },
    { icon: faMicrochip, name: 'stm32', description: 'embedded systems development for iot and industrial applications.' },
    { icon: faBrain, name: 'tensorflow', description: 'custom ml models and ai solutions for complex business problems.' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>ai-powered digital solutions</h1>
          <p>
            we build next-generation applications with cutting-edge ai, 
            responsive web architecture, and embedded systems that push boundaries.
          </p>
          <a href="#contact" className="cta-button">contact us</a>
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

      {/* Curved Text Loop */}
      <CurvedLoop 
        marqueeText="orionex ✦ innovation ✦ technology ✦ "
        speed={2}
        curveAmount={400}
        interactive={true}
      />

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="section-title">about orionex</h2>
          <div className="about-text">
            <p>at orionex, our ai engineers, full-stack developers, and iot specialists push the boundaries of digital innovation.</p>
            <p>we are committed to helping startups and enterprises harness cutting-edge technology.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" id="process">
        <h2 className="section-title">our engineering process</h2>
        <p className="section-subtitle">drag to explore our comprehensive development approach</p>
        <div className="process-infinite-menu">
          <InfiniteMenu items={processSteps} />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies" id="technologies">
        <h2 className="section-title">our tech stack</h2>
        <div className="home-tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="home-tech-card">
              <div className="tech-logo">
                <FontAwesomeIcon icon={tech.icon} />
              </div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title">get in touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>ready to start your project?</h3>
            <p>fill out the form and we'll get back to you within 24 hours</p>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>orionexcorp@gmail.com</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+92 300 9586306</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>dha phase 7, lahore, pakistan</span>
            </div>
          </div>

          <form className="contact-form" action="https://formsubmit.co/orionexcorp@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="form-group">
              <input type="text" name="name" placeholder="your name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="your email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="subject" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="your message" rows="5" required></textarea>
            </div>
            <button type="submit" className="cta-button">send message</button>
          </form>
        </div>
      </section>

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
              <a href="#services">services</a>
              <a href="#about">about</a>
              <a href="#process">our process</a>
              <a href="#contact">contact</a>
            </div>
            <div className="link-group">
              <h4>technologies</h4>
              <a href="#technologies">ai & ml</a>
              <a href="#technologies">web development</a>
              <a href="#technologies">embedded systems</a>
              <a href="#technologies">iot solutions</a>
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

export default Home
