import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgService {
  x: any
  y: any
  constructor(private http: HttpClient) {
    this.x = false;
    this.y = false

  }
  getVotreData(page: number, size: number): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<any>("http://localhost:8000/f/o", { params });
  }
  getVotreDat(page: number, size: number, cate: String): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString()).set('cate', cate.toString());
    return this.http.get<any>("http://localhost:8000/f/n", { params });
  }
}
