import { NgModule } from '@angular/core';
import { ItemEditRoutingModule } from './modules/item-edit/item-edit-routing.module';
import { ItemEditModule } from './modules/item-edit/item-edit.module';

@NgModule({

  imports: [
    ItemEditModule,
    ItemEditRoutingModule
  ]
})
export class LazyItemEditModule { }
