import { Action, createReducer, on } from '@ngrx/store';
import { Coffee } from '../../model/coffee';
import * as coffeeActions from '../actions/coffee.actions';


export const coffeeFeatureKey = 'coffee';

export interface State {

  coffees: Coffee[] | null;
  toggleSideNav: boolean;
}

export const initialState: State = {
  coffees: null,
  toggleSideNav: false
};

export const reducer = createReducer(
  initialState,
  on(coffeeActions.loadCoffeesSuccess, (state, action) => {
    return {
      ...state,
      coffees: action.data
    }
  }),
  on(coffeeActions.loadCoffeesMobile, (state, action) => {
    return {
      ...state,
      toggleSideNav: action.isMobile
    }
  }),
);
