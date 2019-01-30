import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { InvoiceService } from './../_services/invoice.service';
import { Invoice } from './../_models/invoice';
import { INVOICES } from './../mock-invoices';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  // invoiceId = new FormControl('');
  invoices = INVOICES;
  // invoice: Invoice;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  getInvoiceById(id) {
    // this.invoiceService.getInvoiceById(id).subscribe(results => this.invoice = results);
  }
  getInvoices() {
    // return this.invoiceService.getInvoices().subscribe(results => this.invoices = results);
  }
}
