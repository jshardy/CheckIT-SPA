import { Component, OnInit } from '@angular/core';

import { Item } from '../_models/item';
import { ItemService } from './../_services/inventory.service';
import { AlertifyService } from './../_services/alertify.service';
import { ItemAlertService } from './../_services/item-alert.service';
// import { Alert } from 'selenium-webdriver';
import { ItemAlert } from '../_models/alert';
import { AlertData } from '../_models/alertData';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items?: Item[];
  item?: Item;
  alert: ItemAlert;
  selectedItem?: Item;
  constructor(private itemService: ItemService, private alertify: AlertifyService, private itemAlert: ItemAlertService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    return this.itemService.getItems().subscribe((items: Item[]) => {
       this.items = items;
    }, error => {
      this.alertify.error(error);
      console.error(error);
    });
  }

  // This is Create Alert
  alertToggle(ItemId: number, threshhold: number): void {
    this.itemAlert.addAlert(ItemId, threshhold).subscribe(() => {
      this.alertify.success('Alert created');
    }, error => {
      this.alertify.error('Could not create alert');
    });
  }

  updateItem(item: Item) {
    return this.itemService.updateItem(item).subscribe(() => {
      this.alertify.success('Success');
      this.item = item;
    }, error => {
      this.alertify.error(error);
      console.error(error);
    });
  }

  onSelect(item) {
    this.selectedItem = item;
  }
}
