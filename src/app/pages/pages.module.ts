import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { MaterialModule } from '../shared/Material/material.module';


@NgModule({
  declarations: [
    CoffeeListComponent,
    CoffeeDetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
