import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../_services/invoice.service';
import { Customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';
import { Invoice } from '../_models/invoice';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  customers: Customer[];
  customersSearch: Customer[];
  invoices: Invoice[];
  firstName: string;
  lastName: string;
  invoiceSearchId: number;
  invoice: Invoice;

  constructor(private invoiceService: InvoiceService, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersAll().subscribe((customer: Customer[]) => {
      this.customers = customer;
    }, error => {
        console.log('Error getting customers');
    });

    this.invoiceService.getInvoices().subscribe((invoice: Invoice[]) => {
      this.invoices = invoice;
    }, error => {
        console.log('Error getting invoices');
    });
  }

  SearchCustomer(): void {
    if (this.firstName === "" && this.lastName === "") {
      this.customersSearch = [];
    } else {
      this.customerService.getCustomers(this.firstName, this.lastName).subscribe((customer: Customer[]) => {
        this.customersSearch = customer;
      }, error => {
        console.log('Error searching for customers');
      });
    }
  }

  SearchInvoiceId(): void {
    this.invoiceService.getInvoiceById(this.invoiceSearchId).subscribe((i: Invoice) => {
      this.invoice = i;
    }, error => {
        console.log(`Error searching for invoice id: {invoiceSearchId}`);
    });
  }
}
