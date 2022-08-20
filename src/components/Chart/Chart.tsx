import { FC } from 'react';
import UplotReact from 'uplot-react';
import 'uplot/dist/uPlot.min.css';
import ChartProps from './interface';

const Chart: FC<ChartProps> = ({ options, data }) => {
  return <UplotReact options={options} data={data} />;
};

export default Chart;
