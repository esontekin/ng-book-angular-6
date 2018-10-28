import { InjectionToken } from '@angular/core';

import {
  Action,
  Store,
  createStore,
  StoreEnhancer,
  compose
} from 'redux';

import { counterReducer } from './counter.reducer';
import { AppState } from './app.state';

const devTools: StoreEnhancer<AppState> = window['devToolsExtension']
  ? window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState, Action<any>, {}, {}>(
    counterReducer,
    compose(devTools)
  );
}

export let APP_STORE_TOKEN: InjectionToken<Store<AppState>> = new InjectionToken<Store<AppState>>('app-store');
export const appStoreProviders = [
  { provide: APP_STORE_TOKEN, useFactory: createAppStore }
];
