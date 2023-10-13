import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { SecureComponent } from './secure.component';



@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecureModule { }
