import { Component, OnInit } from '@angular/core';

import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user().subscribe(
      user => {
        this.user = user
      }
    )
  }

  logout(): void {
    this.authService.logout().subscribe(
      res => console.log(res)
    )
  }
}
