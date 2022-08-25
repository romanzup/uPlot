import * as React from 'react';
import { DashboardTileProps } from 'piral';

const Tile: React.FC<DashboardTileProps> = ({ columns, rows, children }) => (
  <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>
);

export default Tile;