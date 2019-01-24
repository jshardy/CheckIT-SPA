// This file states when routes can be accessed.
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
//import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser) 
      {
          // authorised so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }


  // constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) { }
  // canActivate(next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if (this.authService.loggedIn()) {
  //     return true;
  //   }

  //   this.alertify.error('Not logged in.');
  //   this.router.navigate(['/home']);
  //   return false;
  // }
