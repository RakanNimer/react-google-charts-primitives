export type ChartFromPointsPoint = {
  x: any;
  y: any;
  label: any;
  type?: string;
};

export type ChartFromPointsProps = {
  type: string;
  options?: GoogleChartOptions;
  points?: Array<ChartFromPointsPoint>;
  containerId?: string;
  onReady?: () => any;
  onError?: () => any;
  onSelect?: (selection: any) => any;
};

export interface ChartWrapperProps {
  chartType: GoogleChartWrapperChartType;
  containerId?: string;
  options?: GoogleChartOptions;
  dataTable?: {};
  dataSourceUrl?: string;
  query?: string;
  refreshInterval?: number;
  view?: any[] | {};
  render?: (props: ChartWrapperProps, chartWrapper: GoogleChartWrapper) => any;
  children?: (
    props: ChartWrapperProps,
    chartWrapper: GoogleChartWrapper
  ) => any;
  onReady?: (
    chartWrapper: GoogleChartWrapper,
    dataTable: GoogleDataTable,
    arrayToDataTable: GoogleArrayToDataTable
  ) => any;
}

export type VizEventsProps = {
  chartWrapper: GoogleChartWrapper;
  onReady?: (chartWrapper: GoogleChartWrapper) => any;
  onError?: (chartWrapper: GoogleChartWrapper) => any;
  onSelect?: (selection: Array<{ row?: any; column?: any }>) => any;
  render?: (props: VizEventsProps, chartWrapper: GoogleChartWrapper) => any;
  children?: (props: VizEventsProps, chartWrapper: GoogleChartWrapper) => any;
};

export type ChartFromDataTableProps = {
  dataTable: any[][];
  options: GoogleChartOptions;
  containerId?: string | undefined;
  type: string;
};

export type GoogleChartLoaderProps = {
  window?: any;
  version?: string | GoogleChartVersion;
  language?: string;
  packages?: GoogleChartPackages[];
  mapsApiKey?: string;
  render: (propsAndState: GoogleChartLoaderPropsAndState) => any;
  renderChart?: (propsAndState: GoogleChartLoaderPropsAndState) => any;
  renderLoader?: (propsAndState: GoogleChartLoaderPropsAndState) => any;
  renderError?: (propsAndState: GoogleChartLoaderPropsAndState) => any;
};

export type GoogleChartLoaderPropsAndState = {
  props: GoogleChartLoaderProps;
  state: GoogleChartLoaderState;
};

export type GoogleChartLoaderState = {
  isLoaded: boolean;
  isLoading: boolean;
  hasErrored: boolean;
  errorMessage: string;
};

/* 
*
* <GoogleChartsTypes>
*
*/

/* 
*
* Reference + Docs: 
* https://developers.google.com/chart/interactive/docs/reference#constructor_3
* https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
*
*/
export enum GoogleChartWrapperChartType {
  AnnotationChart = "AnnotationChart",
  AreaChart = "AreaChart",
  BarChart = "BarChart",
  BubbleChart = "BubbleChart",
  Calendar = "Calendar",
  CandlestickChart = "CandlestickChart",
  ColumnChart = "ColumnChart",
  ComboChart = "ComboChart",
  DiffChart = "DiffChart",
  DonutChart = "DonutChart",
  Gantt = "Gantt",
  Gauge = "Gauge",
  GeoChart = "GeoChart",
  Histogram = "Histogram",
  LineChart = "LineChart",
  Map = "Map",
  OrgChart = "OrgChart",
  PieChart = "PieChart",
  Sankey = "Sankey",
  ScatterChart = "ScatterChart",
  SteppedAreaChart = "SteppedAreaChart",
  Table = "Table",
  TreeMap = "TreeMap",
  WaterfallChart = "WaterfallChart",
  WordTree = "WordTree"
}

// https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
export interface ChartWrapperOptions {
  chartType: string;
  containerId: string;
  options?: {
    width: number;
    height: number;
    is3D: boolean;
    title: string;
  };
  dataTable?: {};
  dataSourceUrl?: string;
  query?: string;
  refreshInterval?: number;
  view: any[] | {};
}

export type GoogleChartWrapper = {
  draw: (chartArgs?: ChartWrapperProps) => any;
  toJSON: () => string;
  clone: () => GoogleChartWrapper;
  getDataSourceUrl: () => string;
  getDataTable: () => GoogleDataTable; // | null   null if datasourceurl set or ref to DataTable
  getChartType: () => GoogleChartWrapperChartType;
  getChartName: () => string;
  getChart: () => {
    getSelection: () => { row?: any; column?: any }[];
  }; // ref to chart
  getContainerId: () => string;
  getQuery: () => string;
  getRefreshInterval: () => number;
  getOption: (key: string, opt_default_value?: any) => any; // returns opt_default_value if key not found
  getOptions: () => {};
  getSelection: () => { row?: any; column?: any }[];
  getView: () => {} | any[]; // Same format as toJSON

  setDataSourceUrl: (url: string) => void;
  setDataTable: (table: any) => void;
  setChartType: (chartType: GoogleChartWrapperChartType) => void;
  setChartName: (name: string) => void; // Sets an arbitrary name for the chart. This is not shown anywhere on the chart, unless a custom chart is explicitly designed to use it.
  setContainerId: (id: string) => void; // Sets the ID of the containing DOM element for the chart.
  setQuery: (query_string: string) => void; // Sets a query string, if this chart queries a data source. You must also set the data source URL if specifying this value.
  setRefreshInterval: (interval: number) => void; // Sets the refresh interval for this chart, if it queries a data source. You must also set a data source URL if specifying this value. Zero indicates no refresh.
  setOption: (key: string, value: any) => void; // 	Sets a single chart option value, where key is the option name and value is the value. To unset an option, pass in null for the value. Note that key may be a qualified name, such as 'vAxis.title'.
  setOptions: (options_obj: ChartWrapperProps["options"]) => void; //
};

export enum GoogleVizEventName {
  ready = "ready",
  error = "error",
  select = "select"
}

export type GoogleVizEvents = {
  addListener: (
    chartWrapper: GoogleChartWrapper,
    name: GoogleVizEventName,
    onEvent: (eventArgs: {}) => any
  ) => any;
  removeAllListeners: (chartWrapper: GoogleChartWrapper) => any;
};

export enum GoogleChartPackages {
  corechart = "corechart",
  calendar = "calendar",
  gantt = "gantt",
  gauge = "gauge",
  geochart = "geochart",
  map = "map",
  orgchart = "orgchart",
  sankey = "sankey",
  table = "table",
  timeline = "timeline",
  treemap = "treemap",
  wordtree = "wordtree"
}

export enum GoogleChartVersion {
  current = "current",
  upcoming = "upcoming"
}

export enum GoogleDataTableColumnType {
  "string" = "string",
  "number" = "number",
  "boolean" = "boolean",
  "date" = "date",
  "datetime" = "datetime",
  "timeofday" = "timeofday"
}

// Reference https://developers.google.com/chart/interactive/docs/roles
export enum GoogleDataTableColumnRoleType {
  annotation = "annotation",
  annotationText = "annotationText",
  certainty = "certainty",
  emphasis = "emphasis",
  interval = "interval",
  scope = "scope",
  style = "style",
  tooltip = "tooltip",
  domain = "domain"
}

export type GoogleDataTableColumn = {
  type: GoogleDataTableColumnType;
  label?: string; //  A label for the column.
  role?: GoogleDataTableColumnRoleType;
  pattern?: string;
  p?: {};
  id?: string;
};

// Ref : https://developers.google.com/chart/interactive/docs/reference#dataparam

export type GoogleDataTableCell =
  | {
      v?: any; // The cell value. Type should match DataTableColumn type field
      f?: string; // A string version of the v value, formatted for display.
      p?: {};
    }
  | string
  | number
  | boolean;

export type GoogleDataTableRow = GoogleDataTableCell[];

export type GoogleDataTableJS = {
  cols: GoogleDataTableColumn[];
  rows: {
    c: GoogleDataTableRow;
  }[];
  p?: {};
};

// Reference : https://developers.google.com/chart/interactive/docs/reference#DataTable

export type GoogleDataTableRowFilter = {
  column: number;
  value: any;
  minValue?: number | null;
  maxValue?: number | null;
};

export type GoogleDataTableSortColumns =
  | number
  | {
      column: number;
      desc: boolean;
    }
  | number[]
  | {
      column: number;
      desc: boolean;
    }[];

export type GoogleDataTable = {
  addColumn: (column: GoogleDataTableColumn) => number;
  addRow: (row?: GoogleDataTableRow) => number;
  addRows: (rows?: GoogleDataTableRow[] | number[] | any[]) => number;
  clone: () => GoogleDataTable;

  getColumnId: (columnIndex: number) => string;
  getColumnLabel: (columnIndex: number) => string;
  getColumnPattern: (columnIndex: number) => string;
  getColumnProperties: (columnIndex: number) => {};
  getColumnProperty: (columnIndex: number, name: string) => any;
  getColumnRange: (
    columnIndex: number
  ) => { min: number | null; max: number | null };
  getColumnRole: (columnIndex: number) => GoogleDataTableColumnRoleType;
  getColumnType: (columnIndex: number) => GoogleDataTableColumnType;
  getDistinctValues: (columnIndex: number) => any[];
  getFilteredRows: (filters: GoogleDataTableRowFilter[]) => number[];
  getFormattedValue: (rowIndex: number, columnIndex: number) => string;
  getNumberOfColumns: () => number;
  getNumberOfRows: () => number;
  getProperties: (rowIndex: number, columnIndex: number) => {};
  getProperty: (rowIndex: number, columnIndex: number, name: string) => any;
  getRowProperties: (rowIndex: number) => {};
  getRowProperty: (rowIndex: number, name: string) => any;
  getSortedRows: (sortColumns: GoogleDataTableSortColumns) => number[];
  getTableProperties: () => {};
  getTableProperty: (name: string) => any;
  getValue: (rowIndex: number, columnIndex: number) => any;
  insertColumn: (
    columnIndex: number,
    type: GoogleDataTableColumnType,
    label?: string,
    id?: string
  ) => void;
  insertRows: (
    rowIndex: number,
    numberOrArray: GoogleDataTableRow[] | number
  ) => void;
  removeColumn: (columnIndex: number) => void;
  removeColumns: (columnIndex: number, numberOfColumns: number) => void;
  removeRow: (rowIndex: number) => void;
  removeRows: (rowIndex: number, numberOfColumns: number) => void;
  setCell: (
    rowIndex: number,
    columnIndex: number,
    value?: any,
    formattedValue?: string,
    properties?: {}
  ) => {};
  setColumnLabel: (columnIndex: number, label: string) => void;
  setColumnProperty: (columnIndex: number, name: string, value: any) => void;
  setColumnProperties: (columnIndex: number, properties: {} | null) => void;
  setFormattedValue: (
    rowIndex: number,
    columnIndex: number,
    formattedValue: string
  ) => void;
  setProperty: (
    rowIndex: number,
    columnIndex: number,
    name: string,
    value: any
  ) => void;
  setProperties: (
    rowIndex: number,
    columnIndex: number,
    properties: {} | null
  ) => void;

  setRowProperty: (rowIndex: number, name: string, value: any) => void;
  setRowProperties: (rowIndex: number, properties: {} | null) => void;
  setTableProperties: (properties: {} | null) => void;
  setValue: (rowIndex: number, columnIndex: number, value: string) => void;
  sort: (sortColumns: GoogleDataTableSortColumns) => void;
  toJSON: () => string; // GoogleDataTableJS
};

export type GoogleArrayToDataTable = (
  data: any[][],
  isFirstRowLabels?: boolean
) => GoogleDataTable;

export type GoogleChartOptions = {
  width?: number;
  height?: number;
  is3D?: boolean;
  title?: string;
  hAxis?: {
    minValue?: number;
    ticks?: number[];
    title?: string;
  };
  vAxis?: {
    minValue?: number;
    ticks?: number[];
    title?: string;
  };
  bubble?: {};
  pieHole?: number;
  redFrom?: number;
  redTo?: number;
  yellowFrom?: number;
  yellowTo?: number;
  minorTicks?: number;
  legend?:
    | string
    | {
        position?: string;
        maxLines?: number;
      };
  curveType?: string;
  showTooltip?: boolean;
  showInfoWindow?: boolean;
  allowHtml?: boolean;
  isStacked?: string | boolean;
  minColor?: string;
  midColor?: string;
  maxColor?: string;
  headerHeight?: number;
  fontColor?: string;
  showScale?: boolean;
  bar?: { groupWidth?: string }; // Remove space between bars.
  candlestick?: {
    fallingColor?: { strokeWidth?: number; fill?: string }; // red
    risingColor?: { strokeWidth?: number; fill?: string }; // green
  };
  wordtree?: {
    format?: string;
    word?: string;
  };
};

/* 
*
* </GoogleChartsTypes>
*
*/
