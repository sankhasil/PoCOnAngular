import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss'],
})
export class ItemCreateComponent implements OnInit {
  item: any;

  constructor(private itemsService: ItemsService, private router: Router) {}

  ngOnInit(): void {}
  onSaveButtonClicked() {
    this.itemsService.createItem(this.item).subscribe({
      next: console.info,
      error: console.error,
      complete: () => this.router.navigate(['items']),
    });
  }
  onCancelButtonClicked() {
    console.log('form cleared');
    this.router.navigate(['items']);
  }
}
