import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  item! : any
  constructor(private activatedRouteSnapshot : ActivatedRouteSnapshot,private router : Router) { }

  ngOnInit(): void {
    this.item = this.activatedRouteSnapshot.data['item'];
  }
  onOkButtonClicked(){

  }
  onCancelButtonClicked(){

  }
}
