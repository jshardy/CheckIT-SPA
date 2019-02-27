import { Component, OnInit } from '@angular/core';
import { InvoiceData } from '../_models/invoiceData';
import { AlertifyService } from '../_services/alertify.service';
import { InvoiceService } from '../_services/invoice.service';
import { ninvoke } from 'q';
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
      this.selection.customers = customer;

      // Setup first and last names
      for (let i = 0; i < this.selection.customers.length; i++) {
        this.selection.firstLastName[i] = customer[i].firstName + ' ' + customer[i].lastName;
        console.log(this.selection.firstLastName[i]);
      }
    });
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }

}
