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

  // TODO: Implement getById() when the API is ready
  getById(id: string): Observable<Division> {
    return this.http.get<Division>(this.baseUrl + '/' + id);
  }

  create(division: Division): Observable<Division> {
    return this.http.post<Division>(this.baseUrl, division);
  }

  update(id: string, division: Division): Observable<Division> {
    return this.http.put<Division>(this.baseUrl + '/' + id, division);
  }

  delete(id: string): Observable<Division> {
    return this.http.delete<Division>(this.baseUrl + '/' + id);
  }
}
