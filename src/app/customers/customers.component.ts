import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from '../_models/customer';
import { CustomerService } from './../_services/customer.service';
import { Address } from '../_models/address'
import { RouterInitializer } from '@angular/router/src/router_module';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public customers: Customer[];
  public dropdown = 'none';
  public input = 'Search';

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }
  addCustomer(customer) {
    // this.customerService.createCustomer(customer).subscribe( results => this.customers.push(customer));
  }

  updatecustomerId(id) {
  }

  getCustomerById(id) {
    // this.customerService.getCustomerById(id).subscribe(res => this.customer );
   }
  getCustomers() {
    return this.customerService.getCustomers().subscribe((customer: Customer[]) => {
      this.customers = customer;
    });
  }

  deleteCustomer(customer: Customer): void {
    // this.customers = this.customers.filter(h => h !== customer);
    // this.customerService.deleteCustomer(customer).subscribe();
  }

  transfer()
  {
    if (this.dropdown === 'id')
    {
      this.router.navigate(['/customer/customers', parseInt(this.input, 10)]);
    }
    else if (this.dropdown !== 'none')
    {
      this.router.navigate(['/customers/customer', this.dropdown, this.input]);
    }
  }
}
