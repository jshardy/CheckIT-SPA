import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { InvoiceService } from './../_services/invoice.service';
import { Invoice } from './../_models/invoice';
import { AlertifyService } from '../_services/alertify.service';
import { ButtonsModule } from 'ngx-bootstrap';

// import { INVOICES } from './../mock-invoices';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[];
  invoiceSingle: Invoice;

  constructor(private invoiceService: InvoiceService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getInvoices();
  }

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
}
