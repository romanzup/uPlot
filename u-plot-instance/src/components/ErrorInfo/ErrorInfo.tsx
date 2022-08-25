import * as React from 'react';
import { ErrorInfoProps, SwitchErrorInfo } from 'piral';

const ErrorInfo: React.FC<ErrorInfoProps> = (props) => (
  <div>
    <h1>Error</h1>
    <SwitchErrorInfo {...props} />
  </div>
);

export default ErrorInfo;