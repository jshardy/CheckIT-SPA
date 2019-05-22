import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressOnly } from '../_models/AddressOnly';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseURL = environment.apiURL + 'Address/';

  constructor(private http: HttpClient) { }

  public getAddressById(id): Observable<AddressOnly> {
    return this.http.get<AddressOnly>(this.baseURL + id);
  }

  public modifyAddress(address: AddressOnly, id: number): Observable<any> {
    return this.http.patch(this.baseURL + 'ModifyAddress', address, {
      params: new HttpParams()
      .set('id', id.toString())
    });
  }
}
