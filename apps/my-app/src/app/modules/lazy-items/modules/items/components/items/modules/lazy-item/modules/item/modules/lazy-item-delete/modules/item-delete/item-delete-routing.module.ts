import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemResolver } from 'src/app/services/item.resolver';
import { ItemDeleteComponent } from './components/item-delete.component';

const routes: Routes = [
  {
    path: '',
    component: ItemDeleteComponent,
    resolve : {item: ItemResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemDeleteRoutingModule { }
