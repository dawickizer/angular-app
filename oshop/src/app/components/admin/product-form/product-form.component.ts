import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// models
import { Product } from '../../../models/product/product.model';

// services
import { ProductService } from '../../../services/product/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();
    console.log(this.product);
  }

  save() {
    console.log(this.product);
  }

}
