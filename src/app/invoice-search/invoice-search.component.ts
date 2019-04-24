import { Component, OnInit } from '@angular/core';
import { Invoice } from '../_models/invoice';
import { InvoiceService } from '../_services/invoice.service';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  styleUrls: ['./invoice-search.component.css']
})

export class InvoiceSearchComponent implements OnInit {
  invoices: Invoice[] = [];
  firstName: String;
  lastName: String;
  phone: String;
  email: String;
  company: String;
  
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoiceService.getInvoices().subscribe((invoice: Invoice[]) => {
      this.invoices = invoice;
    }, error => {
      console.log('Error getting invoices');
    });

  }

  search(): void {

  }

  onSubmit(): void {

  }

}
