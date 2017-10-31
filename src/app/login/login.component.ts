import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    //  moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        ) {
           this.authenticationService.clearMessage();
        }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
  // console.log( JSON.parse(localStorage.getItem('currentUser')));
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        
       
        this.loading = true;

        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {

                   this.authenticationService.clearMessage();
                    this.authenticationService.sendMessage('');
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error('Username or Password is Incorrect');
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }
}
