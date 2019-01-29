import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../_models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiURL = 'http://localhost:5000/api/InventoryController';

  constructor(private httpClient: HttpClient) {}

  // used to create and add a Item to the database
  public createItem(item: Item) {

  }

  // used to edit an existing Item's information
  public updateItem(item: Item) {

  }

  // used to delete a Item from the database, possibly not to be used
  public deleteItem(id: number) {

  }

  // fetches a Item's info by searching for their ID
  public getItemById(id: number) {
    return this.httpClient.get<Item>(`${this.apiURL}/Items/${id}`);
  }

  // fetches all the Items to show off a list of them
  public getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`${this.apiURL}/GetAllItem`);
  }
}
