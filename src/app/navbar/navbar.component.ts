import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { QuickService } from '../_services/quick.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router, 
    private quickserve: QuickService) { }

  ngOnInit() {
  }

  login() {
    // console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
        this.alertify.error(error);
      }, () => {
        // This is the page they go to directly after login
        this.router.navigate(['/customers']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    // this is the logout page.
    this.router.navigate(['/home']);
  }

  Quickbooks() {
    let rerout: string;
    this.quickserve.initialize().subscribe((url: string) => {
      location.href = url;
    }, error => {
      this.alertify.error(error);
    }, () => {});
  }

}
