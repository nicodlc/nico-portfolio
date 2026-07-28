import Sidebar from './components/ui/Sidebar'
import TabbedPanel from './components/ui/TabbedPanel'
import Panel from './components/ui/Panel'
import StatsCharts from './components/ui/StatsCharts'
import ContactForm from './components/ui/ContactForm'
import type { TabDefinition } from './components/ui/TabbedPanel'
import './App.css'

const mainTabs: TabDefinition[] = [
  {
    id: 'about',
    label: 'About',
    content: (
      <pre className="bio">
        <h2 style={{color: '#e1deba'}}>Hello there! Welcome to my site :D</h2>
        <p>
          Let me introduce myself. I'm Nicolas, usually going by Nico. I'm a Software dev focused on Platform and AI engineering.
          I've also just recently started my Masters at UT Dallas on Software Engineering. My work sits at the intersection of SWE, Machine
          Learning, and distributed systems. 
        </p>
        <p> </p>
        <p>
          Recently, I've been contributing to AI in the retail space, designing backend services, cloud infrastructure, and helping build 
          agentic workflows to solve real-world problems in a better, more dynamic way :]. My overall experience is centered around the need to
          innovate more with AI and applying it carefully.
        </p>
        <p> </p>
        <p>
          Beyond Software, I'm driven by curiosity and an odd desire to understand data. I find myself reading research papers for fun, whether that is 
          on the ML or DL or AI side of things. 
        </p>
      </pre>
    ),
  },
  {
    id: 'stats',
    label: 'Stats',
    content: <StatsCharts />,
  },
  {
    id: 'research',
    label: 'Research',
    content: (
      <p className="wip">
        🚧 work in progress — currently pursuing a Master's, check back soon
      </p>
    ),
  },
]

function App() {
  return (
    <div className="ide">
      <Sidebar />
      <div className="ide-main">
        <TabbedPanel className="panel--main" tabs={mainTabs} />
        <Panel title="Contact">
          <p className="contact-line">
            {'> reach me: '}
            <a href="mailto:nicodlcv@proton.me">nicodlcv@proton.me</a>
            {' · '}
            <a href="https://github.com/nicodlc" target="_blank" rel="noreferrer">
              github.com/nicodlc
            </a>
            {' · '}
            <a href="https://linkedin.com/in/nicodlcv" target="_blank" rel="noreferrer">
              linkedin.com/in/nico
            </a>
          </p>
          <ContactForm recipient="nicodlcv@proton.me" />
        </Panel>
      </div>
    </div>
  )
}

export default App
