import * as ProductsActions from '../actions/product.actions';
import { Product } from '../../models/product.model';
import { createReducer, on } from '@ngrx/store';

export interface ProductState {
  data: Product[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  data: [
    {
      id: null,
      name: 'product 11111',
      price: null,
      categoryId: null,
      rate: null,
      content: '',
      review: null,
      imageUrl: '',
    },
    {
      id: 333,
      name: 'product 2222',
      price: null,
      categoryId: null,
      rate: null,
      content: '',
      review: null,
      imageUrl: '',
    },
  ],
  loaded: false,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(ProductsActions.loadProductsSuccess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(ProductsActions.loadProductsFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);
