import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  @Output() cancelPasswordReset = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.cancelPasswordReset.emit();
  }
}
