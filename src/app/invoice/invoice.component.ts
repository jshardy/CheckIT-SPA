import { Component, OnInit } from '@angular/core';

import { Invoice } from '../_models/invoice';
import { Address } from '../_models/address';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  currentInvoice?: Invoice;
  companyLogoURL?: string;
  companyNameStr?: string;
  addr?: Address;
  payeeAddr?: Address;

  constructor() {
    this.currentInvoice = ({
      id: null,
      amountPaid: null,
      incomingInv: null,
      outgoingInv: null,
      lineItems: null,
      invoiceDate: null
    });
    this.addr = ({
      street: null,
      state: null,
      zipCode: null
    });
    this.payeeAddr = ({
      street: null,
      state: null,
      zipCode: null
    });
    this.companyLogoURL = null;
    this.companyNameStr = null;
  }

  ngOnInit() {
  }

}
