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
  private postHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  

  getAllPlayers(): Observable<any> {
    return this.http.get<any>("https://www.balldontlie.io/api/v1/players");
    
  }


}
