import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  //this is a async function
  getItems():Observable<any[]>{
    return of(items);
  }
  constructor() { }
}
