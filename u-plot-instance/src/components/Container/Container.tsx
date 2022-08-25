import * as React from 'react';
import { DashboardContainerProps, useAction, useSharedData } from 'piral';
import { on } from 'stream';

const defaultTiles = (
  <>
    {/* <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://piral.io/">Piral</a>
        <br />
        for next generation portals
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://www.typescriptlang.org/">TypeScript</a>
        <br />
        for writing scalable web apps
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://reactjs.org/">React</a>
        <br />
        for building components
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="http://getbootstrap.com/">Bootstrap</a>
        <br />
        for layout and styling
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://sass-lang.com">Sass</a>
        <br />
        for crafting custom styles
      </div>
    </div> */}
  </>
);

const Container: React.FC<DashboardContainerProps> = ({ children }) => {
  const testValue = useSharedData((m) => m.testGlobal.value);

  //const incrementTestHandler = useAction('incrementTestValue');

  return (
    <div>
      The gloabl value (testGlobal) is {testValue}
      <div className="tiles">
        {defaultTiles}
        {children}
      </div>
    </div>
  );
}

export default Container;