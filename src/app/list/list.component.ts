import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
  }
  get users() {
    return this._userService.getUsers();
  }
  selectUser(id) {
    console.log(id);
    this._userService.select.next(id);
  }

}
