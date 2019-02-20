import { Component, OnInit } from '@angular/core';

import { Item } from '../_models/item';
import { ItemService } from './../_services/inventory.service';
import { AlertifyService } from './../_services/alertify.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items?: Item[];
  item?: Item;
  selectedItem?: Item;
  constructor(private itemService: ItemService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    return this.itemService.getItems().subscribe((items: Item[]) => {
      this.items = items;
    }, error => {
      this.alertify.error(error);
    });
  }

  onSelect(item) {
    this.selectedItem = item;
  }
}
