import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Customer } from '../_models/customer';
import { CustomerCreateDto } from '../_models/CustomerCreateDto';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { CustomerSearchDto } from '../_models/CustomerSearchDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  params?: HttpParams;
  baseURL = environment.apiURL + 'Customer/';

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

  public getCustomers(firstName?: string, lastName?: string, email?: string, phone?: string, company?: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL, {
      params: new HttpParams()
      .set('FirstName', firstName != null ? firstName.trim() : '')
      .set('LastName', lastName != null ? lastName.trim() : '')
      .set('CompanyName', company != null ? company.trim() : '')
      .set('PhoneNumber', phone != null ? phone.trim() : '')
      .set('Email', email != null ? email.trim() : '')
      });
  }

  public getCustomers2(customer: CustomerSearchDto): Observable<Customer[]> {
    const firstName: string = customer.firstName;
    const lastName: string = customer.lastName;
    const email: string = customer.email;
    const phone: string = customer.phoneNumber;
    const company: string = customer.companyName;

    return this.http.get<Customer[]>(this.baseURL, {
      params: new HttpParams()
        .set('FirstName', firstName != null ? firstName.trim() : '')
        .set('LastName', lastName != null ? lastName.trim() : '')
        .set('Email', email != null ? email.trim() : '')
        .set('PhoneNumber', phone != null ? phone.trim() : '')
        .set('CompanyName', company != null ? company.trim() : '')
    });
  }

  public getCustomersAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL);
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseURL + id);
  }

  public addCustomer(cust: Customer): Observable<any> {
    return this.http.post<Customer>(this.baseURL + 'AddCustomer', cust)
    .pipe(
      catchError(this.handleError)
    );
  }

  public modifyCustomer(cust: Customer): Observable<any> {
    return this.http.patch(this.baseURL + 'ModifyCustomer', cust, {
      params: new HttpParams()
      .set('id', cust.id.toString())
    });
  }

  public deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.baseURL + 'DeleteCustomer', { params: new HttpParams().set('id', id.toString())});
  }
}
