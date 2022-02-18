import { Store, props } from '@ngrx/store';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import * as coffeeActions from './core/store/actions/coffee.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-list';
  isMobile: boolean = false;
  widthChange: any;

  constructor(public breakpointObserver: BreakpointObserver, private store: Store) {
    this.widthChange = breakpointObserver.observe([
      Breakpoints.XSmall
    ])
    .subscribe((state: BreakpointState) => {
      this.isMobile = breakpointObserver.isMatched(Breakpoints.XSmall);
      this.store.dispatch(coffeeActions.loadCoffeesMobile({isMobile: this.isMobile}));
    })
  }
}
