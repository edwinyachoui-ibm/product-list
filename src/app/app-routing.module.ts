import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoffeeResolver } from "./core/resolvers/coffee.resolver";

const routes: Routes = [
  {
    path: "coffee",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
      resolve: {
        store: CoffeeResolver,
      },
  },
  { path: "", redirectTo: "/coffee", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
