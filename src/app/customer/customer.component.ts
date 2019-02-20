import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  sub?: any;
  currentCustomer?: Customer;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.customerService.getCustomer(+params['id']).subscribe((customer: Customer) => {
         this.currentCustomer = customer;
       });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
