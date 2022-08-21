import { useState, useRef, useEffect, useCallback } from 'react';
import Chart from './components/Chart';
import uPlot from 'uplot';
import { useHttp } from './hooks/http.hook';

// interface nodes {
//   "time":1660552965;
//   "CATR40AFBC0DBC7157CC97D54547512B702F:pv":7.93;
//   "CATR190F2C6D185252C1942C59E8B162BDDE:reference_sp":916;
//   "CATR3599ACFDD4035EFD81007AA97BC692BD:reference_sp":1172;
//   "CATRA2F8FB87440058A5A2549182C49FDDA8:pvr":2.17;
//   "CATR2670CE5395C9516C9ED4AFC63241EDBA:reference_sp":1670;
//   "CATR1D82475C67A35E8288034CFA862E7008:pv":9.35;
//   "CATR4E96A45F119859D7B0F1533394953589:reference_sp":1093;
//   "CATRE7CAA0D97E8F540D9F8AD60D3A15FA26:pv":2.88;
//   "CATRF2DA988B14825A1E9CFBA025462AEDE1:reference_sp":1227;
//   "CATRCE648802D4BA5D40B5CEA3FBFFE2B259:pv":1.5;
//   "CATR493EB28AE4E45EC89F5339C46D7A228F:reference_sp":1818;
//   "CATR6B74FCBFD6F2537FADDAAEEBA262A3D4:reference_sp":347;
//   "CATR8DE446DAF8FC5DFF873BB901A67E3217:pv":9.68;
//   "CATR358C7AA1580857E28DD2C3913E208E1F:pv":0.91;
// }

const initialOptions1: uPlot.Options = {
  title: 'Fixed length / sliding data slices',
  width: 1600,
  height: 600,
  cursor: {
    drag: {
      setScale: false,
    },
  },
  select: {
    show: false,
    top: 0,
    left: 0,
    width: 1600,
    height: 600,
  },
  series: [
    {},
    {
      label: "CATR40AFBC0DBC7157CC97D54547512B702F:pv",
      scale: '%',
      value: (u, v) => (v == null ? '-' : v.toFixed(1) + '%'),
      stroke: 'red',
    },
    {
      label: "CATRA2F8FB87440058A5A2549182C49FDDA8:pvr",
      scale: '%',
      value: (u, v) => (v == null ? '-' : v.toFixed(1) + '%'),
      stroke: 'blue',
    },
    {
      label: "CATR1D82475C67A35E8288034CFA862E7008:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'green',
    },
    {
      label: "CATRE7CAA0D97E8F540D9F8AD60D3A15FA26:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'black',
    },
    {
      label: "CATRCE648802D4BA5D40B5CEA3FBFFE2B259:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'gray',
    },
    {
      label: "CATR8DE446DAF8FC5DFF873BB901A67E3217:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'pink',
    },
    {
      label: "CATR8DE446DAF8FC5DFF873BB901A67E3217:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'purple',
    },
  ],
  axes: [
    {},
    {
      scale: '%',
      values: (u, vals, space) => vals.map((v) => +v.toFixed(1) + '%'),
    },
    {
      side: 1,
      scale: 'mb',
      values: (u, vals, space) => vals.map((v) => +v.toFixed(2) + ' MB'),
      grid: { show: false },
    },
  ],
};

const initialOptions2: uPlot.Options = {
  title: "Increasing length data",
  width: 1600,
  height: 600,
  cursor: {
    drag: {
      setScale: false,
    }
  },
  select: {
    show: false,
    top: 0,
    left: 0,
    width: 1600,
    height: 600,
  },
  series: [
    {},
    {
      label: "CATR40AFBC0DBC7157CC97D54547512B702F:pv",
      scale: '%',
      value: (u, v) => (v == null ? '-' : v.toFixed(1) + '%'),
      stroke: 'red',
    },
    {
      label: "CATRA2F8FB87440058A5A2549182C49FDDA8:pvr",
      scale: '%',
      value: (u, v) => (v == null ? '-' : v.toFixed(1) + '%'),
      stroke: 'blue',
    },
    {
      label: "CATR1D82475C67A35E8288034CFA862E7008:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'green',
    },
    {
      label: "CATRE7CAA0D97E8F540D9F8AD60D3A15FA26:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'black',
    },
    {
      label: "CATRCE648802D4BA5D40B5CEA3FBFFE2B259:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'gray',
    },
    {
      label: "CATR8DE446DAF8FC5DFF873BB901A67E3217:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'pink',
    },
    {
      label: "CATR8DE446DAF8FC5DFF873BB901A67E3217:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'purple',
    },
  ],
  axes: [
    {},
    {
      scale: '%',
      values: (u, vals, space) => vals.map(v => +v.toFixed(1) + "%"),
    },
    {
      side: 1,
      scale: 'mb',
      values: (u, vals, space) => vals.map(v => +v.toFixed(2) + " MB"),
      grid: {show: false},
    },
  ],
};

const initialOptions3: uPlot.Options = {
  title: "Increasing length data, static x scale",
  width: 1600,
  height: 600,
  cursor: {
    drag: {
      setScale: false,
    }
  },
  select: {
    show: false,
    top: 0,
    left: 0,
    width: 1600,
    height: 600,
  },
  scales: {
    'x': {
      auto: false,
      range: (min, max) => [1660552965, 1660553964],
    },
    '%': {
      auto: false,
      range: (min, max) => [0, 20],
    },
    'mb': {
      auto: false,
      range: (min, max) => [0, 20],
    },
  },
  series: [
    {},
    {
      label: "CATR40AFBC0DBC7157CC97D54547512B702F:pv",
      scale: '%',
      value: (u, v) => (v == null ? '-' : v.toFixed(1) + '%'),
      stroke: 'red',
    },
    {
      label: "CATRA2F8FB87440058A5A2549182C49FDDA8:pvr",
      scale: '%',
      value: (u, v) => (v == null ? '-' : v.toFixed(1) + '%'),
      stroke: 'blue',
    },
    {
      label: "CATR1D82475C67A35E8288034CFA862E7008:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'green',
    },
    {
      label: "CATRE7CAA0D97E8F540D9F8AD60D3A15FA26:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'black',
    },
    {
      label: "CATRCE648802D4BA5D40B5CEA3FBFFE2B259:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'gray',
    },
    {
      label: "CATR8DE446DAF8FC5DFF873BB901A67E3217:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'pink',
    },
    {
      label: "CATR8DE446DAF8FC5DFF873BB901A67E3217:pv",
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'purple',
    },
  ],
  axes: [
    {},
    {
      scale: '%',
      values: (u, vals, space) => vals.map(v => +v.toFixed(1) + "%"),
    },
    {
      side: 1,
      scale: 'mb',
      values: (u, vals, space) => vals.map(v => +v.toFixed(2) + " MB"),
      grid: {show: false},
    },
  ],
};

interface obj {
  [x: string]: number;
}

const prepData = (packed: obj[]): uPlot.AlignedData => {
  console.time('prep');

  // epoch,idl,recv,send,read,writ,used,free

  //{"time":1660552965,"CATR40AFBC0DBC7157CC97D54547512B702F:pv":7.93,"CATR190F2C6D185252C1942C59E8B162BDDE:reference_sp":916,"CATR3599ACFDD4035EFD81007AA97BC692BD:reference_sp":1172,"CATRA2F8FB87440058A5A2549182C49FDDA8:pvr":2.17,"CATR2670CE5395C9516C9ED4AFC63241EDBA:reference_sp":1670,"CATR1D82475C67A35E8288034CFA862E7008:pv":9.35,"CATR4E96A45F119859D7B0F1533394953589:reference_sp":1093,"CATRE7CAA0D97E8F540D9F8AD60D3A15FA26:pv":2.88,"CATRF2DA988B14825A1E9CFBA025462AEDE1:reference_sp":1227,"CATRCE648802D4BA5D40B5CEA3FBFFE2B259:pv":1.5,"CATR493EB28AE4E45EC89F5339C46D7A228F:reference_sp":1818,"CATR6B74FCBFD6F2537FADDAAEEBA262A3D4:reference_sp":347,"CATR8DE446DAF8FC5DFF873BB901A67E3217:pv":9.68,"CATR358C7AA1580857E28DD2C3913E208E1F:pv":0.91}
  

  // 55,550 data points x 3 series = 166,650
  let data: uPlot.AlignedData = packed.reduce((accumulator: uPlot.AlignedData, currentValue: obj, id: number) => {
    accumulator[0][id] = currentValue["time"];
    accumulator[1][id] = currentValue["CATR40AFBC0DBC7157CC97D54547512B702F:pv"];
    accumulator[2][id] = currentValue["CATRA2F8FB87440058A5A2549182C49FDDA8:pvr"];
    accumulator[3][id] = currentValue["CATR1D82475C67A35E8288034CFA862E7008:pv"];
    accumulator[4][id] = currentValue["CATRE7CAA0D97E8F540D9F8AD60D3A15FA26:pv"];
    accumulator[5][id] = currentValue["CATRCE648802D4BA5D40B5CEA3FBFFE2B259:pv"];
    accumulator[6][id] = currentValue["CATR8DE446DAF8FC5DFF873BB901A67E3217:pv"];
    accumulator[7][id] = currentValue["CATR358C7AA1580857E28DD2C3913E208E1F:pv"];
    return accumulator;
  }, [[], [], [], [], [], [], [], []] as uPlot.AlignedData);

  console.timeEnd('prep');

  return data;
};

const initialData: uPlot.AlignedData = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];

const App = () => {
  const [data, setData] = useState<uPlot.AlignedData | null>(null);
  const [startPlotting1, setStartPlotting1] = useState<number>(0);
  const [len2, setLen2] = useState<number>(100);
  const [len3, setLen3] = useState<number>(5);
  const [isRendering, setIsRendering] = useState<boolean>(true);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const { loading, request, error, clearError } = useHttp();

  useEffect(() => {
    (async () => {
      /* ./bench/data.json is fake url, but leads to the real address of data.json */
      const result = await request('./bench/data.json');
      setData(prepData(result));
      timer.current = setInterval(makeChart, 1000);
    })();

    return () => clearInterval(timer.current as NodeJS.Timeout);
  }, []);

  const makeChart = useCallback(
    () => {
      //useCallback can't catch current states, that's why I used approach of functional setState
      setStartPlotting1(prevStartPlotting1 => prevStartPlotting1 + 10);
      setLen2(preLen2 => preLen2 + 10);
      setLen3(prevLen3 => prevLen3 + 10);
      if (isRendering) setIsRendering(false);
    },
    [startPlotting1, setStartPlotting1, len2, setLen2, len3, setLen3, isRendering, setIsRendering]
  );

  const sliceData = useCallback(
    (start: number, end: number): Array<Array<number>> =>
      (data as Array<number>[]).map((d) => d.slice(start, end)),
    [data]
  );

  useEffect(() => {
    if (error) alert(error);
    clearError();
  }, [error]);

  return (
    <>
      {loading && isRendering && <h2>Fetching data.json (2.07MB)....</h2>}
      {!loading && isRendering && <h2>Rendering...</h2>}
      {!loading && !isRendering && <h2>Done!</h2>}
      {!loading && !isRendering && <Chart options={initialOptions1} data={(data && sliceData(startPlotting1, startPlotting1 + 10) as uPlot.AlignedData) || initialData} />}
      {!loading && !isRendering && <Chart options={initialOptions2} data={(data && sliceData(0, 0 + len2) as uPlot.AlignedData) || initialData} />}
      {!loading && !isRendering && <Chart options={initialOptions3} data={(data && sliceData(0, 0 + len3) as uPlot.AlignedData) || initialData} />}
    </>
  );
}

export default App;
