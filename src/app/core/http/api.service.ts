//import { environment as env } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment as env } from '@env/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const headers = { guest: 'true', language: 'en' }
    this.headers = new HttpHeaders(headers);
  }

  doGet() {
    return this.http.get(`${env.apiRoot}/get`, {
      params: { page: '20' },
      headers: this.headers
    });
  }

  doDelete() {
    return this.http.delete(`${env.apiRoot}/delete`, {
      params: { page: '20' },
      headers: { guest: 'true' }
    });
  }
  doPost() {
    return this.http.post(`${env.apiRoot}/post`,
      { age: 20 },
      {
        params: { page: '20' },
        headers: { guest: 'true' }
      });
  }
  doPut() {
    return this.http.put(`${env.apiRoot}/put`,
      { age: 20 },
      {
        params: { page: '20' },
        headers: { guest: 'true' }
      });
  }
}
