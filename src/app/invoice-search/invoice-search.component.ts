import { Component, OnInit } from '@angular/core';
import { Invoice } from '../_models/invoice';
import { InvoiceService } from '../_services/invoice.service';
import { CustomerSelectionData } from '../_models/CustomerSelectionData';
import { CustomerService } from '../_services/customer.service';
import { Customer } from '../_models/customer';
import { variable } from '@angular/compiler/src/output/output_ast';

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
    this.invoiceService.getInvoices().subscribe((invoice: Invoice[]) => { this.invoices = invoice; });

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

  search(): void {}

  searchByName(event): void {
    this.invoiceService.getInvoices().subscribe((invoice: Invoice[]) => {
      this.invoices = invoice;
    });
    // public searchInvoices(invoiceDate: Date, OutgoingInv: Boolean, AmountPaid: Number, CustID: Number): Observable<Invoice[]>
    this.selectedCustomer = event.item;
        this.invoices = this.invoices.filter(
          obj => obj.invoiceCustID === this.selectedCustomer.id
        );

    // for (let i = 0; i < this.invoices.length; i++) {
    //   if (this.invoices[i].invoiceCustID !== this.selectedCustomer.id) {
    //     this.items.filter(obj => obj !== item);
    //   }
    // }

      // this.invoiceService.searchInvoices(null, null, null, txtCustomerName.item.id)
      //   .subscribe((inv: Invoice[]) => { this.invoices = inv; console.log(inv); });
  }

  onSubmit(): void {}
}
