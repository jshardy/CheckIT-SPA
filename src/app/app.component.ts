import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './_services/auth.service';
import { User} from './_models/user';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent /* implements OnInit */ {
  // title = 'CheckIT';
  //JwtHelper = new JwtHelperService();
  currentUser: User;

  constructor(private router: Router, private authService: AuthService) 
  {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // ngOnInit() {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     this.authService.decodedToken = this.JwtHelper.decodeToken(token);
  //   }
  // }

}
