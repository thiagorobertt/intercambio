import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../../user/user';
import { GenericService } from '../generic/generic.service';
export interface LoginResponse {
  authorization: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user) {
    this.http
      .post<LoginResponse>(`${environment.API}login`, user)
      .subscribe(data => {
        console.log(data.authorization);
      });
  }
}
