export interface Action {
  type: string;
  payload?: any;
}

export type Reducer<T> = (state: T, action: Action) => T;

const reducer: Reducer<number> = (state: number, action: Action) => {
  return state;
};

console.log(reducer(0, null));
