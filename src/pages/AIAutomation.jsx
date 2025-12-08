import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faBrain, faChartLine, faCog, faSearch, faDatabase, faVial, faRocket, faSyncAlt, faFire, faLink, faComments, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import CurvedLoop from '../components/CurvedLoop'
import CardSwap, { Card } from '../components/CardSwap'
import InfiniteMenu from '../components/InfiniteMenu'
import './AIAutomation.css'

function AIAutomation() {
  const capabilities = [
    {
      icon: faBrain,
      title: 'machine learning',
      description: 'Custom ML models trained on your data to provide predictive analytics and intelligent decision-making.'
    },
    {
      icon: faRobot,
      title: 'process automation',
      description: 'Automate repetitive tasks and workflows to increase efficiency and reduce human error.'
    },
    {
      icon: faComments,
      title: 'conversational ai',
      description: 'Intelligent chatbots and virtual assistants that understand natural language and context.'
    },
    {
      icon: faChartLine,
      title: 'predictive analytics',
      description: 'Forecast trends and behaviors to make data-driven decisions with confidence.'
    }
  ]

  const processSteps = [
    {
      icon: faSearch,
      title: 'problem definition',
      description: 'Identify the specific business challenge that AI can solve',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/%3E%3C/svg%3E'
    },
    {
      icon: faDatabase,
      title: 'data collection',
      description: 'Gather and prepare high-quality training datasets',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/%3E%3C/svg%3E'
    },
    {
      icon: faCog,
      title: 'model development',
      description: 'Design and train machine learning models',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/%3E%3C/svg%3E'
    },
    {
      icon: faVial,
      title: 'testing & validation',
      description: 'Evaluate model performance with real-world scenarios',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5V416c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256L352 109.3 402.7 160l-96 96H205.3z"/%3E%3C/svg%3E'
    },
    {
      icon: faRocket,
      title: 'deployment',
      description: 'Integrate the AI solution into your existing systems',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/%3E%3C/svg%3E'
    },
    {
      icon: faSyncAlt,
      title: 'continuous learning',
      description: 'Monitor and improve the model over time',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Crect fill="%23000" width="512" height="512"/%3E%3Cpath fill="%23fff" d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/%3E%3C/svg%3E'
    }
  ]

  const techStack = [
    {
      icon: faLayerGroup,
      title: 'tensorflow',
      description: 'End-to-end open source platform for machine learning'
    },
    {
      icon: faFire,
      title: 'pytorch',
      description: 'Flexible deep learning framework for research and production'
    },
    {
      icon: faRobot,
      title: 'openai',
      description: 'State-of-the-art language models and AI APIs'
    },
    {
      icon: faLink,
      title: 'langchain',
      description: 'Framework for developing applications powered by language models'
    },
    {
      icon: faDatabase,
      title: 'pinecone',
      description: 'Vector database for building high-performance AI applications'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>ai & automation solutions</h1>
          <p>transform your business with intelligent automation and cutting-edge ai technologies.</p>
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
            {capabilities.map((item, index) => (
              <Card key={index}>
                <div className="service-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>
      
      <CurvedLoop 
        marqueeText="ai ✦ machine learning ✦ automation ✦ "
        speed={2}
        curveAmount={300}
        direction="right"
        interactive={true}
      />

      {/* AI Process Section */}
      <section className="ai-process">
        <div className="section-header">
          <h2>our ai development process</h2>
          <p>drag to explore our structured approach to delivering intelligent solutions</p>
        </div>
        
        <div className="process-infinite-menu">
          <InfiniteMenu items={processSteps} />
        </div>
      </section>

      {/* AI Technologies Section */}
      <section className="tech-showcase">
        <div className="section-header">
          <h2>ai technologies we use</h2>
          <p>we leverage cutting-edge tools and frameworks to build powerful ai solutions</p>
        </div>
        
        <div className="ai-tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="ai-tech-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={tech.icon} />
              </div>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
              <div className="pulse-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-cta">
        <div className="ai-cta-card">
          <h2 className="ai-cta-title">ready to transform your business with ai?</h2>
          <p className="ai-cta-text">schedule a free consultation with our ai experts to discuss your project</p>
          <a href="/#contact" className="cta-button">get started</a>
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

export default AIAutomation
