import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { ContactComponent }    from './contact.component';
 

 const routes: Routes = [
 { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'contact',    component: ContactComponent }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactRoutingModule {}
