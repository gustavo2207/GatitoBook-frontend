import { TestBed } from '@angular/core/testing';

import { AnimalsListResolver } from './animals-list.resolver';

describe('AnimalsListResolver', () => {
  let resolver: AnimalsListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AnimalsListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
