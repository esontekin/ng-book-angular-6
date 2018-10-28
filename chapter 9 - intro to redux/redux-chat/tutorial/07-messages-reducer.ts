import { Store } from './05-minimal-store';
import { Action, Reducer } from './01-identity-reducer';

export interface AppState {
  messages: string[];
}

export interface AddMessageAction extends Action {
  message: string;
}

export interface DeleteMessageAction extends Action {
  index: number;
}

const reducer: Reducer<AppState> = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: state.messages.concat((<AddMessageAction> action).message)
      };
    case 'DELETE_MESSAGE':
      const idx: number = (<DeleteMessageAction> action).index;
      return {
        messages: [
          ...state.messages.slice(0, idx),
          ...state.messages.slice(idx + 1, state.messages.length)
        ]
      };
  }
};

const store: Store<AppState> = new Store<AppState>(reducer, { messages: [] });
console.log(store.getState());

store.dispatch({
  type: 'ADD_MESSAGE',
  message: 'Would you say the fringe was made of silk?'
} as AddMessageAction);

store.dispatch({
  type: 'ADD_MESSAGE',
  message: 'Wouldnt have no other kind but silk'
} as AddMessageAction);

store.dispatch({
  type: 'ADD_MESSAGE',
  message: 'Has it really got a team of snow white horses?'
} as AddMessageAction);

console.log(store.getState());
