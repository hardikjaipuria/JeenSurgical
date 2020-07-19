import { TestBed } from '@angular/core/testing';

import { SytleManagerService } from './sytle-manager.service';

describe('SytleManagerService', () => {
  let service: SytleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SytleManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
