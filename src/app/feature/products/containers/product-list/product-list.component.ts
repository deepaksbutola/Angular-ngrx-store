import { Product } from './../../models/product.model';
import * as ProductsActions from '../../store/actions/product.actions';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../products/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = this.store.select<any>('products');

  constructor(
    private store: Store<fromStore.ProductsFinalState>,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.store.select<any>('products').subscribe((state) => {
      console.log('new state', state);
    });
    // this.productService.getProducts().subscribe((res) => {
    //   console.log(res);
    // });
    this.store.dispatch(ProductsActions.loadProducts());
  }
}
