import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {  AuthenticationService } from '../../_services/index';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy  {

    message: any;
    mes: any;
    subscription: Subscription;
    constructor(private authenticationService: AuthenticationService) {
        // subscribe to home component messages
        this.subscription = this.authenticationService.getMessage().subscribe(message => { this.message = message; });
    }

     ngOnInit() {
      this.message =    this.authenticationService.getMessage();
         
         this.mes =    this.authenticationService.token; 
         //console.log(this.authenticationService.token)
         
        // console.log(this.authenticationService.getMessage());
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
