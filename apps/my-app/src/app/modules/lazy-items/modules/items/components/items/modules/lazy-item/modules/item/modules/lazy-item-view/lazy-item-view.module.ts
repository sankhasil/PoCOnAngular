import { NgModule } from '@angular/core';
import { ItemViewRoutingModule } from './modules/item-view/item-view-routing.module';
import { ItemViewModule } from './modules/item-view/item-view.module';



@NgModule({

  imports: [
    ItemViewModule,ItemViewRoutingModule
  ]
})
export class LazyItemViewModule { }
