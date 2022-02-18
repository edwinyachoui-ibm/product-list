import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coffee } from '../model/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private url = 'https://random-data-api.com/api/coffee/random_coffee?size=50';

  constructor(private httpClient: HttpClient) { }

  getCoffee(): Observable<Coffee[]> {
    return this.httpClient.get<Coffee[]>(this.url);
  }
}
