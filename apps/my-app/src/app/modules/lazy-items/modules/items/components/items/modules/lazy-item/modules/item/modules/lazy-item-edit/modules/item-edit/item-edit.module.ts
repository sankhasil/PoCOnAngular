import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemEditRoutingModule } from './item-edit-routing.module';
import { ItemEditComponent } from './components/item-edit.component';



@NgModule({
  declarations: [
    ItemEditComponent
  ],
  imports: [
    CommonModule,
    ItemEditRoutingModule
  ]
})
export class ItemEditModule { }
