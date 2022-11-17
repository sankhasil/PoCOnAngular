import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/items/items.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class ItemsModule { }
