import { TestBed } from '@angular/core/testing';

import { CoffeeResolver } from './coffee.resolver';

describe('CoffeeResolver', () => {
  let resolver: CoffeeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CoffeeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
