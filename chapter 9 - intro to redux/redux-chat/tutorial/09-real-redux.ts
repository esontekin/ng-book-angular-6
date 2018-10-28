import { MessageActions } from './08-action-creators';
import { AppState, DeleteMessageAction, AddMessageAction } from './07-messages-reducer';
import {
  Action,
  Reducer,
  Store,
  createStore
} from 'redux';

const initialState: AppState = { messages: [] };
const reducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => {
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

const store: Store<AppState> = createStore<AppState>(reducer);
console.log(store.getState());

store.dispatch(MessageActions.addMessage('Would you say the fringe was made of silk?'));

store.dispatch(MessageActions.addMessage('Wouldnt have no other kind but silk'));

store.dispatch(MessageActions.addMessage('Has it really got a team of snow white horses?'));

console.log(store.getState());
