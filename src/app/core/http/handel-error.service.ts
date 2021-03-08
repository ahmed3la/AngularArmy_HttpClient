import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandelErrorService {

  constructor() {

  }


  logError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent)
      console.log('Client site error', error);
    else
      console.log('Server site error', error);

    return throwError('There is something went error');
  }

}
