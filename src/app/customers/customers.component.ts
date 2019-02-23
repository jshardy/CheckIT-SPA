import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from '../_models/customer';
import { Address } from '../_models/address'
import { RouterInitializer } from '@angular/router/src/router_module';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public dropdown = 'none';
  public input = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  transfer() {
    if (this.dropdown === 'id') {
      const passId = parseInt(this.input, 10);
      if (!isNaN(passId)) {
        this.router.navigate(['/customers/customer', { id: passId}]);
      }
    } else if (this.dropdown !== 'none') {
      this.router.navigate(['/customers/results', {selection: this.dropdown, input: this.input}]);
    }
  }
}
