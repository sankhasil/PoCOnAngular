import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemModule } from './modules/item/item.module';
import { ItemRoutingModule } from './modules/item/item-routing.module';



@NgModule({
  declarations: [],
  imports: [
    ItemModule,ItemRoutingModule
  ]
})
export class LazyItemModule { }
