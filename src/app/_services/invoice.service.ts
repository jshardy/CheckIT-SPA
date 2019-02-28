import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Invoice } from '../_models/invoice';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvoiceData } from '../_models/invoiceData';

// Removed because using JWT Service now adds it automatically to each
// request.
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Authorization': 'Bearer ' + localStorage.getItem('token')
//   })
// };

@Injectable({
    providedIn: 'root'
  })
export class InvoiceService {
  // located in environments/environment.ts
  // make URL changes there.
  baseURL = environment.apiURL + 'Invoice/';

  constructor(private http: HttpClient) {}

  // used to create and add a Invoice to the database
  public createInvoice(invoiceData: InvoiceData) {
    return this.http.post(this.baseURL + 'AddInvoice', invoiceData);
  }

  // used to edit an existing Invoice's information
  public updateInvoice() {
    // no backend web api to update invoice.
  }

  // used to delete a Invoice from the database, really call the Invoice archive function in the webApi
  public deleteInvoice(id: number) {
    return this.http.delete(this.baseURL + 'DeleteInvoice/' + id);
  }

  // fetches a Invoice's info by searching for their ID
  public getInvoiceById(id): Observable<Invoice> {
    return this.http.get<Invoice>(this.baseURL + id);
  }

  // fetches all the Invoice to show off a list of them
  public getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseURL);
  }
}
