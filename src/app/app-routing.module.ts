import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { UserComponent } from './user/index';
import { AuthGuard } from './_guards/index';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
