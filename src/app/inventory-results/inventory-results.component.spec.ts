import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryResultsComponent } from './inventory-results.component';

describe('InventoryResultsComponent', () => {
  let component: InventoryResultsComponent;
  let fixture: ComponentFixture<InventoryResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
