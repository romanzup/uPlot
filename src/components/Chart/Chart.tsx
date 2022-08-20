import { FC, useState, useRef, useEffect, useCallback } from 'react';
import uPlot from 'uplot';
import UplotReact from 'uplot-react';
import 'uplot/dist/uPlot.min.css';
import { useHttp } from '../../hooks/http.hook';

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

// const dummyPlugin = (): uPlot.Plugin => ({
//   hooks: {
//     init(u: uPlot, opts: uPlot.Options) {
//       void u;
//       void opts;
//     },
//   },
// });

const initialOptions: uPlot.Options = {
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

const initialData: uPlot.AlignedData = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];

const Chart: FC = () => {
  const [options, setOptions] = useState<uPlot.Options>(initialOptions);
  const [data, setData] = useState<uPlot.AlignedData>(initialData);
  const [startPlotting, setStartPlotting] = useState<number>(0);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const { loading, request, error, clearError } = useHttp();

  useEffect(() => {
    (async () => {
      const result = await request('../../bench/data.json');
      setData(prepData(result));
      timer.current = setInterval(makeChart, 100);
    })();

    return () => clearInterval(timer.current as NodeJS.Timeout);
  }, []);

  const makeChart = useCallback(
    () => setStartPlotting((prevStartPlotting) => prevStartPlotting + 10),
    [startPlotting, setStartPlotting]
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

  useEffect(() => {
    console.log(sliceData(startPlotting, startPlotting + 3000));
  }, [startPlotting]);

  return (
    <>
      {loading && <h2>Fetching data.json (2.07MB)....</h2>}
      {!loading && <h2>Done!</h2>}
      {!loading && (
        <UplotReact
          options={options}
          data={
            sliceData(startPlotting, startPlotting + 3000) as uPlot.AlignedData
          }
        />
      )}
    </>
  );
};

export default Chart;
