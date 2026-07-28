import type { ReactNode } from 'react'
import './Panel.css'

interface PanelProps {
  title: string
  children?: ReactNode
  className?: string
}

function Panel({ title, children, className }: PanelProps) {
  const classes = ['panel-box', 'panel', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <span className="panel__legend">{title}</span>
      {children}
    </div>
  )
}

export default Panel
