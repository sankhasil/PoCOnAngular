import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItemsService } from './items.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsResolver implements Resolve<any[]> {

  constructor(private itemsService:ItemsService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    //TODO: resolver not called when delete or edit or in create
    return this.itemsService.getItems();
  }

}
