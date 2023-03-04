import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let authReq = req;

    const headers = new HttpHeaders({
      'x-api-key':'BigProfiles-API'
    });

    authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
