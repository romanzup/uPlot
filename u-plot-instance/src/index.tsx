import 'piral/polyfills';
import * as actions from './actions/incrementTestValue';
import { renderInstance } from 'piral';
import { layout, errors } from './layout';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'http://localhost:9000/api/v1/pilet';

declare module 'piral-core/lib/types/custom' {
  interface PiralCustomActions {
    incrementTestValue: void;
  }

  interface PiralCustomEventMap {
    hello: number;
  }

  interface PiralCustomState {
    mainVar: number;
  }
}

const { root, emit } = renderInstance({
  layout,
  errors,
  actions,
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

root.setData('testGlobal', 0);

root.on('testGlobalTracing', (value: number) => root.setData('testGlobal', value));
