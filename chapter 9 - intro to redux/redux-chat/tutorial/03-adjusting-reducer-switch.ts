import { Action, Reducer } from './01-identity-reducer';

const reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state++;
    case 'DECREMENT':
      return state--;
    default:
      return state;
  }
};

const incrementAction: Action = {
  type: 'INCREMENT'
};
console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));

const decrementAction: Action = {
  type: 'DECREMENT'
};
console.log(reducer(100, decrementAction));

const unknownAction: Action = {
  type: 'UNKNOWN'
};
console.log(reducer(100, unknownAction));
