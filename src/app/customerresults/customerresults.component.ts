import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Customer } from '../_models/customer';
import { Address } from '../_models/address';
import { Invoice } from '../_models/invoice';
import { CustomerService } from './../_services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customerresults.component.html',
  styleUrls: ['./customerresults.component.css']
})
export class CustomerResultsComponent implements OnInit {
  sub?: any;
  customers?: Customer[];

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      switch (params['selection']) {
        case 'email':
          this.customerService.getCustomersByEmail(params['input']).subscribe((customer: Customer[]) => {
            this.customers = customer;
          });
          break;
        case 'phone':
          this.customerService.getCustomersByPhone(params['input']).subscribe((customer: Customer[]) => {
            this.customers = customer;
          });
          break;
        case 'fname':
          this.customerService.getCustomersByFirstName(params['input']).subscribe((customer: Customer[]) => {
            this.customers = customer;
          });
          break;
        case 'lname':
          this.customerService.getCustomersByLastName(params['input']).subscribe((customer: Customer[]) => {
            this.customers = customer;
          });
          break;
        case 'company':
          this.customerService.getCustomersByCompany(params['input']).subscribe((customer: Customer[]) => {
            this.customers = customer;
          });
          break;
        default:
          this.customerService.getCustomers().subscribe((customer: Customer[]) => {
            this.customers = customer;
          });
          break;
      }

    });
  }

  getCustomers() {
    return this.customerService.getCustomers().subscribe((customer: Customer[]) => {
      this.customers = customer;
    });
  }

  deleteCustomer(customer: Customer) {
  }

  transfer(passId: number) {
    this.router.navigate(['/customers/customer', { id: passId }]);
  }
}
