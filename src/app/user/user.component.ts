import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe( (result: any) => {
      this.users = result.data;
    } );
  }

}
