import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../models/position.model';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  baseUrl = 'https://localhost:7000/api/Position';

  constructor(private http: HttpClient) { }

  //get all Position

  getAllPositions(): Observable<Position[]>{
    return this.http.get<Position[]>(this.baseUrl); 
  }
}
