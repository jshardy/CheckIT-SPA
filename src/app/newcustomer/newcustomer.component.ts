import { Component, OnInit } from '@angular/core';

import { CustomerCreateDto } from './../_models/CustomerCreateDto';
import { AddressOnly } from './../_models/AddressOnly';
import { AlertifyService } from '../_services/alertify.service';
import { CustomerService } from '../_services/customer.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {
  customer: CustomerCreateDto;
  address: AddressOnly;
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

  constructor(private customerService: CustomerService, private alertify: AlertifyService) {
   }

  ngOnInit() {
  }

  add() {
    if (this.validCust()) {
      if (this.country || this.state || this.zip || this.city || this.street1) {
        this.address = new AddressOnly(this.country, this.state, this.zip, this.city, this.street1, this.street2);
      }
      this.customer = new CustomerCreateDto(this.fname, this.lname, this.companyName, this.isCompany, this.phone, this.email,
        this.address);
      this.customerService.addCustomer(this.customer).subscribe((temp: any) => {
        this.alertify.success('Success');
        location.reload();
      }, error => {
        this.alertify.error('Error while creating customer');
      }, () => {});
    }
    }

    validCust() {
      if (this.fname && this.lname) {
        if (this.country || this.state || this.zip || this.city || this.street1) {
          if (this.country && this.state && this.zip && this.city && this.street1) {
            return true;
          } else {
            this.alertify.error('Please include country, region, postal code, city, and street address information');
          }
        } else {
          return true;
        }
      } else {
        this.alertify.error('Please include at least a first and last name');
      }
      return false;
    }

    USA() {
      if (this.country === undefined) {
        return false;
      }
      const test = this.country.toLowerCase();
      if (test === 'usa' || test === 'us' || test === 'united states' || test === 'united states of america') {
        return true;
      }
      return false;
    }

}
