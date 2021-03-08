import { ApiService } from './core/http/api.service';
import { Component, HostListener } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOffline: boolean;
  @HostListener('window:offline', ['$event'])
  isWindowOffile(event) {
    console.log('offline ? ', event);
    alert("You don't Internet");
  }

  title = 'myHttpClient';

  constructor(private apiService: ApiService) {


  }

  doGet() {
    this.apiService.doGet().subscribe((event: HttpEvent<any>) => {
      //console.log('event is ', event);

      switch (event.type) {
        case HttpEventType.DownloadProgress:
          console.log(`${Math.round(event.loaded / 1024)} loaded`);
          break;
      }
    });
    // this.apiService.doGet().subscribe((result) => {
    //   console.log('result', result);
    // });
  }
  doGet_Promise() {
    this.apiService.doGet().toPromise().then((result) => {
      console.log('result', result);
    });
  }

  doDelete() {
    this.apiService.doDelete().subscribe((result) => {
      console.log('result', result);
    });
  }
  doPost() {
    this.apiService.doPost().subscribe((result) => {
      console.log('result', result);
    });
  }
  doPut() {
    this.apiService.doPut().subscribe((result) => {
      console.log('result', result);
    });
  }

}
