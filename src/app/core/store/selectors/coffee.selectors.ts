import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as coffee from '../reducers/coffee.reducer';

export const selectCoffeeState = createFeatureSelector<coffee.State>(
    coffee.coffeeFeatureKey
  );
  
  export const selectAllCoffee = createSelector(
    selectCoffeeState,
    (state: coffee.State) => state.coffees
  );

  export const selectCoffeePaginationView = createSelector(
    selectCoffeeState,
    (state: coffee.State) => state.toggleSideNav
  );