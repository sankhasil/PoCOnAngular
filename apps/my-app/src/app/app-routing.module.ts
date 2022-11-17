import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  loadChildren: () => import('./modules/lazy-home/lazy-home.module').then(m => m.LazyHomeModule)
},
{
  path: 'home',
  loadChildren: () => import('./modules/lazy-home/lazy-home.module').then(m => m.LazyHomeModule)
},
{
  path: 'items',
  loadChildren: () => import('./modules/lazy-items/lazy-items.module').then(m => m.LazyItemsModule)
},
{
  path: 'items/:itemId',
  loadChildren: () => import('./modules/lazy-items/modules/items/components/items/modules/lazy-item/lazy-item.module').then(m => m.LazyItemModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
