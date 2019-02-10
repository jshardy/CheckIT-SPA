<<<<<<< HEAD
import { AlertifyService } from './alertify.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
import { Customer } from '../_models/customer';
import { Observable, of } from 'rxjs';
=======
import { Injectable } from '@angular/core';
>>>>>>> FAST-GUI

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
<<<<<<< HEAD
  apiURL = 'http://localhost:5000/api/Customer';
  customers$: Observable<Customer[]>;
  customer: Observable<Customer>;
  constructor(private httpClient: HttpClient, private alertify: AlertifyService) { }

  // used to create and add a customer to the database
  public createCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`this.apiURL + '/CreateCustomer'`, customer);
  }

  // used to edit an existing customer's information
  public updateCustomer() {
  }

  // used to delete a customer from the database, probably call an archive instead
  public deleteCustomer(customer: Customer | number): Observable<Customer> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.apiURL}/DeleteCustomer${id}`;

    return;
    // return this.httpClient.delete<Customer>(url), httpOptions).pipe(
    //   tap(_ => this.log(`deleted customer id=${id}`)),
    //   catchError(this.handleError<Customer>('deleteHere'))
    // );
  }

  // fetches a customer's info by searching for their ID
  public getCustomerById(id): Observable<Customer> {
    const url = `${this.apiURL}/GetCustomer/${id}`;
    return this.httpClient.get<Customer>(url);
  }

  // fetches all the customers to show off a list of them all at once
  // currently fetching a mock list of customer until a fetch all is implemented on server
  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiURL)
    .pipe(
      tap(_ => this.log('fetched customers')),
      catchError(this.handleError('getCustomers', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: String) {
    this.alertify.message(`CustomerService: ${message}`);
  }
=======

  constructor() { }
>>>>>>> FAST-GUI
}
