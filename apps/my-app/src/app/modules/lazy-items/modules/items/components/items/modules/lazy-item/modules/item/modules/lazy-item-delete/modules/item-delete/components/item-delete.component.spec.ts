import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeleteComponent } from './item-delete.component';

describe('LazyItemDeleteComponent', () => {
  let component: ItemDeleteComponent;
  let fixture: ComponentFixture<ItemDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
