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

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}
