import * as ProductsActions from '../actions/product.actions';
import { Product } from '../../models/product.model';
import { createReducer, on } from '@ngrx/store';

export interface ProductState {
  data: Product[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  data: [],
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
  on(ProductsActions.loadProductsSuccess, (state, action) => {
    const data = action.data;
    return {
      ...state,
      loading: false,
      loaded: true,
      data,
    };
  }),
  on(ProductsActions.loadProductsFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);
