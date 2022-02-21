import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/internal/Subscription";
import { Coffee } from "./../../core/model/coffee";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from "@angular/core";
import * as coffeeSeletors from "../../core/store/selectors/coffee.selectors";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-coffee-detail",
  templateUrl: "./coffee-detail.component.html",
  styleUrls: ["./coffee-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeDetailComponent implements OnInit {
  subscription!: Subscription;
  coffeeDetail: Coffee | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
      this.route.queryParams.subscribe((params: any) => {
        this.getCoffee(params.id);
      })
  }

  getCoffee(coffeeId: string) {
    this.store
      .select(coffeeSeletors.selectAllCoffee)
      .subscribe((coffeeList) => {
        if (!coffeeList) {
          this.router.navigate(["coffee"]);
        } else {
          let selectedCoffee = coffeeList.find((coffee) => {
            return coffee.uid === coffeeId;
          }) as Coffee;
          if (selectedCoffee) {
            this.coffeeDetail = selectedCoffee;
            
          }
        }
      });
  }
}
