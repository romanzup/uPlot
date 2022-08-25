import * as React from 'react';
import { PiletApi } from 'u-plot-instance';

export function setup(app: PiletApi) {
  app.showNotification('Hello from the first Piral!', {
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
    const [testGlobalValue, setTestGlobalValue] = React.useState<number>(app.getData('testGlobal'));

    React.useEffect((): (() => void) => {
      const testHandler = ({ name, value }): void => {
        if (name === 'test') setTestValue(value);
        if (name === 'testGlobal') setTestGlobalValue(value);
      };

      app.on('store-data', testHandler);

      return () => app.off('store-data', testHandler);
    }, []);

    return (
      <>
        <h2>It's the first pilet!</h2>
        <p>
          The value, which was obtained from <b>the Piral Shell</b>, is {testGlobalValue}
        </p>
        <button onClick={() => app.emit('testGlobalTracing', testGlobalValue + 1)}>+</button>
        <hr />
        <p>
          The value, which was obtained from <b>the second pilet</b>, is{' '}
          {testValue}
        </p>
        <button onClick={() => app.emit('testTracing', testValue + 1)}>+</button>
      </>
    );
  });
}
