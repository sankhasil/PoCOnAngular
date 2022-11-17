import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemViewComponent } from './components/item-view.component';

const routes: Routes = [
  {
    path: '',
    component: ItemViewComponent,
    children:[{

        path: 'delete',
        loadChildren: ()=>import('../../../lazy-item-delete/lazy-item-delete.module').then(m=> m.LazyItemDeleteModule)

    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemViewRoutingModule { }
