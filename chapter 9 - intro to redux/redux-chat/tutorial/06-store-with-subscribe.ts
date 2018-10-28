import { Action, Reducer } from './01-identity-reducer';
type ListenerCallback = () => void;

type UnsubscribeCallback = () => void;

class Store<T> {
  private state: T;
  private listeners: ListenerCallback[];

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private reducer: Reducer<T>,
    initialState: T
  ) {
    this.state = initialState;
  }

  getState(): T {
    return this.state;
  }

  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener => listener());
  }
}

const reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state++;
    case 'DECREMENT':
      return state--;
    case 'PLUS':
      return state + action.payload;
    default:
      return state;
  }
};

const store: Store<number> = new Store<number>(reducer, 0);
console.log(store.getState());

const unsubscribe: UnsubscribeCallback = store.subscribe(() => {
  console.log('subscribed: ', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });

unsubscribe();

store.dispatch({ type: 'DECREMENT' });

console.log(store.getState());
