import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  columns = ['ID', 'name', 'email', 'actions']
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator



  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    this.userService.all().subscribe(
      users => {
        this.dataSource.data = users
      }
    )
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
}
