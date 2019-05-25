import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  @Output() cancelPasswordReset = new EventEmitter();
  model: any = {};
  email: String;

  constructor(private router: Router, private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  reset() {
    this.auth.resetpassword(this.model).subscribe((result) => {
        this.alertify.success('Password has been reset');
    }, error => {
        this.alertify.error('Username incorrect');
      });

  }

  cancel() {
    this.cancelPasswordReset.emit();
  }
}
