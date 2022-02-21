import { Coffee } from './../../model/coffee';
import { reducer, initialState, State } from './coffee.reducer';
import * as coffeeActions from '../actions/coffee.actions';

describe('Coffee Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('load coffees', () => {
    it('should return coffee', () => {
      const coffees = [{
      blend_name:"Huggy Treat",
      id:5671,
      intensifier:"muted",
      notes:"juicy, chewy, star fruit, passion fruit, kiwi",
      origin:"Huila, Colombia",
      uid:"05c9c1f7-195f-4440-a93c-dc19bfa5f527",
      variety:"Mokka",
    }];
      const action = coffeeActions.loadCoffeesSuccess({data: coffees});
      const expected: State = {
        ...initialState,
        coffees
      };
      const state = reducer(initialState, action);
      expect(state).toEqual(expected);
    });
  });
});
