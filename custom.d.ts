declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module 'redux-persist/lib/storage';

// https://github.com/rt2zz/redux-persist/issues/1140
declare module 'redux-persist/es/persistStore' {
  import { Store, Action, AnyAction } from 'redux';
  import { PersistorOptions, Persistor } from 'redux-persist/es/types';
  export default function persistStore<
    S = any,
    A extends Action<any> = AnyAction
  >(
    store: Store<S, A>,
    persistorOptions?: PersistorOptions | null,
    callback?: () => any
  ): Persistor;
}

declare module 'redux-persist/lib/persistStore' {
  export * from 'redux-persist/es/persistStore';
  export { default } from 'redux-persist/es/persistStore';
}
