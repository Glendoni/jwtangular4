import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { AuthGuard } from '../_guards/index';
import { HomeComponent }    from './home.component';
 

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] }
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
