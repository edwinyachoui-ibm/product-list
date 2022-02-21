import { Coffee } from "./../../core/model/coffee";
import {
  Component,
  AfterViewInit,
  ViewChild,
  ChangeDetectionStrategy,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import * as coffeeSeletors from "../../core/store/selectors/coffee.selectors";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: "app-coffee-list",
  templateUrl: "./coffee-list.component.html",
  styleUrls: ["./coffee-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeListComponent implements AfterViewInit {
  data = new MatTableDataSource<Coffee>();
  subscription!: Subscription;

  displayedColumns: string[] = [
    "id",
    "blend_name",
    "origin",
    "variety",
    "notes",
    "intensifier",
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.store.select(coffeeSeletors.selectAllCoffee).subscribe((value) => {
      this.data = new MatTableDataSource<Coffee>(value || []);
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    });
  }

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getCoffeeDetail(uid: string) {
    this.router.navigate(["coffee-detail"], {
      relativeTo: this.route,
      queryParams: { ["id"]: uid },
      queryParamsHandling: "merge",
    });
  }
}
