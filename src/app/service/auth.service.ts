import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from './../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = url + '/login' // http://localhost:5000/api/login

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  login(username: string,  password: string) {

    // this represents the body of the request (payload)
    const payload = {username, password} // coresponds with the Credentials Object in our server app

    // return the value after sending a post request to the loginUrl
    return this.http.post<any>(this.loginUrl, payload, {observe: 'response'})
    // .pipe(catchError(this.handleError))
    // add a custom error handling message

    // In the login component we need to take the return value and add it to the sessionStorage

  }

  // handleError()
}
