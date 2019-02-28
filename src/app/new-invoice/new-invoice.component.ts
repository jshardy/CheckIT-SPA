import { Component, OnInit } from '@angular/core';
import { InvoiceData } from '../_models/invoiceData';
import { AlertifyService } from '../_services/alertify.service';
import { InvoiceService } from '../_services/invoice.service';
import { Customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';
import { SelectionData } from './SelectionData';
import { TypeaheadMatch } from 'ngx-bootstrap';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})

export class NewInvoiceComponent implements OnInit {
  nInvoice: InvoiceData;
  dropDownConfig: any;
  selection: SelectionData;
  customers: String[];
  ids: number[];
  selectedItem: String;
  selectedValue: String;

  constructor(private invoiceService: InvoiceService, private alertify: AlertifyService, private customerService: CustomerService) {
    // this.dropDownConfig = {
    //   displayKey: 'firstName',
    //   search: false,
    //   height: 'auto',
    //   placeholder: 'Select',
    //   moreText: 'more',
    //   noResultsFound: 'No results found!',
    //   searchPlaceholder: 'Search',
    //   searchOnKey: 'firstName'
    // };
  }

  ngOnInit() {
    this.customerService.getCustomersAll().subscribe((customer: Customer[]) => {
      // Setup first and last names
      this.gotData(customer);
    });
  }

  gotData(customer: Customer[]): void {
    this.customers = [];
    this.ids = [];

    for (let i = 0; i < customer.length; i++) {
      this.customers.push(customer[i].firstName + ' ' + customer[i].lastName);
      this.ids.push(customer[i].id);
      console.log(this.customers[i] + ' - ' + this.ids[i]);
    }
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedItem = event.item;
    this.selectedValue = event.value;
  }

}
