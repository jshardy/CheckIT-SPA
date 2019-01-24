import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //baseUrl = 'http://localhost:5000/api/auth/';
  //jwtHelper = new JwtHelperService();
  //decodedToken: any;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) 
  {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
//grabs the values for the current user if there is one
public get currentUserValue(): User 
{
    return this.currentUserSubject.value;
}
//this runs to pass the user's username and password towards the database, currently checks if username and password match with a local folder holding users info
login(username: string, password: string) 
{
    return this.http.post<any>(`/users/authenticate`, { username, password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) 
            {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
}
//changes the currentUser object to be null, used to put the viewer of the website back to the "front" page with the login/register buttons
logout() 
{
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}



  // login(model: any) {
  //   return this.http.post(this.baseUrl + 'login', model)
  //   .pipe(
  //     map((response: any) => {
  //       const user = response;
  //       if (user) {
  //         localStorage.setItem('token', user.token);
  //         this.decodedToken = this.jwtHelper.decodeToken(user.token);
  //       }
  //     })
  //   );
  // }

  // register(model: any) {
  //   return this.http.post(this.baseUrl + 'register', model);
  // }

  // loggedIn() {
  //   const token = localStorage.getItem('token');
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
}

