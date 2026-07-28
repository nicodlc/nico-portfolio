import { useState } from 'react'
import type { ReactNode } from 'react'
import Tabs from './Tabs'
import './Panel.css'
import './TabbedPanel.css'

export interface TabDefinition {
  id: string
  label: string
  content: ReactNode
}

interface TabbedPanelProps {
  tabs: TabDefinition[]
  className?: string
}

function TabbedPanel({ tabs, className }: TabbedPanelProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? '')
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0]

  const classes = ['panel-box', 'tabbed-panel', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <Tabs
        tabs={tabs.map(({ id, label }) => ({ id, label }))}
        activeId={activeTab?.id ?? ''}
        onChange={setActiveId}
      />
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`tabpanel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== activeTab?.id}
          className="tabbed-panel__content"
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}

export default TabbedPanel
