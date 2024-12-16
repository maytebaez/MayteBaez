import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpClientTestingModule  } from '@angular/common/http/testing';
import { BankProductsService } from './bank-products.service';

describe('BankProductsService', () => {
  let service: BankProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [provideHttpClientTesting]
    });
    service = TestBed.inject(BankProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
