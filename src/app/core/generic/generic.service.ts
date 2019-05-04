import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {
  constructor(private http: HttpClient, private API_URL: string) {}

  delete(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

  retrieve(): Observable<T[]> {
    return this.http.get<T[]>(`${this.API_URL}`).pipe(delay(2000));
  }

  findById(id: string): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  create(item: T) {
    return this.http.post(`${this.API_URL}`, item).pipe(take(1));
  }

  update(item: T) {
    return this.http.put(`${this.API_URL}`, item).pipe(take(1));
  }

  save(item: T) {
// tslint:disable-next-line: no-string-literal
    if (item['id']) {
      return this.update(item);
    }
    return this.create(item);
  }
}
