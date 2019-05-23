import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service'

@Component({
  selector: 'app-userpermissions',
  templateUrl: './userpermissions.component.html',
  styleUrls: ['./userpermissions.component.css']
})

export class UserpermissionsComponent implements OnInit {
  users: User[];
  current_user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.GetUsers().subscribe((user: User[]) => {
      this.users = user;
    });
    this.userService.GetCurrentUser().subscribe((user: User) => {
      this.current_user = user;
    });
  }

  ChangeUser(user: User) {
    this.userService.ModifyUser(user).subscribe();
    location.reload();
  }

  DeleteUser(user: User) {
    this.userService.DeleteUser(user.id).subscribe();
    location.reload();
  }

  SetMainAdmin(user: User) {
    this.userService.SetAdmin(user.id).subscribe();
    location.reload();
  }

  IsMainAdmin() {
    return this.current_user.mainAdmin;
  }

}
