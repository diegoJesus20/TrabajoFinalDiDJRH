import { TestBed } from '@angular/core/testing';

import { AsignaturasServiceService } from './asignaturas-service.service';

describe('AsignaturasServiceService', () => {
  let service: AsignaturasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignaturasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
