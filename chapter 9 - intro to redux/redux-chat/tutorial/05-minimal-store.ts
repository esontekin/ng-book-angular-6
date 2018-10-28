import { Reducer, Action } from './01-identity-reducer';

export class Store<T> {
  private state: T;

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

  dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);
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

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState());
