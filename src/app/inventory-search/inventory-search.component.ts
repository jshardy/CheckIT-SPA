import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { ItemService } from '../_services/inventory.service';
import { Item } from '../_models/item';
import { AlertifyService } from './../_services/alertify.service';

@Component({
  selector: 'app-inventory-search',
  templateUrl: './inventory-search.component.html',
  styleUrls: ['./inventory-search.component.css']
})
export class InventorySearchComponent implements OnInit {
  items: Item[];
  item?: Item;

  public id = 0;
  public upc = '';
  public price = 0;
  public name = '';
  public description = '';
  public quantity = 0;
  public archived = false;
  public locationId = 0;
  public alertId = 0;

  private searchTerm = new Subject<string>();

  constructor(private itemService: ItemService, private alertify: AlertifyService, private router: Router) { }
  // public dropdown = 'none';
  // public input = '';

  ngOnInit(): void {
  }

  idSearch(id: number) {
    this.itemService.getItemById(id).subscribe((item: Item) => {
      this.item = item;
    });
  }

  upcSearch(upc: string) {
    if (this.allEmpty()) {
    this.items = [];
  } else {
    this.itemService.searchUPC(upc).subscribe((item: Item) => {
      this.item = item;
    });
   }
  }

  search() {
    if (this.allEmpty()) {
      this.items = [];
    } else {
      this.itemService.searchItems(this.upc, this.price, this.name, this.description,
          this.quantity).subscribe((item: Item[]) => {
          this.items = item;
        });
    }
  }

  allEmpty() {
    if (this.item.id !== null) { return false; }
    if (this.upc !== '') { return false; }
    if (this.price !== null) { return false; }
    if (this.name !== '') { return false; }
    if (this.description !== '') { return false; }
    if (this.quantity !== null) {return false; }
    return true;
  }
}
