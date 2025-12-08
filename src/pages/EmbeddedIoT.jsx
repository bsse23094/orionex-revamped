import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMicrochip, 
  faNetworkWired, 
  faCube, 
  faIndustry, 
  faHome, 
  faCar, 
  faWifi, 
  faBrain,
  faRobot,
  faSatelliteDish,
  faBroadcastTower,
  faProjectDiagram,
  faTerminal,
  faDatabase,
  faServer
} from '@fortawesome/free-solid-svg-icons'
import { faPython, faLinux, faRaspberryPi } from '@fortawesome/free-brands-svg-icons'
import CardSwap, { Card } from '../components/CardSwap'
import CurvedLoop from '../components/CurvedLoop'
import './EmbeddedIoT.css'

function EmbeddedIoT() {
  const solutions = [
    {
      icon: faMicrochip,
      title: 'embedded systems',
      description: 'Custom firmware and hardware solutions for specialized applications.'
    },
    {
      icon: faNetworkWired,
      title: 'iot connectivity',
      description: 'Connect devices with MQTT, CoAP, and modern communication protocols.'
    },
    {
      icon: faIndustry,
      title: 'industrial iot',
      description: 'Monitor and control industrial equipment with real-time analytics.'
    },
    {
      icon: faCube,
      title: 'edge computing',
      description: 'Process data locally on devices for faster response and reduced latency.'
    }
  ]

  const features = [
    {
      icon: faMicrochip,
      title: 'custom embedded systems',
      description: 'From prototype to production, we design and develop custom embedded solutions tailored to your specific requirements.',
      tags: ['STM32', 'ESP32', 'ARM Cortex']
    },
    {
      icon: faNetworkWired,
      title: 'industrial iot',
      description: 'Monitor and control industrial equipment with real-time data collection and predictive maintenance capabilities.',
      tags: ['Modbus', 'OPC UA', 'MQTT']
    },
    {
      icon: faHome,
      title: 'smart home solutions',
      description: 'Automate and secure your living spaces with our customizable smart home ecosystems.',
      tags: ['Zigbee', 'Z-Wave', 'BLE Mesh']
    },
    {
      icon: faCar,
      title: 'automotive electronics',
      description: 'Advanced telematics, infotainment systems, and vehicle control modules for modern automobiles.',
      tags: ['CAN Bus', 'AutoSAR', 'ISO 26262']
    },
    {
      icon: faWifi,
      title: 'wireless connectivity',
      description: 'Seamless integration of WiFi, Bluetooth, LoRa, and cellular connectivity in your devices.',
      tags: ['LoRaWAN', 'NB-IoT', '5G']
    },
    {
      icon: faBrain,
      title: 'edge ai',
      description: 'Bring machine learning to the edge with optimized models running directly on embedded hardware.',
      tags: ['TinyML', 'TensorFlow Lite', 'OpenMV']
    }
  ]

  const techStack = [
    {
      category: 'hardware platforms',
      icon: faMicrochip,
      items: [
        { icon: faRaspberryPi, name: 'Raspberry Pi', desc: 'Versatile single-board computers for embedded applications' },
        { icon: faMicrochip, name: 'ESP32', desc: 'Low-power IoT chips with WiFi/BLE connectivity' },
        { icon: faMicrochip, name: 'STM32', desc: 'ARM Cortex MCUs for industrial applications' },
        { icon: faRobot, name: 'Arduino', desc: 'Open-source electronics platform for prototyping' }
      ]
    },
    {
      category: 'connectivity',
      icon: faWifi,
      items: [
        { icon: faWifi, name: 'WiFi/Bluetooth', desc: 'Short-range wireless communication' },
        { icon: faSatelliteDish, name: 'LoRaWAN', desc: 'Long-range, low-power IoT networks' },
        { icon: faBroadcastTower, name: '5G/NB-IoT', desc: 'Cellular IoT connectivity' },
        { icon: faProjectDiagram, name: 'Zigbee/Z-Wave', desc: 'Mesh networking for smart homes' }
      ]
    },
    {
      category: 'software',
      icon: faTerminal,
      items: [
        { icon: faLinux, name: 'Embedded Linux', desc: 'Custom Linux distributions for embedded' },
        { icon: faServer, name: 'FreeRTOS', desc: 'Real-time operating system' },
        { icon: faPython, name: 'MicroPython', desc: 'Python for microcontrollers' },
        { icon: faDatabase, name: 'InfluxDB', desc: 'Time-series database for IoT' }
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>embedded & iot solutions</h1>
          <p>smart connected devices and industrial iot solutions with real-time analytics.</p>
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
            {solutions.map((solution, index) => (
              <Card key={index}>
                <div className="service-icon">
                  <FontAwesomeIcon icon={solution.icon} />
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>

      {/* Curved Text Loop */}
      <CurvedLoop 
        marqueeText="iot ✦ embedded systems ✦ hardware ✦ "
        speed={2}
        curveAmount={300}
        interactive={true}
      />

      {/* Features */}
      <section className="iot-features">
        <h2>featured capabilities</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="tech-tags">
                {feature.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack">
        <h2>technology stack</h2>
        <div className="stack-columns">
          {techStack.map((column, index) => (
            <div key={index} className="stack-column">
              <div className="column-header">
                <FontAwesomeIcon icon={column.icon} size="lg" />
                <h3>{column.category}</h3>
              </div>
              <div className="tech-cards">
                {column.items.map((item, i) => (
                  <div key={i} className="tech-card">
                    <FontAwesomeIcon icon={item.icon} />
                    <div className="tech-info">
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="iot-cta">
        <h2>ready to bring your hardware ideas to life?</h2>
        <p>Let's discuss how our embedded and IoT expertise can transform your project from concept to reality.</p>
        <button className="cta-button">start your iot journey</button>
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

export default EmbeddedIoT
