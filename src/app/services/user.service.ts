import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = ''

  constructor( private http: HttpClient) {
    this.endpoint = `${environment.api}/ambassadors`
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint)
  }
}
