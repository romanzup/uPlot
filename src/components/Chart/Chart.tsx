import { FC, useState, useRef, useEffect } from 'react';
import uPlot from 'uplot';
import UplotReact from 'uplot-react';
import 'uplot/dist/uPlot.min.css';

const dummyPlugin = (): uPlot.Plugin => ({
  hooks: {
    init(u: uPlot, opts: uPlot.Options) {
      void u;
      void opts;
    },
  },
});

const initialOptrions: uPlot.Options = {
  title: 'Chart',
  width: 400,
  height: 300,
  series: [
    {
      label: 'Date',
    },
    {
      label: '',
      points: { show: false },
      stroke: 'blue',
      fill: 'blue',
    },
  ],
  scales: { x: { time: false } },
  plugins: [dummyPlugin()],
};

const initialData: uPlot.AlignedData = [
  [...new Array(100000)].map((_, i) => i),
  [...new Array(100000)].map((_, i) => i % 1000),
];

const Chart: FC = () => {
  const [options, setOptions] = useState<uPlot.Options>(initialOptrions);
  const [data, setData] = useState<uPlot.AlignedData>(initialData);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    timer.current = setInterval(
      () =>
        setData((prevData) => [
          [...(prevData[0] as number[]), prevData[0].length],
          [...(prevData[1] as number[]), prevData[0].length % 1000],
        ]),
      100
    );

    const newOptions: uPlot.Options = {
      ...options,
      title: 'Rendered with hooks',
    };
    setOptions(newOptions);

    return () => clearInterval(timer.current as NodeJS.Timeout);
  }, []);

  return <UplotReact options={options} data={data} />;
};

export default Chart;
