import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDeleteComponent } from './components/item-delete.component';

const routes: Routes = [
  {
    path: '',
    component: ItemDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemDeleteRoutingModule { }
