import { Component, OnInit } from '@angular/core';

import { Customer } from './../_models/customer';
import { Address } from './../_models/address';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {
  customer: Customer;
  address: Address;
  public fname: '';
  public lname: '';
  public companyName: '';
  public isCompany: false;
  public phone: '';
  public email: '';
  public country: '';
  public state: '';
  public zip: '';
  public city: '';
  public street1: '';
  public street2: '';


  constructor(private customerService: CustomerService) {

   }

  ngOnInit() {
  }

  add() {
    this.address = new Address(null, this.country, this.state, this.zip, this.city, this.street1, this.street2);
    this.customer = new Customer(null, this.fname, this.lname, this.companyName, this.isCompany, this.phone, this.email);
    this.customerService.addAddress(this.address).subscribe((add: Address) => {
      this.address = add;
    })
    this.customerService.addCustomer(this.customer, this.address.id);
  }

}
