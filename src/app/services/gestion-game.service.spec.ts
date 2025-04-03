import { TestBed } from '@angular/core/testing';

import { GestionGameService } from './gestion-game.service';

describe('GestionGameService', () => {
  let service: GestionGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
