import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { SecureComponent } from './secure/secure.component';
import { UsersComponent } from './secure/users/users.component';

const routes: Routes = [
  {path: '', component: SecureComponent,
children: [
  {path: '', pathMatch:"full", redirectTo: "/users"},
  {path: 'profile', component: ProfileComponent},
  {path: 'users', component: UsersComponent},
]},
  {path: '', component: PublicComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
