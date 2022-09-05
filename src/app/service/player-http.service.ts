import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/Player';
import { Players } from 'src/app/models/Players';
import { lineup } from '../models/lineup';



@Injectable({
  providedIn: 'root'
})
export class PlayerHttpService {

  constructor(private http: HttpClient) { }
  private postHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  
  addLineup(lineup: lineup): Observable<any> {
    return this.http.post<any>('http://localhost:5010/api/lineups', lineup, { headers: this.postHeaders })
  }

  getPlayer(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:5010/api/players/${id}`);
  }

  getAllPlayers(): Observable<any> {
    return this.http.get<any>("https://www.balldontlie.io/api/v1/players");
  }

  changePlayerTeam(id: number, team_id: number): Observable<Players> {
    return this.http.patch<any>(`http://localhost:5010/api/players/team/${id}/${team_id}`, team_id, { headers: this.postHeaders })
  }

  changeWeight(id: number, weight: number): Observable<Players> {
    return this.http.patch<any>(`http://localhost:5010/api/players/weight/${id}/${weight}`, weight, { headers: this.postHeaders })
  }

  changeHeightFt(id: number, height_feets: number): Observable<Players> {
    return this.http.patch<any>(`http://localhost:5010/api/players/heightft/${id}/${height_feets}}`, height_feets, { headers: this.postHeaders })
  }

  changeHeightIn(id: number, height_inches: number): Observable<Players> {
    return this.http.patch<any>(`http://localhost:5010/api/players/heightin/${id}/${height_inches}`, height_inches, { headers: this.postHeaders })
  }

  addNewPlayer(player: Players): Observable<Players> {
    return this.http.post<any>('http://localhost:5010/api/players', player, { headers: this.postHeaders })
  }

  getAllOurPlayers(): Observable<any> {
    return this.http.get<any>("http://localhost:5010/api/players");
  }

  deletePlayer(id: number): Observable<Players> {
    return this.http.delete<any>(`http://localhost:5010/api/players/${id}`)
  }


}
