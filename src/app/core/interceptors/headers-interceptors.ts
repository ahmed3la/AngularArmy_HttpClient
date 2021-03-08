import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //will add the logic hear
    const fackToken = 'nkjsnlkdmcdbvsFMNCNDBCHFHIEDJWQOPK';
    const modifiedRequest = req.clone({
      url: req.url.replace('http', 'https'),
      headers: req.headers.set('Authorization', fackToken)
    });

    console.log("in interceptor", "Request", modifiedRequest, "next", next);
    return next.handle(modifiedRequest);
  }

}


