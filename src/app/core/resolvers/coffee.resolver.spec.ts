import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as coffeeActions from '../../core/store/actions/coffee.actions';
import { CoffeeResolver } from './coffee.resolver';
import * as fromRoot from '../../core/store';
import { initialState } from '../../core/store';

export const TEST_PROVIDERS = [
  provideMockStore({ initialState }),
];

describe('CoffeeResolver', () => {
  let resolver: CoffeeResolver;
  let route: ActivatedRouteSnapshot;
  let store: MockStore;
  let mockSnapshot:any = jasmine.createSpyObj<RouterStateSnapshot>("RouterStateSnapshot", ['toString']);
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({ ...fromRoot.reducers }),
      ],
      providers: [...TEST_PROVIDERS],
    });
    resolver = TestBed.inject(CoffeeResolver);
    route = new ActivatedRouteSnapshot();
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should dispatch action to load the coffees', () => {
    spyOn(store, `dispatch`);
    resolver.resolve(route, mockSnapshot);
    expect(store.dispatch).toHaveBeenCalledWith(coffeeActions.loadCoffees());
  });
});
