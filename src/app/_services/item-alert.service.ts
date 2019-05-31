import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ItemAlert } from '../_models/alert';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertData } from '../_models/alertData';

@Injectable({
  providedIn: 'root'
})
export class ItemAlertService {
  baseURL = environment.apiURL + 'Alert/';

  constructor(private httpClient: HttpClient) { }

  public getAlerts(): Observable<ItemAlert[]> {
    return this.httpClient.get<ItemAlert[]>(this.baseURL + 'GetAllAlerts');
  }

  public getTriggeredAlerts(): Observable<any> {
    return this.httpClient.get<AlertData[]>(this.baseURL + 'GetTriggeredAlerts');
  }

  public getNonTriggeredAlerts(): Observable<any> {
    return this.httpClient.get<AlertData[]>(this.baseURL + 'GetNonTriggeredAlerts');
  }

  public addAlert(alert: ItemAlert): Observable<ItemAlert> {
    return this.httpClient.post<ItemAlert>(this.baseURL + 'AddAlert', alert);
  }
}
