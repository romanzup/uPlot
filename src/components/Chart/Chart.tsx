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

const dummyPlugin = (): uPlot.Plugin => ({
  hooks: {
    init(u: uPlot, opts: uPlot.Options) {
      void u;
      void opts;
    },
  },
});

const initialOptrions: uPlot.Options = {
  title: "Chart",
  width: 400,
  height: 300,
  series: [
    {
      label: "Date"
    },
    {
      label: "",
      points: { show: false },
      stroke: "blue",
      fill: "blue"
    }
  ],
  scales: { x: { time: false } },
  plugins: [dummyPlugin()]
};

const initialData: uPlot.AlignedData = [
  [...new Array(100000)].map((_, i) => i),
  [...new Array(100000)].map((_, i) => i % 1000),
];

const Chart: FC = () => {
  const [options, setOptions] = useState<uPlot.Options>(initialOptrions);
  const [data, setData] = useState<uPlot.AlignedData>(initialData);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const { loading, request, error, clearError } = useHttp();

  useEffect(() => {
    timer.current = setInterval(
      () =>
        setData((prevData) => [
          [...(prevData[0] as number[]), prevData[0].length],
          [...(prevData[1] as number[]), prevData[0].length % 1000]
        ]),
      100
    );

    (async () => {
      const result = await request('../../bench/data.json');
      console.log('DATA', { result });
    })();

    setOptions({
      ...options,
      title: 'Rendered with hooks',
    });

    return () => clearInterval(timer.current as NodeJS.Timeout);
  }, []);

  return (
    <>
      {loading && <h2>Fetching data.json (2.07MB)....</h2>}
      {!loading && <h2>Done!</h2>}
      <UplotReact options={options} data={data} />
    </>
  );
};

export default Chart;
