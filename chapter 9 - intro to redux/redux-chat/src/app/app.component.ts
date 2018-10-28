import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { APP_STORE_TOKEN } from './app.store';
import { AppState } from './app.state';
import * as CounterActions from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;

  constructor(
    @Inject(APP_STORE_TOKEN) private store: Store<AppState>
  ) {
    console.log('AppComponent: store: ', this.store);
    this.store.subscribe(() => this.readState());
    this.readState();
  }

  readState(): void {
    const state: AppState = this.store.getState() as AppState;
    console.log('readState: state: ', state);
    this.counter = state.counter;
  }

  increment(): void {
    this.store.dispatch(CounterActions.increment());
  }

  decrement(): void {
    this.store.dispatch(CounterActions.decrement());
  }
}
