import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { SecureComponent } from './secure.component';
import { UsersComponent } from './users/users.component';



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
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class SecureModule { }
