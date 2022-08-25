import { appendFile } from 'fs';
import * as React from 'react';
import { PiletApi } from 'u-plot-instance';

export function setup(app: PiletApi) {
  let testValue: number = 0;

  app.setData('test', testValue);

  app.showNotification('Hello from the second Piral!', {
    autoClose: 2000,
  });

  app.registerMenu(() => (
    <a href="https://docs.piral.io" target="_blank">
      Documentation
    </a>
  ));

  app.registerTile(() => {
    const [testValue, setTestValue] = React.useState<number>(
      app.getData('test')
    );

    React.useEffect((): (() => void) => {
      const testHandler = (value: number): void => {
        app.setData('test', value);
        setTestValue(value);
      };

      app.on('testTracing', testHandler);

      return () => app.off('testTracing', testHandler);
    }, []);

    return (
      <>
        <h1>Another Pilet!</h1>
        <p>
          The value, which is set for <b>the first pilet</b>, is {testValue}
        </p>
      </>
    );
  });
}
