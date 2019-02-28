// Angular's
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  // private readonly headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //
  // getReqOptions() {
  //   return { headers: this.headers };
  // }

  getData() {
    return this.http.get('/assets/data/data.json');
  }
}
