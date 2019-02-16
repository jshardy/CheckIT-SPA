import { Component, OnInit } from '@angular/core';

import { Customer } from '../_models/customer';
import { Address } from '../_models/address';
import { Invoice } from '../_models/invoice';

@Component({
  selector: 'app-customer',
  templateUrl: './customerresults.component.html',
  styleUrls: ['./customerresults.component.css']
})
export class CustomerResultsComponent implements OnInit {
  customer1?: Customer;
  customer2?: Customer;
  customers?: Customer[];
  address1?: Address;
  address2?: Address;

  constructor() {
    this.address1 = ({
      id: 3,
      country: "United States",
      state: "OR",
      zipCode: "97601",
      city: "Klamath Falls",
      street: "123 Main Street",
      aptNum: null,
      defaultAddress: true
    });
    this.address2 = ({
      id: 4,
      country: "United Kingdom",
      state: "N/A",
      zipCode: "11111",
      city: "London",
      street: "1234 Main Avenue",
      aptNum: null,
      defaultAddress: true
    });
    this.customer1 = ({
      id: 1,
      firstName: "John",
      lastName: "Doe",
      companyName: "McAfee Security",
      isCompany: false,
      custAddress: this.address1,
      phoneNumber: "555-555-5555",
      email: "john.doe@example.com",
      customerInvoiceList: null
     });
     this.customer2 = ({
       id: 2,
       firstName: "Jane",
       lastName: "Smith",
       companyName: "Norton Security",
       isCompany: false,
       custAddress: this.address2,
       phoneNumber: "000-000-0000",
       email: "jane.smith@example.com",
       customerInvoiceList: null
      });
    this.customers = [this.customer1, this.customer2];
  }

  ngOnInit() {
  }

}
