import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from '../_models/customer';
import { Address } from '../_models/address'
import { RouterInitializer } from '@angular/router/src/router_module';
import { CustomerService } from '../_services/customer.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  public fname = '';
  public lname = '';
  public company = '';
  public email = '';
  public phone = '';

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
  }

  search() {
    this.customerService.getCustomers(this.fname, this.lname, this.email, this.phone, this.company).subscribe((customer: Customer[]) => {
      this.customers = customer;
    });
  }

  transfer(passId: number) {
    this.router.navigate(['/customers/customer', { id: passId }]);
  }
}
