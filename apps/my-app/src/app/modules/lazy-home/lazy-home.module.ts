import { NgModule } from '@angular/core';

import { HomeModule } from './modules/home/home.module';
import { HomeRoutingModule } from './modules/home/home-routing.module';



@NgModule({
  declarations: [],
  imports: [
    HomeModule,HomeRoutingModule
  ]
})
export class LazyHomeModule { }
