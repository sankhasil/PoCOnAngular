import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemResolver } from 'src/app/services/item.resolver';
import { ItemEditComponent } from './components/item-edit.component';

const routes: Routes = [
  { path: '', component: ItemEditComponent, resolve: { item: ItemResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemEditRoutingModule {}
