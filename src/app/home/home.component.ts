import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  password_reset = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelPasswordReset(value: boolean) {
    this.password_reset = false;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
