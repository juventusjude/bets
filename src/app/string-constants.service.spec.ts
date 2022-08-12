import { TestBed } from '@angular/core/testing';

import { StringConstantsService } from './string-constants.service';

describe('StringConstantsService', () => {
  let service: StringConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
