import { TestBed } from '@angular/core/testing';

import { SearchServService } from './search-serv.service';

describe('SearchServService', () => {
  let service: SearchServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
