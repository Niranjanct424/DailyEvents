import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/service/account.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

 
  constructor(private account: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('url ==> ', request.url);

    if (!request.url.endsWith('user.json')) {
      // setting the header
      const headers = request.headers.set("token", this.account.getToken());
      // with modifying cloning the header
      const newRequest = request.clone({headers});
  
      console.log("cloned  ",newRequest.headers);
      
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }
  }
}
