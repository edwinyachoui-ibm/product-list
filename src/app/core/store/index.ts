import { ActionReducerMap } from '@ngrx/store';
import * as coffee from './reducers/coffee.reducer';

export interface State {
    [coffee.coffeeFeatureKey]: coffee.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    [coffee.coffeeFeatureKey]: coffee.reducer,
  };
  
  export const initialState: State = {
    [coffee.coffeeFeatureKey]: coffee.initialState,
  };