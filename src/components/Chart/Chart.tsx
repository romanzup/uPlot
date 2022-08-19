import { FC, useState } from 'react';
import uPlot from 'uplot';
import UplotReact from 'uplot-react';
import 'uplot/dist/uPlot.min.css';

const dummyPlugin = (): uPlot.Plugin => ({
  hooks: {
    init(u: uPlot, opts: uPlot.Options) {
      void u;
      void opts;
    }
  }
});

const Chart : FC = () => {
  const [options, setOptions] = useState({
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
  });

  const [data, setData] = useState<uPlot.AlignedData>([
    [...new Array(100000)].map((_, i) => i),
    [...new Array(100000)].map((_, i) => i % 1000)
  ]);

  return (<UplotReact
        options={options}
        data={data}
    />)
}

export default Chart;