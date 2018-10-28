import {
  Action,
  ActionCreator
} from 'redux';

// tslint:disable-next-line:no-inferrable-types
export const INCREMENT: string = 'INCREMENT';
export const increment: ActionCreator<Action> = () => ({
  type: INCREMENT
});

// tslint:disable-next-line:no-inferrable-types
export const DECREMENT: string = 'DECREMENT';
export const decrement: ActionCreator<Action> = () => ({
  type: DECREMENT
});
