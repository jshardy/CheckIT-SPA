import { Component, OnInit } from '@angular/core';
import { InvoiceData } from '../_models/invoiceData';
import { AlertifyService } from '../_services/alertify.service';
import { InvoiceService } from '../_services/invoice.service';
import { Customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';
import { CustomerSelectionData } from './CustomerSelectionData';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { Address } from '../_models/address';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})

export class NewInvoiceComponent implements OnInit {
  nInvoice: InvoiceData;
  customerData: CustomerSelectionData[] = [];
  selectedCustomer: CustomerSelectionData;
  selectedCustomerName: String;
  customerNotFound: Boolean = false;
  customerAddress: Address;
  constructor(private invoiceService: InvoiceService, private alertify: AlertifyService, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getCustomersAll().subscribe((customer: Customer[]) => {
      // Setup first and last names
      this.ParseCustomers(customer);
    });
  }

  ParseCustomers(customer: Customer[]): void {
    for (let i = 0; i < customer.length; i++) {
      const c: CustomerSelectionData = {
        id: customer[i].id,
        firstLastName: customer[i].firstName + ' ' + customer[i].lastName
      };
      this.customerData.push(c);
    }
  }

  onCustomerSelect(event: TypeaheadMatch): void {
    this.selectedCustomer = event.item;
    console.log(this.selectedCustomer);
  }

  
}
