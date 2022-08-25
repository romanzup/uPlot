import { GlobalStateContext } from 'piral';

export function incrementTestValue (ctx: GlobalStateContext) {
  ctx.dispatch(state => ({
    ...state,
    data: {
      ...state.data,
      test: {
        ...state.data.test,
        value: state.data.test.value + 1
      }
    }
  }))
}