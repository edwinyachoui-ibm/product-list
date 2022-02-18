import * as fromCoffee from './coffee.actions';

describe('loadCoffees', () => {
  it('should return an action', () => {
    expect(fromCoffee.loadCoffees().type).toBe('[Coffee] Load Coffees');
  });
});
