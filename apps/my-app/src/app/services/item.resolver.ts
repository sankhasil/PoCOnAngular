import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItemsService } from './items.service';

@Injectable({
  providedIn: 'root',
})
export class ItemResolver implements Resolve<any> {
  constructor(private itemsService: ItemsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // debugger;
    return this.itemsService.getItem(parseInt(route.params['itemId']));
  }
}
