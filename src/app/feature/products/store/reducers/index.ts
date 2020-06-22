import * as fromProducts from './products.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface ProductsFinalState {
  products: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<ProductsFinalState> = {
  products: fromProducts.reducer,
};
