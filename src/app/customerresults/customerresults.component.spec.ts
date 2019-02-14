import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerResultsComponent } from './customerresults.component';

describe('CustomerresultsComponent', () => {
  let component: CustomerResultsComponent;
  let fixture: ComponentFixture<CustomerResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
