import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductsActions from '../actions/product.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map(
            (data: Product[]) => {
              console.log('inside effects', data);
              return ProductsActions.loadProductsSuccess({ data });
            },
            catchError((err) => ProductsActions.loadProductsFailure)
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
