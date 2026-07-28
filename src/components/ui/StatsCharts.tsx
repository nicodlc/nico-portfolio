import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import type { TooltipContentProps, TooltipValueType } from 'recharts'
import './StatsCharts.css'

interface LanguageSlice {
  name: string
  value: number
  color: string
}

// Placeholder data — swap in real GitHub repo stats when ready.
const languageBreakdown: LanguageSlice[] = [
  { name: 'TypeScript', value:28, color: 'var(--tag-cyan)' },
  { name: 'Python', value: 47, color: 'var(--tag-green)' },
  { name: 'Other', value: 25, color: 'var(--tag-rose)' },
]

interface CommitPoint {
  month: string
  commits: number
}

// Placeholder data — swap in real commit activity when ready.
const commitActivity: CommitPoint[] = [
  { month: 'Mar', commits: 29 },
  { month: 'Apr', commits: 46 },
  { month: 'May', commits: 44 },
  { month: 'Jun', commits: 93 },
  { month: 'Jul', commits: 43 },
]

function ChartTooltip({
  active,
  payload,
  label,
}: TooltipContentProps<TooltipValueType, number | string>) {
  if (!active || !payload || payload.length === 0) return null

  return (
    <div className="chart-tooltip">
      {label !== undefined && <p className="chart-tooltip__label">{label}</p>}
      {payload.map((entry, index) => (
        <p
          key={String(entry.dataKey ?? entry.name ?? index)}
          className="chart-tooltip__row"
          style={{ color: entry.color }}
        >
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  )
}

function StatsCharts() {
  return (
    <div className="stats-charts">
      <div className="stats-chart">
        <p className="stats-chart__caption">#chart:languages</p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Tooltip content={ChartTooltip} />
            <Pie
              data={languageBreakdown}
              dataKey="value"
              nameKey="name"
              innerRadius={52}
              outerRadius={78}
              paddingAngle={3}
              strokeWidth={0}
            >
              {languageBreakdown.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ul className="chart-legend">
          {languageBreakdown.map((entry) => (
            <li key={entry.name} className="chart-legend__item" style={{ color: entry.color }}>
              #lang:{entry.name} {entry.value}%
            </li>
          ))}
        </ul>
      </div>

      <div className="stats-chart">
        <p className="stats-chart__caption">#chart:activity</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={commitActivity} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="commitGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontFamily: 'var(--code)', fontSize: 12, fill: 'var(--text)' }}
              axisLine={{ stroke: 'var(--border)' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontFamily: 'var(--code)', fontSize: 12, fill: 'var(--text)' }}
              axisLine={false}
              tickLine={false}
              width={30}
            />
            <Tooltip
              content={ChartTooltip}
              cursor={{ stroke: 'var(--border)', strokeDasharray: '3 3' }}
            />
            <Area
              type="monotone"
              dataKey="commits"
              stroke="var(--accent)"
              strokeWidth={2}
              fill="url(#commitGradient)"
              dot={{ r: 3, stroke: 'var(--accent)', fill: 'var(--bg)' }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default StatsCharts
