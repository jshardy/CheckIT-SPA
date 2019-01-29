import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Invoice } from '../_models/invoice';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class InvoiceService {
    apiURL = 'http://localhost:5000/api/InvoiceController/';

    constructor(private httpClient: HttpClient) {}

    // used to create and add a Invoice to the database
  public createInvoice(invoice: Invoice) {

  }

  // used to edit an existing Invoice's information
  public updateInvoice(invoice: Invoice) {

  }

  // used to delete a Invoice from the database, really call the Invoice archive function in the webApi
  public deleteInvoice(id: number) {

  }

  // fetches a Invoice's info by searching for their ID
  public getInvoiceById(id): Observable<Invoice> {
    return this.httpClient.get<Invoice>(`this.apiURL + 'ReturnOneInvoice/${id}'`);
  }

  // fetches all the Invoice to show off a list of them
  // public getInvoices(): Observable<Invoice[]> {
  //   return this.httpClient.get<Invoice[]>(`${this.apiURL}ReturnInvoices`);
  // }
}
