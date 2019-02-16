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
  customers?: Customer[];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
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
