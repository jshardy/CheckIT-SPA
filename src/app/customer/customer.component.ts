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
  }

  ngOnInit() {
  }

}
