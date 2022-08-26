import { url } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = url + `/users`; // http://localhost:500/api/users

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  registerUser(user: User): Observable<User>  {
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }



  private handleError(httpError: HttpErrorResponse): Observable<never> {

    if (httpError.error instanceof ErrorEvent) {
      console.log('an error occured: ', httpError.error.message);
    } else {
      console.error(`
        Backend returned code ${httpError.status}
        body was: ${httpError.error}
      `);
    }

    return throwError(() => new Error(`Something didn't work quite right`));
  }

}
