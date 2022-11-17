import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { ItemsResolver } from 'src/app/services/items.resolver';


const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    resolve: {items: ItemsResolver}
  }

  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ItemsRoutingModule { }
