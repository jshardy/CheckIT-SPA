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

  constructor(private invoiceService: InvoiceService,
    private alertify: AlertifyService,
    private customerService: CustomerService,
    private addressService: AddressService,
    private itemService: ItemService) {
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
    document.getElementById(this.items.length.toString()).focus();
  }

  deleteRow(item: Item): void {
    this.items = this.items.filter(obj => obj !== item);
    this.priceChanged();
  }

  priceChanged(): void {
    this.subTotal = 0;
    for (const item of this.items) {
      this.subTotal += item.price * item.quantity;
    }
    this.totalDue = (this.subTotal + (this.subTotal * this.salesTax)) - this.totalPaid;
    // console.log(this.totalDue);
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

  upcEntered(index): void {
    // Go do lookup of items
//    console.log(event.upc);
      this.itemService.searchUPC(this.items[index].upc).subscribe((item: Item) => {
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

  submitInvoice(): void {
    if (this.items.length > 0 && this.items[0].name.length > 0) {
      let invoice: InvoiceData = {
        invoiceDate: this.currentDate,
        amountPaid: this.totalPaid,
        invoiceCustID: this.selectedCustomer.id,
        outgoingInv: this.outgoinginv,
        lineItemList: []
      };

<<<<<<< HEAD
      let lineItem: LineItemData;
      let lastInvoice: LastInvoice;
      this.invoiceService.addInvoice(invoice).subscribe();

    //   this.invoiceService.getLastInvoiceId().subscribe((linvoice: LastInvoice) => {
    //     lastInvoice = linvoice;
    //   });

    //  for (let i = 0; i < this.items.length; i++) {
    //     if (this.items[i].quantity > 0 && this.items[i].quantityOnHand > 0) {
    //       lineItem.InvoiceId = lastInvoice.lastInvoiceId;
    //       lineItem.price = this.items[i].price;
    //       lineItem.quantity = this.items[i].quantity;
    //       this.invoiceService.addInvoiceLineItem(lineItem);
    //     }
    //   }
=======
      this.invoiceService.addInvoice(invoice).subscribe();

      this.invoiceService.getLastInvoiceId().subscribe((linvoice: LastInvoice) => {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].quantity > 0 && this.items[i].quantityOnHand > 0) {
            let lineItem: LineItemData = {
              InvoiceId: linvoice.lastInvoiceId,
              price: this.items[i].price,
              quantity: this.items[i].quantity,
              itemId: this.items[i].id
            };

            console.log(lineItem);
            this.invoiceService.addInvoiceLineItem(lineItem).subscribe();

            this.clearPage();
          }
        }
      });



>>>>>>> 5afe617a7952991c0a972f8589de74a3068f3499
    }
  }
}


// export interface InvoiceData {
//   id?: number;
//   invoiceDate?: string;
//   outgoingInv?: boolean;
//   amountPaid?: number;
//   invoiceCustID?: number;
//   lineItems?: number[];
// }
