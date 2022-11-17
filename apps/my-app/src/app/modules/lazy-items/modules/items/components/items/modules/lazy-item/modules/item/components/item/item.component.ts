import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item!: any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.item=this.activatedRoute.snapshot.data['item'];
  }

}
