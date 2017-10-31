// Exact copy except import UserService from core
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { Home, HomeService } from './home.service';
import { UserService } from '../core/user.service';
import {  AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

  constructor( private userService: UserService,
               private authenticationService: AuthenticationService) {

  }

  ngOnInit() {

      this.loadAllUsers();
  }

    deleteUser(id: number) {
      //  this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

      private loadAllUsers() {
       // this.userService.getAll().subscribe(users => { this.users = users; });
       this.userService.getAll().subscribe(users => 
                                           {this.users = users.usd; },
    // Errors will call this callback instead:
    err => {
      console.log('Something went wrong!');
           this.authenticationService.logout();
    }
  );
    }
}
