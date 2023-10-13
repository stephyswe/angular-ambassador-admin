import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../services/product.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  columns = ['ID', 'image', 'title', 'description', 'price', 'action']
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator



  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.all().subscribe(
      products => {
        this.dataSource.data = products
      }
    )
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
}
