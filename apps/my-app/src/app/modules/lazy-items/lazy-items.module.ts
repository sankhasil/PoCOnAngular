import { NgModule } from '@angular/core';

import { ItemsComponent } from './modules/items/components/items/items.component';
import { ItemsRoutingModule } from './modules/items/items-routing.module';
import { ItemsModule } from './modules/items/items.module';



@NgModule({
  declarations: [],
  imports: [
    ItemsModule, ItemsRoutingModule
  ]
})
export class LazyItemsModule { }
