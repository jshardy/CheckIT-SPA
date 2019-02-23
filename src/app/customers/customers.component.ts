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
  public dropdown = 'none';
  public input = '';

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
  }

  search() {
    switch (this.dropdown) {
      case 'email':
        this.customerService.getCustomersByEmail(this.input).subscribe((customer: Customer[]) => {
          this.customers = customer;
        });
        break;
      case 'phone':
        this.customerService.getCustomersByPhone(this.input).subscribe((customer: Customer[]) => {
          this.customers = customer;
        });
        break;
      case 'fname':
        this.customerService.getCustomersByFirstName(this.input).subscribe((customer: Customer[]) => {
          this.customers = customer;
        });
        break;
      case 'lname':
        this.customerService.getCustomersByLastName(this.input).subscribe((customer: Customer[]) => {
          this.customers = customer;
        });
        break;
      case 'company':
        this.customerService.getCustomersByCompany(this.input).subscribe((customer: Customer[]) => {
          this.customers = customer;
        });
        break;
      default:
        this.customerService.getCustomers().subscribe((customer: Customer[]) => {
          this.customers = customer;
        });
        break;
    }
  }

  transfer(passId: number) {
    this.router.navigate(['/customers/customer', { id: passId }]);
  }
}
