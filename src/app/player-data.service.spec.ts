import { TestBed, inject } from '@angular/core/testing';

import { PlayerDataService } from './player-data.service';

describe('PlayerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerDataService]
    });
  });

  it('should be created', inject([PlayerDataService], (service: PlayerDataService) => {
    expect(service).toBeTruthy();
  }));
});
