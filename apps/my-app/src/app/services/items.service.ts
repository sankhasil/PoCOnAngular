import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items = [...items]
  public itemsChanged : Subject<void>;
  public itemsChanged$ : Observable<void>;
  constructor() {
    this.itemsChanged = new Subject<void>();
    this.itemsChanged$ = this.itemsChanged.asObservable();
    console.log("constructor")
   }
   getItem(id : number) : Observable<any>{
    return of(this.items.find((item:any)=> item.id === id));
  }
  deleteItem(id : number) : Observable<boolean>{
    console.log("Delete called");
    debugger;
    //combile item and items service .. All methods go to the one service.
    this.items = this.items.filter((item:any)=> item.id !== id)
    return of(true)
  }
  createItem(item : any) : Observable<any>{
    console.log("Save called");
    return of(item)
  }
  updateItem(item : any): Observable<any>{
    console.log("Delete called");
    return of(item)
  }
    //this is a async function
    getItems():Observable<any[]>{
      return of(this.items);
    }
}
