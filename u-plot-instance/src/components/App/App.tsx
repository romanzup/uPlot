import * as React from 'react';
import { LayoutProps } from 'piral-core';
import { Menu, Notifications } from 'piral';

const App: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Notifications />
    <Menu type="general" />
    <div className="container">{children}</div>
  </div>
);

export default App;
