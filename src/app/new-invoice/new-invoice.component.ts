import { Component, OnInit } from '@angular/core';
import { InvoiceData } from '../_models/invoiceData';
import { AlertifyService } from '../_services/alertify.service';
import { InvoiceService } from '../_services/invoice.service';
import { Customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';
import { CustomerSelectionData } from './CustomerSelectionData';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { AddressService } from '../_services/address.service';
import { AddressOnly } from '../_models/AddressOnly';
import { Item } from '../_models/item';
import { ItemService } from '../_services/inventory.service';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})

export class NewInvoiceComponent implements OnInit {
  nInvoice: InvoiceData;
  items: Item[] = [];
  currentItem: Item;
  customerData: CustomerSelectionData[] = [];
  selectedCustomer: CustomerSelectionData = null;
  selectedCustomerName: String = null;
  customerNotFound: Boolean = false;
  customerAddress: AddressOnly = null;
  newCustomer: Boolean = false;
  currentDate = new Date();
  totalDue = 0;
  subTotal = 0;
  salesTax = .07;
  totalPaid = 0;

  constructor(private invoiceService: InvoiceService,
    private alertify: AlertifyService,
    private customerService: CustomerService,
    private addressService: AddressService) {
  }

  ngOnInit() {
    this.customerService.getCustomersAll().subscribe((customer: Customer[]) => {
      // Setup first and last names
      this.ParseCustomers(customer);
    });

    const item: Item = {
      id: 0,
      description: 'Enter Description',
      name: 'Enter Name',
      price: 0,
      quantity: 0,
      upc: '000'
    };

    this.items.push(item);
  }

  addNewRow(): void {
    const item: Item = {
      id: 0,
      description: 'Enter Description',
      name: 'Enter Name',
      price: 0,
      quantity: 0,
      upc: '000'
    };

    this.items.push(item);
  }

  deleteRow(item: Item): void {
    this.items = this.items.filter(obj => obj !== item);
  }

  priceChanged(): void {
    this.subTotal = 0;
    for (const item of this.items) {
      this.subTotal += item.price * item.quantity;
    }
    this.totalDue = (this.subTotal + (this.subTotal * this.salesTax)) - this.totalPaid;
    console.log(this.totalDue);
  }

  ParseCustomers(customer: Customer[]): void {
    for (let i = 0; i < customer.length; i++) {
      const c: CustomerSelectionData = {
        id: customer[i].id,
        firstLastName: customer[i].isCompany ? customer[i].companyName : customer[i].firstName + ' ' + customer[i].lastName,
        companyName: customer[i].isCompany ? customer[i].companyName : null,
        phoneNumber: customer[i].phoneNumber
      };
      this.customerData.push(c);
    }
  }

  onCustomerSelect(event: TypeaheadMatch): void {
    this.selectedCustomer = event.item;
    // console.log(this.selectedCustomer);

    // get the address
    if (this.selectedCustomer != null) {
      this.addressService.getAddressById(this.selectedCustomer.id).subscribe((address: AddressOnly) => {
        this.customerAddress = address;
        this.newCustomer = false;
      });
    } else {
      this.newCustomer = true;
    }
  }


}
