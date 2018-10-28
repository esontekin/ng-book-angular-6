import { Action, Reducer } from './01-identity-reducer';

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

const plusAction: Action = {
  type: 'PLUS'
};
console.log(reducer(3, {
  type: 'PLUS',
  payload: 7
}));
console.log(reducer(3, {
  type: 'PLUS',
  payload: 9000
}));
console.log(reducer(3, {
  type: 'PLUS',
  payload: -2
}));
