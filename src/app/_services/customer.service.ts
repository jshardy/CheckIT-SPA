import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../_models/customer';
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

  public getCustomers(firstName: string, lastName: string, email: string, phone: string, company: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL, { params: new HttpParams()
      .set('FirstName', firstName.trim())
      .set('LastName', lastName.trim())
      .set('Email', email.trim())
      .set('PhoneNumber', phone.trim())
      .set('CompanyName', company.trim())
      });
  }

  public getCustomersAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL);
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseURL + id);
  }

  public addCustomer(cust: Customer): Observable<any> {
    return this.http.post(this.baseURL + 'AddCustomer', cust);
  }
}
