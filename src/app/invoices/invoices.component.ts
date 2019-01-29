import { Component, OnInit } from '@angular/core';

import { InvoiceService } from './../_services/invoices.service';
import { Invoice } from './../_models/invoice';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoiceId = new FormControl('');
  invoices: Invoice[];
  invoice: Invoice;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  getInvoiceById(id) {
    this.invoiceService.getInvoiceById(id).subscribe(results => this.invoice = results);
  }
  // getInvoices() {
  //   return this.invoiceService.getInvoices().subscribe(results => this.invoices = results);
  // }
}
