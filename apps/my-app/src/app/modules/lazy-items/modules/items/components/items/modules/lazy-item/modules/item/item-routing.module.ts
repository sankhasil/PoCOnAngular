import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemResolver } from 'src/app/services/item.resolver';



const routes: Routes = [
  {
    path: '',
    component: ItemComponent,
    resolve : {item : ItemResolver}
  }

  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ItemRoutingModule { }
