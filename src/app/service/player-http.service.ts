import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/Player';



@Injectable({
  providedIn: 'root'
})
export class PlayerHttpService {

  constructor(private http: HttpClient) { }
  private postHeaders = new HttpHeaders({"content-type": "application/json"});
  PlayerList: Player[] = [];
  

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>("https://www.balldontlie.io/api/v1/players");
  }


}
