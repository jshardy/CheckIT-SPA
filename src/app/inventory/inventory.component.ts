import { Component, OnInit } from '@angular/core';

import { Item } from '../_models/item';
import { ItemService } from './../_services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items?: Item[];
  item?: Item;
  selectedItem?: Item;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  getItems() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  onSelect(item) {
    this.selectedItem = item;
  }
}
