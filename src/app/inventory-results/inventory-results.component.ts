import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from '../_models/item';
import { ItemService } from '../_services/inventory.service';


@Component({
  selector: 'app-inventory-results',
  templateUrl: './inventory-results.component.html',
  styleUrls: ['./inventory-results.component.css']
})
export class InventoryResultsComponent implements OnInit {
  subscriber?: any;
  item?: Item;
  items?: Item[];

  constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
  }

}
