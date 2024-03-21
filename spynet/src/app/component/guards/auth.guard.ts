import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {

  return inject(AuthService).checkCurrentUserLoggedIn()
    // if it is true, leave it as-is
    ? true
    // otherwise, redirect to "/login"
    : inject(Router).createUrlTree(['/login']);
};

export const AdminAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(AuthService).isUserAdmin()
    ? true
    // if the user is not an admin, redirect them to "/inventory"
    : inject(Router).createUrlTree(['/inventory']);
};