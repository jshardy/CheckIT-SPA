import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../_models/customer';
import { CustomerCreateDto } from '../_models/CustomerCreateDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
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

  public getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseURL + id);
  }
}
