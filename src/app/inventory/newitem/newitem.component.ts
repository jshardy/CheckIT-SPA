import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../_services/inventory.service';
import { Item } from '../../_models/item';
import { Item2 } from 'src/app/_models/item2';
import { RawItemInfo } from '../../_models/RawItemInfo';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
// // Created new class out of fear of breaking other stuff
// export class Item2 {
//   constructor(
//     public id?: number,
//     public upc?: string,
//     public price?: number,
//     public name?: string,
//     public description?: string,
//     public quantity?: number,
//     public archived?: boolean,
//     public locationId?: number,
//     public alertId?: number
//   ) { }

export class NewItemComponent implements OnInit {
  rawItem?: RawItemInfo;
  item?: Item;
  upc?: string;
  searchUPC?: string;
  item_found: Boolean = false;

  constructor(private itemService: ItemService, private alertify: AlertifyService) {
   }

  ngOnInit() {
    this.item = new Item2();
  }

  // searches the upc database for most of the information of the item
  databaseSearch(upc: string) {
    console.log('searching upc database\n');
    return this.itemService.searchUPC(upc).subscribe((rawItem: RawItemInfo) => {
      this.rawItem = rawItem;
      this.item.upc = upc;
      this.item.name = rawItem.title;
      this.item.description = rawItem.description;
      this.item.price = rawItem.msrp;
      // if (this.item.id > 0) {
      //   this.item = item;
      //   this.item_found = true;
      // } else {
      //   this.item_found = false;
      // }
    }, error => {
      this.alertify.error(error);
    });
  }

  // adds the item being entered into the database
  addItem() {
    console.log('Sending item to be created!');
    return this.itemService.createItem(this.item).subscribe();
  }
}
