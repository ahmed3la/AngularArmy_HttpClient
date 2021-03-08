import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { HeadersInterceptor } from "./headers-interceptors"


export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true
  },

]
