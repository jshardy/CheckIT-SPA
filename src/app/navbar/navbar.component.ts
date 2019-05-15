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

  home_click() {
    // We need to come up with a default page
    if (this.loggedIn() === true) {
      console.log('Logged in\n');
      this.router.navigate(['/invoice/search']);
      //this.router.navigateByUrl('/invoice/search');
    }
    else {
      console.log('Not logged in\n');
      this.router.navigate(['/home']);
    }
  }

  login() {
    // console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
        this.alertify.error("Incorrect username or password!");
      }, () => {
        // This is the page they go to directly after login
        this.router.navigate(['/invoice/search']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
    // this is the logout page.
    this.router.navigate(['/home']);
  }

  Quickbooks() {
    this.quickserve.initialize().subscribe((url: string) => {
      location.href = url;
    }, error => {
      this.alertify.error(error);
    }, () => {});
  }

}
