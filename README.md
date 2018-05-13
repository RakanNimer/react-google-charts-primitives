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

[Demo](https://w6j4v5y3r7.codesandbox.io/)

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

[Demo](https://w6j4v5y3r7.codesandbox.io/)

## All Demos

* [AnnotationChart](https://w6j4v5y3r7.codesandbox.io/AnnotationChart/)
* [AreaChart](https://w6j4v5y3r7.codesandbox.io/AreaChart/)
* [BarChart](https://w6j4v5y3r7.codesandbox.io/BarChart/)
* [BubbleChart](https://w6j4v5y3r7.codesandbox.io/BubbleChart/)
* [Calendar](https://w6j4v5y3r7.codesandbox.io/Calendar/)
* [CandlestickChart](https://w6j4v5y3r7.codesandbox.io/CandlestickChart/)
* [ColumnChart](https://w6j4v5y3r7.codesandbox.io/ColumnChart/)
* [DonutChart](https://w6j4v5y3r7.codesandbox.io/DonutChart/)
* [GanttChart](https://w6j4v5y3r7.codesandbox.io/GanttChart/)
* [GaugeChart](https://w6j4v5y3r7.codesandbox.io/GaugeChart/)
* [GeoChart](https://w6j4v5y3r7.codesandbox.io/GeoChart/)
* [Histogram](https://w6j4v5y3r7.codesandbox.io/Histogram/)
* [LineChart](https://w6j4v5y3r7.codesandbox.io/LineChart/)
* [OrgChart](https://w6j4v5y3r7.codesandbox.io/OrgChart/)
* [PieChart](https://w6j4v5y3r7.codesandbox.io/PieChart/)
* [Sankey](https://w6j4v5y3r7.codesandbox.io/Sankey/)
* [ScatterChart](https://w6j4v5y3r7.codesandbox.io/ScatterChart/)
* [SteppedAreaChart](https://w6j4v5y3r7.codesandbox.io/SteppedAreaChart/)
* [TableChart](https://w6j4v5y3r7.codesandbox.io/TableChart/)
* [TreeMap](https://w6j4v5y3r7.codesandbox.io/TreeMap/)
* [WaterfallChart](https://w6j4v5y3r7.codesandbox.io/WaterfallChart/)
* [WordTree](https://w6j4v5y3r7.codesandbox.io/WordTree/)
