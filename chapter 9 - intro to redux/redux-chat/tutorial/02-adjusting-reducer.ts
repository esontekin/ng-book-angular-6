import { Reducer, Action } from './01-identity-reducer';

const reducer: Reducer<number> = (state: number, action: Action) => {
  if (action.type === 'INCREMENT') {
    return state++;
  }

  if (action.type === 'DECREMENT') {
    return state--;
  }

  return state;
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
