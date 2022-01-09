import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Division } from '../model/division.model';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://spa-api.aqiladigital.com/api/divisions';
  }

  getAll(): Observable<Division[]> {
    return this.http.get<Division[]>(this.baseUrl);
  }
}
