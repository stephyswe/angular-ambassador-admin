import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  columns = ['ID', 'name', 'email', 'actions']
  dataSource = new MatTableDataSource()

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.all().subscribe(
      users => {
        this.dataSource.data = users
      }
    )
  }


}
