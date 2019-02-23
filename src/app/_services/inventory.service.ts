import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../_models/item';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseURL = environment.apiURL + 'Inventory/';

  constructor(private httpClient: HttpClient) {}

  // Post Statements
  // used to create and add a Item to the database
  public createItem(item: Item) {
    return this.httpClient.post<Item>(this.baseURL + 'AddInventory', item);
  }

  // used to edit an existing Item's information
  public updateItem(item: Item) {
    return this.httpClient.post<Item>(this.baseURL + 'UpdateInventory', item);
  }

  // Delete statements
  // used to delete a Item from the database, possibly not to be used
  public deleteItem(id: number) {
    return this.httpClient.delete<Item>(this.baseURL + 'DeleteInventory' + id);
  }

  // Get Statements
  // fetches a Item's info by searching for their ID
  public getItemById(id: number): Observable<Item> {
    return this.httpClient.get<Item>(this.baseURL + id);
  }

  // fetches all the Items to show off a list of them
  public getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseURL + 'GetAllInventories/');
  }
}
