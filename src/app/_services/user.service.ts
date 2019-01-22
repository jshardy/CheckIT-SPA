import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
//returns all the users from the local file used to store users
    getAll() {
        return this.http.get<User[]>(`/users`);
    }
//grabs a user from the local storage by their id
    getById(id: number) {
        return this.http.get(`/users/` + id);
    }
//saves a user's credentials to the local file for later use
    register(user: User) {
        return this.http.post(`/users/register`, user);
    }
//used to update/edit changes to a user's information, currently not implemented in the website
    update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }
//this removes user's information from the local storage file
    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}