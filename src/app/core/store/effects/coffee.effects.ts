import { CoffeeService } from "./../../services/coffee.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as coffeeActions from '../actions/coffee.actions';
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class CoffeeEffects {
  loadCoffees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(coffeeActions.loadCoffees),
      exhaustMap((action) =>
        this.coffeeService.getCoffee().pipe(
          map((data) => coffeeActions.loadCoffeesSuccess({data})),
          catchError((error) => of(coffeeActions.loadCoffeesFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private coffeeService: CoffeeService
  ) {}
}

