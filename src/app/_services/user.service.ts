import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  params?: HttpParams;
  baseURL = environment.apiURL + 'Auth/';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  public GetUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'GetUsers');
  }

  public ModifyUser(user: User): Observable<any> {
    return this.http.patch(this.baseURL + 'SetPermissions', user);
  }

  public DeleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseURL + 'DeleteUser', { params: new HttpParams().set('id', id.toString())});
  }

  public GetCurrentUser(): Observable<User> {
    return this.http.get<User>(this.baseURL + 'GetCurrentUser');
  }

  public SetAdmin(id: number): Observable<any> {
    return this.http.patch(this.baseURL + 'SetMainAdmin', {'id': id.toString()}, { params: new HttpParams().set('id', id.toString())});
  }

}
