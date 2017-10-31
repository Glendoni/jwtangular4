import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { CommonModule }  from '@angular/common';
import { HomeComponent }     from './home.component';
import { HomeService }   from './home.service';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  imports:      [ SharedModule, HomeRoutingModule ],
  declarations: [ HomeComponent ],
  providers:    [ HomeService ]
})
export class HomeModule { }
