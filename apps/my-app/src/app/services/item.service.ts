import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getItem(id : number) : Observable<any>{
    return of(items.find((item:any)=> item.id === id));
  }
  deleteItem(id : number) : Observable<boolean>{
    return of(true)
  }
  createItem(item : any) : Observable<any>{
    console.log("Save called");
    return of(item)
  }
  updateItem(item : any): Observable<any>{
    return of(item)
  }
}
