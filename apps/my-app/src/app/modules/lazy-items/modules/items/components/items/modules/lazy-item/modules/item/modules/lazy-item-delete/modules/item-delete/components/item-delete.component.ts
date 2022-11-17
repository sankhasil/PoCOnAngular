import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.scss'],
})
export class ItemDeleteComponent implements OnInit {
  item! : any
  constructor(
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private itemsService : ItemsService
  ) {}

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.data['item']

  }

  onOkButtonClicked() {
    this.itemsService.deleteItem(this.item.id).subscribe({
      next: console.info,
      error: console.error,
      complete: () => {
        this.itemsService.itemsChanged.next();
        this.router.navigate(['items']);
      }
    });
  }
  onCancelButtonClicked() {
    console.log('form cleared');
    this.router.navigate(['items']);
  }
}
