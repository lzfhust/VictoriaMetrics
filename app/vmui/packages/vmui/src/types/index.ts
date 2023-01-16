import { MetricBase } from "../api/types";

declare global {
  interface Window {
    __VMUI_PREDEFINED_DASHBOARDS__: string[];
  }
}

export type DisplayType = "table" | "chart" | "code";

export interface TimeParams {
  start: number; // timestamp in seconds
  end: number; // timestamp in seconds
  step?: string; // seconds
  date: string; // end input date
}

export interface TimePeriod {
  from: Date;
  to: Date;
}

export interface DataValue {
  key: number; // timestamp in seconds
  value: number; // y axis value
}

export interface DataSeries extends MetricBase{
  metadata: {
    name: string;
  },
  values: DataValue[]; // sorted by key which is timestamp
}

export interface InstantDataSeries {
  metadata: string[]; // just ordered columns
  value: string;
  values: string[] | null
  copyValue: string;
}

export enum ErrorTypes {
  emptyServer = "Please enter Server URL",
  validServer = "Please provide a valid Server URL",
  validQuery = "Please enter a valid Query and execute it",
  traceNotFound = "Not found the tracing information",
  emptyTitle = "Please enter title",
  positiveNumber = "Please enter positive number",
  validStep = "Please enter a valid step"
}

export interface PanelSettings {
  title?: string;
  description?: string;
  unit?: string;
  expr: string[];
  alias?: string[];
  showLegend?: boolean;
  width?: number
}

export interface DashboardRow {
  title?: string;
  panels: PanelSettings[];
}

export interface DashboardSettings {
  title?: string;
  filename: string;
  rows: DashboardRow[];
}

export interface RelativeTimeOption {
  id: string,
  duration: string,
  until: () => Date,
  title: string,
  isDefault?: boolean,
}

export interface TopQuery {
  accountID: number
  avgDurationSeconds: number
  count: number
  projectID: number
  query: string
  timeRangeSeconds: number
  sumDurationSeconds: number
  timeRangeHours: number
}

export interface TopQueryStats {
  "search.queryStats.lastQueriesCount": number
  "search.queryStats.minQueryDuration": string
}

export interface TopQueriesData extends TopQueryStats{
  maxLifetime: string
  topN: string
  topByAvgDuration: TopQuery[]
  topByCount: TopQuery[]
  topBySumDuration: TopQuery[]
}

export interface SeriesLimits {
  table: number,
  chart: number,
  code: number,
}

export interface Timezone {
  region: string,
  utc: string,
  search?: string
}

export interface GraphSize {
  id: string,
  isDefault?: boolean,
  height: () => number
}
