import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    this.items = this.activatedRoute.snapshot.data['items'];
    this.itemsService.itemsChanged$.subscribe({
      next: () => {
        debugger;
        this.itemsService.getItems().subscribe((res) => {
          debugger;
          this.items = res;
        });
      },
    });
  }
}
