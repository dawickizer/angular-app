import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

// models 
import { Product } from '../../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  // will create new product if product does not exist, or will destroy and recreate current product with new fields
  save(product: Product) {
    this.db.object('/products/' + product.id).set({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl,

    });
  }

  // delete a product
  delete(product: Product) {
    this.db.object('/products/' + product.id).remove();
  }

  // delete a user by ID
  deleteByID(id: String) {
    this.db.object('/products/' + id).remove();
  }

  // get a product
  get(product: Product): Observable<Product> {

    return this.db.object('/products/' + product.id).valueChanges().pipe(map(product => product as Product));
  }

  // get a product by ID
  getByID(id: String): Observable<Product> {

    return this.db.object('/products/' + id).valueChanges().pipe(map(product => product as Product));
  }

  // get all products
  getAll(): Observable<Product[]> {
    return this.db.list('/products/').valueChanges().pipe(map(products => products as Product[]));
  }
}
