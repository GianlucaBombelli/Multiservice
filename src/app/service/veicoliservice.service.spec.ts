import { TestBed } from '@angular/core/testing';

import { VeicoliserviceService } from './veicoliservice.service';

describe('VeicoliserviceService', () => {
  let service: VeicoliserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeicoliserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
