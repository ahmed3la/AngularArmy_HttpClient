import { ApiService } from './core/http/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myHttpClient';

  constructor(private apiService: ApiService) {


  }

  doGet() {
    this.apiService.doGet();
  }

}
