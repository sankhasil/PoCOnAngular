import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { ItemsResolver } from 'src/app/services/items.resolver';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    resolve: { items: ItemsResolver },
    children: [
      {
        path: ':itemId/delete',
        loadChildren: () =>
          import(
            './components/items/modules/lazy-item/modules/item/modules/lazy-item-delete/lazy-item-delete.module'
          ).then((m) => m.LazyItemDeleteModule),
      },
    ],
  },
  {
    path: 'create',
    loadChildren: () =>
      import(
        './components/items/modules/lazy-item/modules/item/modules/lazy-item-create/lazy-item-create.module'
      ).then((m) => m.LazyItemCreateModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ItemsRoutingModule {}
