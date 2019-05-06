import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  api = `${environment.API}cvc/suggestions`;
  constructor(private http: HttpClient) {}
  suggestions(params) {
    return this.http.get(this.api, {
      params
    });
  }

  avail() {
    return this.http.get(
      `${
        environment.API
      }cvc/packages/avail?departureDate=2019-06-01&arrivalDate=2019-06-10&departureCity=SP&arrivalCity=WA&qtPax=2`
    );
  }
}
