import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemViewComponent } from './components/item-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ItemViewComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class ItemViewModule { }
