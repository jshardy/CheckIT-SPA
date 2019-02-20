import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_services/inventory.service';
import { Item } from '../_models/item';
import { AlertifyService } from './../_services/alertify.service';

@Component({
  selector: 'app-inventory-search',
  templateUrl: './inventory-search.component.html',
  styleUrls: ['./inventory-search.component.css']
})
export class InventorySearchComponent implements OnInit {

  constructor(private itemService: ItemService, private alertify: AlertifyService) { }

  item?: Item;

  ngOnInit() {
  }

  // grabs an item from the database by the InventoryId
  onSubmit(id: number) {
    return this.itemService.getItemById(id).subscribe((item: Item) => {
      this.item = item;
    }, error => {
      this.alertify.error(error);
    });
  }
}
