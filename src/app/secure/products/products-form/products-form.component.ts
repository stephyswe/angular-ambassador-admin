import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
    ) {}


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: "",
      description: "",
      image: "",
      price: ""
    })
  }

  submit(): void {
    this.productService.create(this.form.getRawValue())
      .subscribe(() => this.router.navigate(["/products"]))
  }
}
