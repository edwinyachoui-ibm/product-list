import { Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as coffeeSeletors from '../../core/store/selectors/coffee.selectors';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() public sidenavToggle = new EventEmitter();
  isMobile$: Observable<boolean>;

  constructor(private store: Store) {
    this.isMobile$ = this.store.select(coffeeSeletors.selectCoffeePaginationView)
   }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
