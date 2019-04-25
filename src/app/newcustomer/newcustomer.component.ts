import { Component, OnInit } from '@angular/core';

import { CustomerCreateDto } from './../_models/CustomerCreateDto';
import { AddressOnly } from './../_models/AddressOnly';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {
  customer: CustomerCreateDto;
  public fname: '';
  public lname: '';
  public companyName: '';
  public isCompany: boolean = false;
  public phone: '';
  public email: '';
  public country: '';
  public state: string;
  public zip: '';
  public city: '';
  public street1: '';
  public street2: '';
  public defaultAddress: true;
  public id: number;
  public stateCodes = 
  ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO',
  'MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY'];

  constructor(private customerService: CustomerService) {
   }

  ngOnInit() {
  }

  add() {
    this.customer = new CustomerCreateDto(this.fname, this.lname, this.companyName, this.isCompany, this.phone, this.email,
      new AddressOnly(this.country, this.state, this.zip, this.city, this.street1, this.street2));
    this.customerService.addCustomer(this.customer).subscribe();
    location.reload();
  }

}
