import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  try {
    const cookieService = inject(CookieService);
    const token = cookieService.get('tokenVar');
    const newRequest = req.clone(
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