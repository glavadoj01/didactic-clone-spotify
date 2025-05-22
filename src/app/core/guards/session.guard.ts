import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  try { // token: Variable Local    tokenVar: Nombre de la cookie buscada
    const token: boolean = cookieService.check('tokenVar');
    if (!token) {
      router.navigate(['/', 'auth']);
      return false;
    }    
    return token;
  } catch (e) {
    console.log('🔴👉 Algo sucedió ?? ', e);
    return false;
  }
};