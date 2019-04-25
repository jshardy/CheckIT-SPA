import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Alert } from '../_models/alert';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemAlertService {
  baseURL = environment.apiURL + 'Alert/';

  constructor(private httpClient: HttpClient) { }

  public getAlerts(): Observable<Alert[]> {
    return this.httpClient.get<Alert[]>(this.baseURL + 'GetAllAlerts');
  }

  public addAlert(alert: Alert): Observable<Alert> {
    return this.httpClient.post<Alert>(this.baseURL + 'AddAlert', alert);
  }
}
