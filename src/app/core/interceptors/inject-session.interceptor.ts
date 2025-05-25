import { inject } from '@angular/core';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export const injectSessionInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
    const cookieService = inject(CookieService);
  try {
    const token = cookieService.get('tokenVar');
    let newRequest = req;
    newRequest = req.clone(
      {
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      }
    );

    return next(newRequest);
    
  } catch (error) {
    console.log('Error in injectSessionInterceptor:', error);
    return next(req);
  }
};