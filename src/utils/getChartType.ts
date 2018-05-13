import { GoogleChartWrapperChartType } from "../types";

const supportedChartTypes = [
  "AnnotationChart",
  "AreaChart",
  "BarChart",
  "BubbleChart",
  "Calendar",
  "CandlestickChart",
  "ColumnChart",
  "ComboChart",
  "DiffChart",
  "DonutChart",
  "Gantt",
  "Gauge",
  "GeoChart",
  "Histogram",
  "LineChart",
  "Map",
  "OrgChart",
  "PieChart",
  "Sankey",
  "ScatterChart",
  "SteppedAreaChart",
  "Table",
  "TreeMap",
  "WaterfallChart",
  "WordTree"
];

export const getChartType = (chartName: string) => {
  if (supportedChartTypes.indexOf(chartName) > -1) {
    return chartName;
  }
  console.error(
    `Could not find chartType : ${chartName}. Defaulting to ScatterChart`
  );
  return "ScatterChart";
};
