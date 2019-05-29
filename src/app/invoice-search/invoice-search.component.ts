import { Component, OnInit } from '@angular/core';
import { Invoice } from '../_models/invoice';
import { InvoiceService } from '../_services/invoice.service';
import { CustomerSelectionData } from '../_models/CustomerSelectionData';
import { CustomerService } from '../_services/customer.service';
import { Customer } from '../_models/customer';
import { variable } from '@angular/compiler/src/output/output_ast';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { initServicesIfNeeded } from '@angular/core/src/view';

@Component({
  selector: "app-invoice-search",
  templateUrl: "./invoice-search.component.html",
  styleUrls: ["./invoice-search.component.css"]
})
export class InvoiceSearchComponent implements OnInit {
  invoices: Invoice[] = [];
  inv: Invoice[] = [];
  firstName: String;
  lastName: String;
  phone: String;
  email: String;
  company: String;

  customerData: CustomerSelectionData[] = [];
  selectedCustomer: CustomerSelectionData = null;
  selectedCustomerName: String = null;
  // ustomer: Customer[] = [];

  constructor(private invoiceService: InvoiceService,
    private customerService: CustomerService) {}

  ngOnInit() {
    this.invoiceService.getInvoices()
      .subscribe((invoice: Invoice[]) => {
        this.invoices = invoice;
      });

    // Get customer names and parse them into first and last name
    this.customerService
      .getCustomersAll()
      .subscribe((customer: Customer[]) => {
        // Setup first and last names
        // this.customer = customer;
        this.ParseCustomers(customer);
      });
  }

  ParseCustomers(customer: Customer[]): void {
    for (let i = 0; i < customer.length; i++) {
      const c: CustomerSelectionData = {
        id: customer[i].id,
        firstLastName: customer[i].isCompany
          ? customer[i].companyName
          : customer[i].firstName + " " + customer[i].lastName,
        companyName: customer[i].isCompany ? customer[i].companyName : null,
        phoneNumber: customer[i].phoneNumber
      };
      this.customerData.push(c);
    }
  }

  totalCost(id: Number): Number {
    let sum: any = 0;

    this.invoiceService.getInvoiceById2(id).subscribe((invoice: Invoice) => {
      sum = invoice.total;
      // console.log(invoice.lineItems);
      // if(invoice === undefined || invoice.lineItems === undefined) {
      //   return -1;
      // }

      // for (let i = 0; i < invoice.lineItems.length; i++) {
      //   sum += invoice.lineItems[i].price * invoice.lineItems[i].quantitySold;
      // }
    });
    return sum;
  }
  search(): void {}

  transfer(id: Number): void {

  }

  searchByName(event): void {
    this.invoiceService.searchInvoiceByCustId(event.item.id).subscribe((invoice: Invoice[]) => {
      this.invoices = invoice;
    });
  }

  onSubmit(): void {}
}
