import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/Player';
import { Players } from 'src/app/models/Players';



@Injectable({
  providedIn: 'root'
})
export class PlayerHttpService {

  constructor(private http: HttpClient) { }
  private postHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  

  getAllPlayers(): Observable<any> {
    return this.http.get<any>("https://www.balldontlie.io/api/v1/players");
  }

  addPlayerToTeam(id: number, team_id: number): Observable<Players> {
    return this.http.patch<any>(`http://localhost:5010/api/players/${id}/${team_id}`, team_id, { headers: this.postHeaders })
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
