import { Coffee } from './../../model/coffee';
import { createAction, props } from '@ngrx/store';

export const loadCoffees = createAction(
  '[Coffee] Load Coffees'
);

export const loadCoffeesSuccess = createAction(
  '[Coffee] Load Coffees Success',
  props<{ data: Coffee[] }>()
);
 
export const loadCoffeesFailure = createAction(
  '[Coffee] Load Coffees Failure',
  props<{ error: any }>()
);

export const loadCoffeesMobile = createAction(
  '[Coffee] Load Coffees Mobile',
  props<{ isMobile: boolean }>()
);
