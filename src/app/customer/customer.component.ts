import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  sub?: any;
  currentCustomer?: Customer;
  @Input() id: number;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.id === null) {
      this.sub = this.route.params.subscribe(params => {
         this.customerService.getCustomer(+params['id']).subscribe((customer: Customer) => {
           this.currentCustomer = customer;
        });
      });
    } else {
      this.customerService.getCustomer(this.id).subscribe((customer: Customer) => {
        this.currentCustomer = customer;
      });
    }
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.currentCustomer.id).subscribe();
    this.router.navigate(['/customers/searchcustomers']);
  }

  modifyCustomer() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
