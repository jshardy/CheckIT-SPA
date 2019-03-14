import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../_services/inventory.service';
import { Item } from '../../_models/item';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewItemComponent implements OnInit {

  item?: Item;
  searchUPC?: string;

  constructor(private itemService: ItemService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  // searches the upc database for most of the information of the item
  databaseSearch(upc: string) {
    this.searchUPC = upc;
    return this.itemService.searchUPC(upc).subscribe((item: Item) => {
      this.item = item;
      this.item.upc = this.searchUPC;
    }, error => {
      this.alertify.error(error);
    });
  }

  // adds the item being entered into the database
  addItem() {
    return this.itemService.createItem(this.item);
  }
}
