import { Component, OnInit, QueryList } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { InvoiceService } from '../_services/invoice.service';
import { Customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';
import { CustomerSelectionData } from '../_models/CustomerSelectionData';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { AddressService } from '../_services/address.service';
import { AddressOnly } from '../_models/AddressOnly';
import { Item } from '../_models/item';
import { ItemService } from '../_services/inventory.service';
import { InvoiceItem } from './InvoiceItems';
import { InvoiceData } from '../_models/invoiceData';
import { LineItemData } from '../_models/LineItemData';
import { LastInvoice } from '../_models/LastInvoice';
import { InvoicesComponent } from '../invoices/invoices.component';
import { QuickService } from '../_services/quick.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})

export class NewInvoiceComponent implements OnInit {
  items: InvoiceItem[] = [];
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
  outgoinginv: Boolean = true;
  sendToQuickBooks: Boolean = false;
  lastInvoiceId: Number;

  constructor(private invoiceService: InvoiceService,
    private alertify: AlertifyService,
    private customerService: CustomerService,
    private addressService: AddressService,
    private itemService: ItemService,
    private alertifyService: AlertifyService,
    private quickService: QuickService) {
  }

  clearPage(): void {
    this.items = [];
    this.currentItem = null;
    this.selectedCustomer = null;
    this.selectedCustomerName = null;
    this.customerNotFound = false;
    this.customerAddress = null;
    this.newCustomer = false;
    this.currentDate = new Date();
    this.totalDue = this.subTotal = this.totalPaid = 0;
    this.outgoinginv = true;


    const item: Item = {
      id: 0,
      description: 'Enter Description',
      name: 'Enter Name',
      price: 0,
      quantity: 0,
      upc: ''
    };

    this.items.push(item);
  }

  ngOnInit() {
    this.customerService.getCustomersAll().subscribe((customer: Customer[]) => {
      // Setup first and last names
      this.ParseCustomers(customer);
      console.log('Is Quickbooks connected? ' + this.quickService.IsConnected());
    });

    const item: Item = {
      id: 0,
      description: 'Enter Description',
      name: 'Enter Name',
      price: 0,
      quantity: 0,
      upc: ''
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
      upc: ''
    };

    this.items.push(item);
    this.priceChanged();
  }

  deleteRow(item: Item): void {
    this.items = this.items.filter(obj => obj !== item);
    this.priceChanged();
  }

  isNumber(value: Number): Boolean {
    return ((value != null) && !isNaN(Number(value)));
  }

  priceChanged(): void {
    console.log('TotalPaid: ' + this.totalPaid);
    console.log('IsNumber: ' + isNumber(this.totalPaid));

    this.subTotal = 0;
    for (const item of this.items) {
      this.subTotal += item.price * item.quantity;
    }
    this.totalDue = (this.subTotal + (this.subTotal * this.salesTax)) - this.totalPaid;
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

  upcEntered(index): void {
    // Go do lookup of items
    this.itemService.searchUPCInternalDatabase(this.items[index].upc).subscribe((item: Item) => {
        if (item !== null && item.description !== null) {
          this.items[index].alertId = item.alertId;
          this.items[index].description = item.description;
          this.items[index].id = item.id;
          this.items[index].locationId = item.locationId;
          this.items[index].name = item.name;
          this.items[index].price = item.price;
          this.items[index].quantityOnHand = item.quantity;

          if (item.quantity < 1) {
            this.items[index].quantity = 0;
          } else {
            this.items[index].quantity = 1;
          }
          this.items[index].upc = item.upc;
            this.addNewRow();
        }
      });
  }

  submitQuickBooks(): void {
    if (this.lastInvoiceId > 0) {
      this.quickService.quickAPICall(this.lastInvoiceId).subscribe(() => {
        console.log('Invoice sent to Quickbooks: ' + this.lastInvoiceId);
      });
      this.lastInvoiceId = null;
      this.clearPage();
    }
  }

  submitInvoice(): void {
    if (this.items.length > 0 && this.items[0].name.length > 0) {
      const invoice: InvoiceData = {
        invoiceDate: this.currentDate,
        amountPaid: this.totalPaid,
        invoiceCustID: this.selectedCustomer.id,
        outgoingInv: this.outgoinginv,
        lineItemList: []
      };

      this.invoiceService.addInvoice(invoice).subscribe();
      setTimeout(() => { return; }, 1000);

      this.invoiceService.getLastInvoiceId().subscribe((linvoice: LastInvoice) => {
        this.lastInvoiceId = linvoice.lastInvoiceId;
        console.log('Last Invoice ID = ' + this.lastInvoiceId);
        console.log('this.items.length = ' + this.items.length);
        for (let i = 0; i < this.items.length; i++) {
          console.log('Quanitity wanted ' + this.items[i].quantity);
          console.log('Quantity on hand ' + this.items[i].quantityOnHand);
          if (this.items[i].quantity > 0 && this.items[i].quantityOnHand > 0) {
            console.log('Last Invoice ID = ' + this.lastInvoiceId);
            const lineItem: LineItemData = {
              InvoiceId: this.lastInvoiceId,
              price: this.items[i].price,
              quantity: this.items[i].quantity,
              itemId: this.items[i].id
            };
            console.log('Adding Line Item #: ' + i + ' added.');
            console.log(lineItem);
            console.log('End LineItem');
            this.invoiceService.addInvoiceLineItem(lineItem).subscribe(() => {
              console.log('Added line item: ' + lineItem);
            });
          }
        }

        if (this.sendToQuickBooks === true) {
          this.submitQuickBooks();
        }

        setTimeout(() => { this.clearPage(); }, 5000);
      });
    }
  }
}
