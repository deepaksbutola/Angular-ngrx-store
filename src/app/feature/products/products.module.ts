import { services } from './services/index';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';

// store
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  providers: [...fromServices.services],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    EffectsModule.forRoot(effects),
    StoreModule.forFeature('products', reducers),
  ],
})
export class ProductsModule {
  constructor() {
    console.log('inside product module');
  }
}
