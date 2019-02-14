import { Component, OnInit } from '@angular/core';

import { Customer } from '../_models/customer';
import { Address } from '../_models/address';
import { Invoice } from '../_models/invoice';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  invoice1?: Invoice;
  invoice2?: Invoice;
  invoices?: Invoice[];
  currentCustomer?: Customer;
  customerAddress?: Address;

  constructor() { 
    this.customerAddress = ({
      id: 5,
      country: "United States",
      state: "OR",
      zipCode: "97601",
      city: "Klamath Falls",
      street: "123 Main Street",
      aptNum: null,
      defaultAddress: true
    });
    this.currentCustomer = ({
      id: 1,
      firstname: "John",
      lastname: "Doe",
      companyName: "McAfee Security",
      address: this.customerAddress,
      phoneNumber: "555-555-5555",
      email: "john.doe@example.com"
     });
    this.invoice1 = ({
      id: 1,
      invoiceDate: "1-1-70",
      outgoingInv: true,
      incomingInv: false,
      amountPaid: null,
      lineItems: null
    });
    this.invoice2 = ({
      id: 3,
      invoiceDate: "1-5-18",
      outgoingInv: true,
      incomingInv: false,
      amountPaid: null,
      lineItems: null
    });
    this.invoices = [this.invoice1, this.invoice2];
  }

  ngOnInit() {
  }

}
