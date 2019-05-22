import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Item } from '../_models/item';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// REALLY??? inventory.service.ts exports ItemService???!@#!
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
    const url = `${this.baseURL}${id}`;
    return this.httpClient.get<Item>(url);
  }

  // fetches all the Items to show off a list of them
  public getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseURL + 'GetAllInventories');
  }

  // fetches an item from the UPC database connection to auto fill in information
  public searchUPC(upc: string): Observable<Item> {
    return this.httpClient.get<Item>(this.baseURL + 'GetItemByUPC/?UPC=' + upc);
  }

   public searchItems(upc?: string, price?: number, name?: string, description?: string, quantity?: number,
    archived?: boolean, locationId?: number, alertId?: number): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseURL, {
      params: new HttpParams()
      // .set('Id', id != null)
      .set('Upc', upc != null ? upc.trim() : '')
      // .set('Price', price)
      .set('Name', name != null ? name.trim() : '')
      .set('Description', description != null ? description.trim() : '')
      // .set('Quantity', quantity != null)
      // .set('Archived', archived != null)
      // .set('LocationId', locationId != null)
      // .set('AlertId', alertId != null)
      });
  }
}
