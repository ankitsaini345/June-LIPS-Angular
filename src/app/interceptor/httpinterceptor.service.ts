import {
  HttpInterceptor, HttpRequest,
  HttpHandler, HttpEvent, HttpHeaders
}
  from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpinterceptorService implements
  HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const request = req.clone({
      headers:
        new HttpHeaders()
          .set('jwttoken', 'gsfgfdgkk565kjhkj')
    });
    return next.handle(request);
  }
}
