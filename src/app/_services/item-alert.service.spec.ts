import { TestBed } from '@angular/core/testing';

import { ItemAlertService } from './item-alert.service';

describe('ItemAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemAlertService = TestBed.get(ItemAlertService);
    expect(service).toBeTruthy();
  });
});
