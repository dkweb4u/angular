import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginserviceService } from '../login/loginservice.service';


export const loginGuard: CanActivateFn = (route, UrlSegment) => {
  return inject(LoginserviceService).isLoggedIn ? true : inject(Router).createUrlTree(['/login'])  ;
  // return true
};
