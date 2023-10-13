import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LinksComponent } from './links/links.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { SecureComponent } from './secure.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    ProfileComponent,
    UsersComponent,
    LinksComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class SecureModule { }
