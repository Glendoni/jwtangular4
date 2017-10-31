import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { CommonModule }  from '@angular/common';
import { ContactComponent }     from './contact.component';
import { ContactService }       from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports:      [ CommonModule, SharedModule, ContactRoutingModule ],
  declarations: [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
