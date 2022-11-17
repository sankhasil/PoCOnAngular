import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemEditComponent } from './components/item-edit.component';

const routes: Routes = [{ path: '', component: ItemEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemEditRoutingModule { }
