import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../_models/customer';
import { Address } from '../_models/address';
import { CustomerCreateDto } from '../_models/CustomerCreateDto';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  params?: HttpParams;
  baseURL = environment.apiURL + 'Customer/';

  constructor(private http: HttpClient) { }

// export class CustomerCreateDto {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public companyName?: string,
//     // public isCompany?: boolean,
//     public phoneNumber?: string,
//     public email?: string,
//   ) { }
// }


  // public function addCustomer(firstName: string, lastName: string, companyName?: string, phoneNumber?: string, email?: string): void {
  //   let customerDto: CustomerCreateDto = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     companyName: companyName,
  //     phoneNumber: phoneNumber,
  //     email: email
  //   };
  //   this.http.post(baseURL + '/AddCustomer', )
  // }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL);
  }

  public getCustomersByFirstName(firstName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL, { params: new HttpParams().set('FirstName', firstName.trim())});
  }

  public getCustomersByLastName(lastName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL, { params: new HttpParams().set('LastName', lastName.trim())});
  }

  public getCustomersByEmail(email: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL, { params: new HttpParams().set('Email', email.trim())});
  }

  public getCustomersByPhone(phone: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL, { params: new HttpParams().set('PhoneNumber', phone.trim())});
  }

  public getCustomersByCompany(company: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL, { params: new HttpParams().set('CompanyName', company.trim())});
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseURL + id);
  }

  public addCustomer(cust: Customer, id: number): void {
    this.http.post(this.baseURL, cust, { params: new HttpParams().set('AddressID', id.toString())});
  }

  public addAddress(add: Address): Observable<Address> {
    return this.http.post(environment.apiURL + 'Address/AddAddress', add);
  }
}
