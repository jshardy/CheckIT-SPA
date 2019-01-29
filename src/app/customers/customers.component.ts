import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Customer } from '../_models/customer';
import { CustomerService } from './../_services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerId = new FormControl('');
  customers: Observable<Customer[]>;
  customer: Customer;
  selectedCustomer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // this.getCustomers();
  }
  addCustomer(customer) {
    // this.customerService.createCustomer(customer).subscribe( results => this.customers.push(customer));
  }

  updatecustomerId(id) {
  }

  getCustomerById(id) {
    this.customerService.getCustomerById(id).subscribe(res => this.customer );
   }
}
