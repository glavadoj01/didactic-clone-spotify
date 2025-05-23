import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchServService } from './search-serv.service';

describe('SearchServService', () => {
  let service: SearchServService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SearchServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
