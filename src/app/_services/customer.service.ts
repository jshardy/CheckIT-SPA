import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../_models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseURL = environment.apiURL + 'Customer/';

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> { 
    return this.http.get<Customer[]>(this.baseURL);
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseURL + id);
  }
}
