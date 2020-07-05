import { Product } from './../../models/product.model';
import * as ProductsActions from '../../store/actions/product.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../products/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = this.store.select<any>('products').pipe(
    map((res) => {
      return res.products.data;
    })
  );

  constructor(private store: Store<fromStore.ProductsFinalState>) {}

  ngOnInit(): void {
    this.store.select<any>('products').subscribe((state) => {
      console.log('new state', state);
    });

    this.store.dispatch(ProductsActions.loadProducts());
  }
}
