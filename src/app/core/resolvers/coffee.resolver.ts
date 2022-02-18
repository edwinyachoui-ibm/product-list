import { map } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { filter, Observable, of } from 'rxjs';
import * as coffeeActions from '../store/actions/coffee.actions';
import * as coffeeSeletors from '../store/selectors/coffee.selectors';

@Injectable({
  providedIn: 'root'
})
export class CoffeeResolver implements Resolve<boolean> {
  
  constructor(private store: Store){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(coffeeActions.loadCoffees());
    return this.store.select(coffeeSeletors.selectAllCoffee).pipe(
      filter(data => !!data), map(payload => true)
    )
  }
}
