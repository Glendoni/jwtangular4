import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
       templateUrl: 'user.component.html'
    
})

export class UserComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService,
            private alertService: AlertService,   
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit(): void {
        // get users from secure api end point
        
        this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.userService.getById(+params.get('id')))
            .subscribe(users => {
            
            
           
    
     //this.alertService.success('Hi! successful', true); 
 
            
            console.log(users.usd);
                this.users = users.usd;
            }
                      );
        
        
    }
 goBack(): void {
    this.location.back();
  }
}
