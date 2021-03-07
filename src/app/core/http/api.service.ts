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
    console.log(env.apiRoot);

  }


}
