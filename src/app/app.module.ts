import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { ContactModule }    from './contact/contact.module';
import { CoreModule }       from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { BaseRequestOptions } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { UserComponent } from './user/index';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
      FormsModule,
      HttpModule,
/*
    CoreModule,
*/
    CoreModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule
  ],
  declarations: [ AppComponent, LoginComponent, UserComponent ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
       // fakeBackendProvider,
        // MockBackend,
        BaseRequestOptions
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
