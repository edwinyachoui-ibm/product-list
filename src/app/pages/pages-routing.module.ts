import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'list', component: CoffeeListComponent},
  {path: 'uid', component: CoffeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }