import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { SecureComponent } from './secure.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SecureModule { }
