//import { environment as env } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment as env } from '@env/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  doGet() {
    //console.log(env.apiRoot);
    return this.http.get(`${env.apiRoot}/get`, {
      params: { page: '20' },
      headers: { guest: 'true' }
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
