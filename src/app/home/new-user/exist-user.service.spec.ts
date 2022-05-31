import { TestBed } from '@angular/core/testing';

import { ExistUserService } from './exist-user.service';

describe('ExistUserService', () => {
  let service: ExistUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
