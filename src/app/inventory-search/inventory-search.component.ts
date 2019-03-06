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
  items$: Observable<Item[]>;
  item?: Item;
  private searchTerm = new Subject<string>();

  constructor(private itemService: ItemService, private alertify: AlertifyService, private router: Router) { }
  public dropdown = 'none';
  public input = '';

  ngOnInit(): void {
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
