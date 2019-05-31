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

  public orderedMore(id: Number): Observable<any> {
    console.log('ItemAlertService - Ordering more' + ' for id: ' + id);

    // this.httpClient.patch(this.baseURL + 'OrderedMore', {
    //   params: new HttpParams().set('id', id.toString())
    // });

    return this.httpClient.patch(this.baseURL + 'OrderedMore/' + id, id);
  }


  public getAlerts(): Observable<ItemAlert[]> {
    console.log('ItemAlertService - GetAllAlerts')
    return this.httpClient.get<ItemAlert[]>(this.baseURL + 'GetAllAlerts');
  }

  public getTriggeredAlerts(): Observable<any> {
    console.log('ItemAlertService - GetTriggeredAlerts')
    return this.httpClient.get<AlertData[]>(this.baseURL + 'GetTriggeredAlerts');
  }

  public getNonTriggeredAlerts(): Observable<any> {
    console.log('ItemAlertService - GetNonTriggeredAlerts')
    return this.httpClient.get<AlertData[]>(this.baseURL + 'GetNonTriggeredAlerts');
  }

  public addAlert(id: Number, threshold: Number): Observable<any> {
    console.log('ItemAlertService - AddAlert')
    console.log('id: ' + id + ' theshold: ' + threshold);
    // return this.httpClient.post<ItemAlert>(this.baseURL + 'AddAlert', alert);
    return this.httpClient.post(this.baseURL + 'AddAlert', {
      params: new HttpParams()
        .set('id', id.toString())
        .set('threshold', threshold.toString())
    });

  }

  public setUsed(alert: AlertData): Observable<ItemAlert> {
    return this.httpClient.patch(this.baseURL + 'SetAlertBit', alert, { params: new HttpParams()
    .set('Id', alert.id.toString())
    .set('Set', alert.alertOn ? 'false' : 'true')});
  }

  public deleteAlert(alert: AlertData): Observable<ItemAlert> {
    return this.httpClient.delete(this.baseURL + 'DeleteAlert/' + alert.id);
  }

}
