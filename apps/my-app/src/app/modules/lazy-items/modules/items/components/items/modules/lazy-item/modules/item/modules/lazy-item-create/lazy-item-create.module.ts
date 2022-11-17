import { NgModule } from '@angular/core';
import { ItemCreateRoutingModule } from './modules/item-create/item-create-routing.module';
import { ItemCreateModule } from './modules/item-create/item-create.module';



@NgModule({

  imports: [
    ItemCreateModule,ItemCreateRoutingModule
  ]
})
export class LazyItemCreateModule { }
