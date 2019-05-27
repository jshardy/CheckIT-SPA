import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { StatePair } from '../_models/statepair';

import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuickService {
  params?: HttpParams;
  baseURL = environment.apiURL + 'QuickBook/';
  _IsConnected: Boolean = false;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  public initialize(): Observable<string> {
    return this.http.get(this.baseURL + 'InitAuth', {responseType: 'text'});
  }

  public return(pair: StatePair): Observable<any> {
    this._IsConnected = true;
    return this.http.post(this.baseURL + 'ReturnAuth', pair);
  }

  public IsConnected() {
    return this._IsConnected;
  }

  public quickAPICall(invoiceId: Number): Observable<any> {
    console.log('QuickService - Recieved invoiceId: ' + invoiceId);
    // return this.http.post(this.baseURL + 'QuickAPICall', {
    //   params: new HttpParams()
    //     .set('InvoiceId', invoiceId.toString())
    // });
    return this.http.post(this.baseURL + 'QuickAPICall?InvoiceId=' + invoiceId.toString(), {invoiceId});
  }

}
