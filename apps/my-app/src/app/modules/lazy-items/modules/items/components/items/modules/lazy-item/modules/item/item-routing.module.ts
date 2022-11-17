import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemResolver } from 'src/app/services/item.resolver';



const routes: Routes = [
  {
    path: '',
    component: ItemComponent,
    resolve : {item : ItemResolver},
    children: [
      {
        path: 'edit',
        loadChildren: ()=>import('./modules/lazy-item-edit/lazy-item-edit.module').then(m=> m.LazyItemEditModule)

      },
      {
        path: 'delete',
        loadChildren: ()=>import('./modules/lazy-item-delete/lazy-item-delete.module').then(m=> m.LazyItemDeleteModule)
      },
      {
        path: 'view',
        loadChildren: ()=>import('./modules/lazy-item-view/lazy-view-edit.module').then(m=> m.LazyItemViewModule)
      },
      {
        path: 'create',
        loadChildren: ()=>import('./modules/lazy-item-create/lazy-item-create.module').then(m=> m.LazyItemCreateModule)
      }
    ]
  }

  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ItemRoutingModule { }
