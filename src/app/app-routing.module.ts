import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoffeeResolver } from "./core/resolvers/coffee.resolver";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "coffee",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "home",
    component: HomeComponent,
    resolve: {
      store: CoffeeResolver,
    },
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
