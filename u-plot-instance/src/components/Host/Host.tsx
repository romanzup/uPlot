import * as React from 'react';
import { NotificationsHostProps } from 'piral';

const Host: React.FC<NotificationsHostProps> = ({ children }) => (
  <div className="notifications">{children}</div>
);

export default Host;