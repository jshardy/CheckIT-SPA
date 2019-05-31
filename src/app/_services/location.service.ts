import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Location } from '../_models/location';
import { LocationDTO } from '../_models/locationDTO';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  params?: HttpParams;
  baseURL = environment.apiURL + 'Location/';

  constructor(private http: HttpClient) { }

  public getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.baseURL + 'GetAllLocations');
  }

  public getLocation(id: number): Observable<Location> {
    return this.http.get<Location>(this.baseURL + id);
  }

  public addLocation(loc: LocationDTO): Observable<any> {
    return this.http.post<Location>(this.baseURL + 'AddLocation', loc);
  }

  public addItemToLocation(loc: Location, itemId: number): Observable<any> {
    return this.http.patch(this.baseURL + 'AddItemToLocation', loc, {params: new HttpParams()
      .set('LocId', loc.id.toString())
      .set('ItemId', itemId.toString())
    });
  }

  public removeItemFromLocation(loc: Location, itemId: number): Observable<any> {
    return this.http.patch(this.baseURL + 'RemoveItemFromLocation', loc, {params: new HttpParams()
      .set('LocId', loc.id.toString())
      .set('ItemId', itemId.toString())
    });
  }

  public updateLocation(loc: Location): Observable<any> {
    return this.http.patch(this.baseURL + 'UpdateLocation', loc, {params: new HttpParams()
        .set('id', loc.id.toString())
    });
  }

  public deleteLocation(loc: Location): Observable<any> {
    return this.http.delete(this.baseURL + 'DeleteLocation', { params: new HttpParams().set('id', loc.id.toString())});
  }
}
