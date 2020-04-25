declare module 'addon-redux/enhancer' {
  import { AnyAction, StoreEnhancer, Store } from 'redux';

  export function withReduxEnhancer(Store);

  exports = withReduxEnhancer;
}
