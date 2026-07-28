import Panel from './Panel'
import './Sidebar.css'

interface TagGroup {
  id: string
  color: 'cyan' | 'green' | 'red' | 'accent' | 'rose'
  items: string[]
}

const tagGroups: TagGroup[] = [
  { id: 'stack', color: 'cyan', items: ['Python', 'TypeScript'] },
  { id: 'infra', color: 'green', items: ['AWS', 'Terraform'] },
  { id: 'framework', color: 'red', items: ['Node', 'Deno', 'Express'] },
  { id: 'deployment', color: 'accent', items: ['CDK', 'Docker'] },
  { id: 'database', color: 'rose', items: ['DynamoDB',  'Neo4J', 'PostgreSQL']}
]

interface EducationEntry {
  id: string
  degree: string
  school: string
  dates: string
  status: 'complete' | 'in-progress'
}

const education: EducationEntry[] = [
  {
    id: 'ms',
    degree: 'M.S. Software Engineering',
    school: 'University Name',
    dates: 'Aug 2026 – Present',
    status: 'in-progress',
  },
  {
    id: 'bs',
    degree: 'B.S. Software Engineering',
    school: 'University Name',
    dates: 'Aug 2022 – May 2025',
    status: 'complete',
  },
  {
    id: 'as',
    degree: 'A.S. Software Engineering',
    school: 'Dallas College',
    dates: 'Jan 2020 – May 2022',
    status: 'complete',
  },
]

function Sidebar() {
  const branchEntries = education.filter((entry) => entry.status === 'in-progress')
  const trunkEntries = education.filter((entry) => entry.status === 'complete')

  return (
    <aside className="sidebar">
      <Panel title="Tags">
        <ul className="tag-list">
          {tagGroups.map((group) => (
            <li key={group.id} className={`tag-line tag-line--${group.color}`}>
              {group.items.map((item) => `#${group.id}:${item}`).join(', ')}
            </li>
          ))}
        </ul>
      </Panel>
      <Panel title="Education">
        <div className="edu-timeline">
          {branchEntries.map((entry) => (
            <div key={entry.id} className="edu-row edu-row--branch">
              <div className="edu-graph">
                <span className="edu-node edu-node--open" aria-hidden="true">
                  ○
                </span>
                <span className="edu-line edu-line--dashed" aria-hidden="true" />
              </div>
              <div className="edu-content">
                <p className="edu-degree">{entry.degree}</p>
                <p className="edu-meta">
                  {entry.school} · {entry.dates} · in progress
                </p>
              </div>
            </div>
          ))}
          {branchEntries.length > 0 && (
            <div className="edu-branch-connector" aria-hidden="true" />
          )}
          {trunkEntries.map((entry, index) => (
            <div key={entry.id} className="edu-row">
              <div className="edu-graph">
                <span className="edu-node" aria-hidden="true">
                  ●
                </span>
                {index < trunkEntries.length - 1 && (
                  <span className="edu-line" aria-hidden="true" />
                )}
              </div>
              <div className="edu-content">
                <p className="edu-degree">{entry.degree}</p>
                <p className="edu-meta">
                  {entry.school} · {entry.dates}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </aside>
  )
}

export default Sidebar
