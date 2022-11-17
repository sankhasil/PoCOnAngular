import { NgModule } from '@angular/core';
import { ItemDeleteRoutingModule } from './modules/item-delete/item-delete-routing.module';
import { ItemDeleteModule } from './modules/item-delete/item-delete.module';







@NgModule({

  imports: [
    ItemDeleteModule,
    ItemDeleteRoutingModule
  ]
})
export class LazyItemDeleteModule { }
