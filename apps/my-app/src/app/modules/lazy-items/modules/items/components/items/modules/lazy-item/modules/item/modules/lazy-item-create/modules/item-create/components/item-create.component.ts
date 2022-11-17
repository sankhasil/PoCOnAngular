import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss'],
})
export class ItemCreateComponent implements OnInit {
  item: any;

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {}
  onSaveButtonClicked() {
    this.itemService.createItem(this.item).subscribe(
      (item: any) => {
        this.router.navigate(['items']);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  onCancelButtonClicked() {
    console.log('form cleared');
    this.router.navigate(['items']);
  }
}
