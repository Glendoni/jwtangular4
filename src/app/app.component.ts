import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
        
  
})
export class AppComponent {
    
    subtitle = '(Final)';
    
    /*
    <div *ngIf="message" class="alert alert-success">{{message.text}}</div>
    message: any;
    subscription: Subscription;

    constructor(private userService: UserService) {
        // subscribe to home component messages
        this.subscription = this.userService.getMessage().subscribe(message => { this.message = message; });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    
    */
    
}
