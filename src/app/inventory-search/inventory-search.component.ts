import { Component, OnInit } from '@angular/core';
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

  constructor(private itemService: ItemService, private alertify: AlertifyService, private router: Router) { }
  public dropdown = 'none';
  public input = '';

  item?: Item;

  ngOnInit() {
  }

  // grabs an item from the database by the InventoryId
  onSubmit(id: number): void {
    const passId = parseInt(this.input, 10);
    this.itemService.getItemById(passId).subscribe(item => this.item = item);
    if (!isNaN(passId)) {
      this.router.navigate(['/inventory-results', { id: passId}]);
    }
  }
}
