import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../_models/customer';
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
    if (this.allEmpty()) {
      this.customers = [];
    } else {
      this.customerService.getCustomers(this.fname, this.lname, this.email, this.phone, this.company).subscribe((customer: Customer[]) => {
        this.customers = customer;
      });
    }
  }

  allEmpty() {
    if (this.fname !== '') { return false; }
    if (this.lname !== '') { return false; }
    if (this.phone !== '') { return false; }
    if (this.email !== '') { return false; }
    if (this.company !== '') { return false; }
    return true;
  }

  transfer(passId: number) {
    this.router.navigate(['/customers/customer', { id: passId }]);
  }

}
