import type { ApexOptions } from 'apexcharts'

export type StatisticType = {
  title: string
  description?: string
  statistic: number
  growth?: number
  prefix?: string
  suffix?: string
}

export type StatisticCardType = {
  icon: string
  variant: string
  background?: {
    color?: string
    icon?: string
    image?: string
  }
} & StatisticType

export type ApexChartType = {
  height: number
  type?: string
  series: any[]
  options: ApexOptions
}

type SessionType = {
  count?: number
  percentage?: number
  trend?: string
}

export type VisitType = {
  channel: string
  sessions: SessionType
  prevPeriod: SessionType
  change: SessionType
}
