import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Invoice } from '../_models/invoice';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvoiceData } from '../_models/invoiceData';
import { LastInvoice } from '../_models/LastInvoice';
import { LineItemData } from '../_models/LineItemData';
import { catchError } from 'rxjs/operators';

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

  public addInvoice(invoice: InvoiceData): Observable<any> {
    return this.http.post(this.baseURL + 'AddInvoice', invoice);
  }

  public addInvoiceLineItem(lineItem: LineItemData): Observable<any> {
    return this.http.post(this.baseURL + 'AddLineItem', lineItem);
  }

  public getLastInvoiceId(): Observable<LastInvoice> {
    return this.http.get<LastInvoice>(this.baseURL + 'GetLastInvoiceID');
  }

  public searchInvoices(invoiceDate: Date, OutgoingInv: Boolean, AmountPaid: Number, CustID: Number): Observable<Invoice[]> {
    console.log("searchInvoices()");
    return this.http.get<Invoice[]>(this.baseURL + 'ReturnInvoices', {
      params: new HttpParams()
        .set('invoiceDate', invoiceDate != null ? invoiceDate.toISOString() : null)
        .set('outgoingInv', OutgoingInv != null ? OutgoingInv.toString() : 'true')
        .set('ammountPaid', AmountPaid != null ? AmountPaid.toString() : null)
        .set('custID', CustID != null ? CustID.toString() : null)
    });
  }

// back end does not work.
// ReturnInvoices(DateTime InvoiceDate = default(DateTime),
//                                               bool OutgoingInv = false,
//                                               decimal AmmountPaid = -1,
//                                               int CustID = -1)


}
