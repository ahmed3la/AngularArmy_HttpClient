import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler)
    : Observable<HttpEvent<unknown>> {
    console.log('in error handler');
    return next.handle(request).pipe(
      catchError((err) => {
        console.log('My error is: ', err);
        return of(err);
      })
    );
  }
}
