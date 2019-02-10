import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { InvoiceService } from './../_services/invoice.service';
import { Invoice } from './../_models/invoice';
import { AlertifyService } from '../_services/alertify.service';
// import { INVOICES } from './../mock-invoices';


import { InvoiceService } from './../_services/invoices.service';
import { Invoice } from './../_models/invoice';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
<<<<<<< HEAD
  invoiceId = new FormControl('');
  invoices: Invoice[];
  invoice: Invoice;

  constructor(private invoiceService: InvoiceService) { }
=======
  invoices: Invoice[];
  invoiceSingle: Invoice;

  constructor(private invoiceService: InvoiceService, private alertify: AlertifyService) { }
>>>>>>> FAST-GUI

  ngOnInit() {
    this.getInvoices();
  }

<<<<<<< HEAD
  getInvoiceById(id) {
    this.invoiceService.getInvoiceById(id).subscribe(results => this.invoice = results);
  }
  // getInvoices() {
  //   return this.invoiceService.getInvoices().subscribe(results => this.invoices = results);
  // }
=======
  getInvoiceById(id: number) {
    this.invoiceService.getInvoiceById(id).subscribe((invoice: Invoice) => {
      this.invoiceSingle = invoice;
    }, error => {
        this.alertify.error(error);
    });
  }

  getInvoices() {
    return this.invoiceService.getInvoices().subscribe((invoices: Invoice[]) => {
      this.invoices = invoices;
    }, error => {
        this.alertify.error('What is wrong?');
    });
  }
>>>>>>> FAST-GUI
}
