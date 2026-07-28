import { useRef } from 'react'
import type { KeyboardEvent } from 'react'
import './Tabs.css'

export interface TabMeta {
  id: string
  label: string
}

interface TabsProps {
  tabs: TabMeta[]
  activeId: string
  onChange: (id: string) => void
}

function Tabs({ tabs, activeId, onChange }: TabsProps) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const focusTab = (index: number) => {
    const tab = tabs[index]
    if (!tab) return
    onChange(tab.id)
    tabRefs.current[index]?.focus()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault()
        focusTab((index + 1) % tabs.length)
        break
      case 'ArrowLeft':
        event.preventDefault()
        focusTab((index - 1 + tabs.length) % tabs.length)
        break
      case 'Home':
        event.preventDefault()
        focusTab(0)
        break
      case 'End':
        event.preventDefault()
        focusTab(tabs.length - 1)
        break
      default:
        break
    }
  }

  return (
    <div className="tabs" role="tablist" aria-label="Main sections">
      {tabs.map((tab, index) => {
        const isActive = tab.id === activeId
        return (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[index] = el
            }}
            role="tab"
            type="button"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            className={`tabs__tab${isActive ? ' tabs__tab--active' : ''}`}
            onClick={() => onChange(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
