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
  items?: Item[];
  item?: Item;

  public id = -1;
  public upc = '';
  public price = -1;
  public name = '';
  public description = '';
  public quantity = -1;
  public archived = false;
  public locationId = -1;
  public alertId = -1;

  private searchTerm = new Subject<string>();

  constructor(private itemService: ItemService, private alertify: AlertifyService, private router: Router) { }
  public dropdown = 'none';
  public input = '';

  ngOnInit(): void {
  }

  onSubmit(id: number) {
    this.itemService.getItemById(id).subscribe((item: Item) => {
      this.item = item;
    });
  }

  upcSearch() {
    if (this.allEmpty()) {
    this.items = [];
  } else {
    this.itemService.searchUPC(this.upc).subscribe((item: Item) => {
      this.item = item;
    });
   }
  }

  search() {
    // if (this.allEmpty()) {
    //   this.items = [];
    // } else {
    //   this.itemService.searchItems(this.id, this.upc, this.price).subscribe((item: Item[]) => {
    //     this.items = item;
    //   });
    // }
  }

  allEmpty() {
    if (this.item.id !== null) { return false; }
    if (this.item.upc !== '') { return false; }
    if (this.item.price !== null) { return false; }
    if (this.item.name !== '') { return false; }
    if (this.item.description !== '') { return false; }
    if (this.item.quantity !== null) {return false; }
    return true;
  }
}
