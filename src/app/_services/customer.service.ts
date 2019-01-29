import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../_models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiURL = 'http://localhost:5000/api/CustomerController';
  customers$: Observable<Customer[]>;
  customer: Observable<Customer>;
  constructor(private httpClient: HttpClient) {
  }

  // used to create and add a customer to the database
  public createCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`this.apiURL + '/CreateCustomer'`, customer);
  }

  // used to edit an existing customer's information
  public updateCustomer() {
  }

  // used to delete a customer from the database, probably call an archive instead
  public deleteCustomer() {

  }

  // fetches a customer's info by searching for their ID
  public getCustomerById(id) {
    return this.httpClient.get<Customer>(this.apiURL + '/GetCustomer' , id);
  }

  // fetches all the customers to show off a list of them all at once
  public getCustomers() {

  }
}
