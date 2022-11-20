import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '../models/title.model';

@Injectable({
  providedIn: 'root'
})
export class TitlesService {

  baseUrl = 'https://localhost:7000/api/Title';

  constructor(private http: HttpClient) { }

  //get all title

  getAllTitles(): Observable<Title[]>{
    return this.http.get<Title[]>(this.baseUrl); 
  }
}
