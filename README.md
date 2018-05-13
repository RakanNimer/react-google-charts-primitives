# React Google Charts Primitives

A small set of React primitives that offer a thin (typed) wrapper around the Google Charts library.

### Installation

```
yarn add react-google-charts-primitives@latest
## OR
npm i --save react-google-charts-primitives@latest
```

### Usage

Start by importing one of the react components provided :

```javascript
import { ChartFromPoints, ChartRenderer } from "react-google-charts";
```

If you're using typescript you can import types for these primitives and many lower level Google Charts ones. Check [the demo source code](./demo/src/charts/) for examples.

### Which component do I use ?!!1?z!

Depends on what you're trying to do :

#### Problem : I have a bunch of points that I want to render as a pretty graph.

#### Use : ChartFromPoints

If you're not interested in powerful features provided by Google Charts then you probably should use `ChartFromPoints` (or another library ?).

[Docs](LINK_TO_DOCS) [Demo](LINK_TO_DEMO)

#### Problem : I want to render some charts with the Google Charts API.

#### Problem : I want to use Google Charts primitives to build complex graphs and/or follow Google Charts docs.

#### Use : ChartRenderer

If you have a React app and want to render and interact with a Google Chart then `ChartRenderer` should make it simpler.

Google Charts offers primitives to build all kind of charts.

The ChartRenderer loads and gives you access to :

* [Google Chart Wrapper](https://developers.google.com/chart/interactive/docs/reference#chartwrapper-class)

* [Google Data Table](https://developers.google.com/chart/interactive/docs/reference#DataTable)

* [Google Visualization Helper: arrayToDataTable](https://developers.google.com/chart/interactive/docs/reference#google.visualization.arraytodatatable)

Typescript typings for these 3 are provided, to try and cut down on time spent searching the docs.

[Docs](LINK_TO_DOCS) [Demo](LINK_TO_DEMO)

## All Examples

* [AnnotationChart](./demo/src/charts/AnnotationChart.tsx)
* [AreaChart](./demo/src/charts/AreaChart.tsx)
* [BarChart](./demo/src/charts/BarChart.tsx)
* [BubbleChart](./demo/src/charts/BubbleChart.tsx)
* [Calendar](./demo/src/charts/Calendar.tsx)
* [CandlestickChart](./demo/src/charts/CandlestickChart.tsx)
* [ColumnChart](./demo/src/charts/ColumnChart.tsx)
* [DonutChart](./demo/src/charts/DonutChart.tsx)
* [GanttChart](./demo/src/charts/GanttChart.tsx)
* [GaugeChart](./demo/src/charts/GaugeChart.tsx)
* [GeoChart](./demo/src/charts/GeoChart.tsx)
* [Histogram](./demo/src/charts/Histogram.tsx)
* [LineChart](./demo/src/charts/LineChart.tsx)
* [OrgChart](./demo/src/charts/OrgChart.tsx)
* [PieChart](./demo/src/charts/PieChart.tsx)
* [Sankey](./demo/src/charts/Sankey.tsx)
* [ScatterChart](./demo/src/charts/ScatterChart.tsx)
* [SteppedAreaChart](./demo/src/charts/SteppedAreaChart.tsx)
* [TableChart](./demo/src/charts/TableChart.tsx)
* [TreeMap](./demo/src/charts/TreeMap.tsx)
* [WaterfallChart](./demo/src/charts/WaterfallChart.tsx)
* [WordTree](./demo/src/charts/WordTree.tsx)
