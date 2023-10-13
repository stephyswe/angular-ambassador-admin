import { Component, OnInit } from '@angular/core';

import { OrderService } from '../../services/order.service';
import { Order } from '../../interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = []

  constructor(
    private orderService: OrderService
    ) {}
  
  ngOnInit(): void {
    this.orderService.all().subscribe(
      orders => {
        this.orders = orders
      }
    )
  }
}
