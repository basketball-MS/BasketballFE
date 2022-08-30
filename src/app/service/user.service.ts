import { url } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Player } from 'src/app/models/Player';
import { Players } from 'src/app/models/Players';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = url + `/users`; // http://localhost:500/api/users

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  constructor(private http: HttpClient) { }

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

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

  addNewCoach(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:5010/api/users', user, { headers: this.postHeaders })
  }

  addNewTeam(team: Team): Observable<Team> {
    return this.http.post<any>('http://localhost:5010/api/teams', team, { headers: this.postHeaders })
  }

  deleteCoach(id: number): Observable<User> {
    return this.http.delete<any>(`http://localhost:5010/api/users/${id}`)
  }

  changeTeamLocation(id: number, location: string): Observable<Team> {
    return this.http.patch<any>(`http://localhost:5010/api/teams/${id}/${location}`, location, { headers: this.postHeaders })
  }

  changeTeamName(id: number, teamName: string): Observable<Team> {
    return this.http.patch<any>(`http://localhost:5010/api/teams/change/${id}/${teamName}`, teamName, { headers: this.postHeaders })
  }

  addPlayerToTeam(id: number, team_id: number): Observable<Players> {
    return this.http.patch<any>(`http://localhost:5010/api/players/${id}/${team_id}`, team_id, { headers: this.postHeaders })
  }

  addNewPlayer(player: Players): Observable<Players> {
    return this.http.post<any>('http://localhost:5010/api/players', player, { headers: this.postHeaders })
  }

  getTeam(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:5010/api/teams/1");
  }

  getThisCoach(cid: number): Observable<any> {
    return this.http.get<any>(`http://localhost:5010/api/users/${cid}`);
  }
  


}
