import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCreateComponent } from './components/item-create.component';

const routes: Routes = [{ path: '', component: ItemCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCreateRoutingModule { }
