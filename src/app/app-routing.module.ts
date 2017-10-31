import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { UserComponent } from './user/index';
import { AuthGuard } from './_guards/index';

export const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' , canActivate: [AuthGuard]},
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' , canActivate: [AuthGuard]},
  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' , canActivate: [AuthGuard]},
    
    
    { path: '', redirectTo: 'home', pathMatch: 'full'}   
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
