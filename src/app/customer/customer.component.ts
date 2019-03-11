import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';
import { $ } from 'protractor';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  sub?: any;
  currentCustomer?: Customer;
  @Input() id: number;
  modify: boolean;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.id === undefined) {
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
    this.modify = false;
  }

  deleteCustomer() {
    if (this.modify) {
      this.customerService.getCustomer(this.currentCustomer.id).subscribe((customer: Customer) => {
        this.currentCustomer = customer;
      });
      this.toggleModify();
    } else {
      this.customerService.deleteCustomer(this.currentCustomer.id).subscribe();
      this.router.navigate(['/customers/searchcustomers']);
    }
  }

  modifyCustomer() {
    if (this.modify) {
      this.customerService.modifyCustomer(this.currentCustomer).subscribe();
    }
    this.toggleModify();
  }

  toggleModify() {
    (<HTMLInputElement>document.getElementById('fnameElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('lnameElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('phoneElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('emailElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('streetElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('cityElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('stateElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('zipElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('countryElement')).disabled = this.modify;
    if (this.modify) {
      (<HTMLInputElement>document.getElementById('modifyButton')).innerHTML = 'Modify';
      (<HTMLInputElement>document.getElementById('deleteButton')).innerHTML = 'Delete';
    } else {
      (<HTMLInputElement>document.getElementById('modifyButton')).innerHTML = 'Confirm';
      (<HTMLInputElement>document.getElementById('deleteButton')).innerHTML = 'Cancel';
    }
    this.modify = !this.modify;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
