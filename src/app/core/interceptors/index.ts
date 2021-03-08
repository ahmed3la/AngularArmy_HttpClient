import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { HeadersInterceptor } from "./headers-interceptors"


export const httpInterceptorProviders = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeadersInterceptor,
  multi: true
}
