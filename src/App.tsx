import { useState, useRef, useEffect, useCallback } from 'react';
import Chart from './components/Chart';
import uPlot from 'uplot';
import { useHttp } from './hooks/http.hook';

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
      label: 'CPU',
      scale: '%',
      value: (u, v) => (v == null ? '-' : v.toFixed(1) + '%'),
      stroke: 'red',
    },
    {
      label: 'RAM',
      scale: '%',
      value: (u, v) => (v == null ? '-' : v.toFixed(1) + '%'),
      stroke: 'blue',
    },
    {
      label: 'TCP Out',
      scale: 'mb',
      value: (u, v) => (v == null ? '-' : v.toFixed(2) + ' MB'),
      stroke: 'green',
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
      label: "CPU",
      scale: "%",
      value: (u, v) => v == null ? "-" : v.toFixed(1) + "%",
      stroke: "red",
    },
    {
      label: "RAM",
      scale: "%",
      value: (u, v) => v == null ? "-" : v.toFixed(1) + "%",
      stroke: "blue",
    },
    {
      label: "TCP Out",
      scale: "mb",
      value: (u, v) => v == null ? "-" : v.toFixed(2) + " MB",
      stroke: "green",
    }
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
      range: (min, max) => [1566453600, 1566813540],
    },
    '%': {
      auto: false,
      range: (min, max) => [0, 100],
    },
    'mb': {
      auto: false,
      range: (min, max) => [0, 70],
    },
  },
  series: [
    {},
    {
      label: "CPU",
      scale: "%",
      value: (u, v) => v == null ? "-" : v.toFixed(1) + "%",
      stroke: "red",
    },
    {
      label: "RAM",
      scale: "%",
      value: (u, v) => v == null ? "-" : v.toFixed(1) + "%",
      stroke: "blue",
    },
    {
      label: "TCP Out",
      scale: "mb",
      value: (u, v) => v == null ? "-" : v.toFixed(2) + " MB",
      stroke: "green",
    }
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

const round2 = (val: number): number => {
  return Math.round(val * 100) / 100;
};

const round3 = (val: number): number => {
  return Math.round(val * 1000) / 1000;
};

const prepData = (packed: (number | string)[]): uPlot.AlignedData => {
  console.time('prep');

  // epoch,idl,recv,send,read,writ,used,free

  const numFields: number = (packed as number[])[0];

  packed = packed.slice(numFields + 1);

  // 55,550 data points x 3 series = 166,650
  let data: uPlot.AlignedData = [
    Array(packed.length / numFields),
    Array(packed.length / numFields),
    Array(packed.length / numFields),
    Array(packed.length / numFields),
  ];

  for (let i = 0, j = 0; i < packed.length; i += numFields, j++) {
    data[0][j] = (packed as number[])[i] * 60;
    data[1][j] = round3(100 - (packed as number[])[i + 1]);
    data[2][j] = round2(
      (100 * (packed as number[])[i + 5]) /
        ((packed as number[])[i + 5] + (packed as number[])[i + 6])
    );
    data[3][j] = (packed as number[])[i + 3];
  }

  console.timeEnd('prep');

  return data;
};

const initialData: uPlot.AlignedData = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];

const App = () => {
  const [data, setData] = useState<uPlot.AlignedData | null>(null);
  const [startPlotting1, setStartPlotting1] = useState<number>(0);
  const [len2, setLen2] = useState<number>(3000);
  const [len3, setLen3] = useState<number>(10);
  const [isRendering, setIsRendering] = useState<boolean>(true);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const { loading, request, error, clearError } = useHttp();

  useEffect(() => {
    (async () => {
      /* ./bench/data.json is fake url, but leads to the real address of data.json */
      const result = await request('./bench/data.json');
      setData(prepData(result));
      timer.current = setInterval(makeChart, 100);
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
      {!loading && !isRendering && <Chart options={initialOptions1} data={(data && sliceData(startPlotting1, startPlotting1 + 3000) as uPlot.AlignedData) || initialData} />}
      {!loading && !isRendering && <Chart options={initialOptions2} data={(data && sliceData(0, 0 + len2) as uPlot.AlignedData) || initialData} />}
      {!loading && !isRendering && <Chart options={initialOptions3} data={(data && sliceData(0, 0 + len3) as uPlot.AlignedData) || initialData} />}
    </>
  );
}

export default App;
