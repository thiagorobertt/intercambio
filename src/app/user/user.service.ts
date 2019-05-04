import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GenericService } from '../core/generic/generic.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User> {
  constructor(http: HttpClient) {
    super(http, `${environment.API}/cvc/systems/users`);
  }
}
