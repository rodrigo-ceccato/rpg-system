import { TestBed, inject } from '@angular/core/testing';

import { DiceLogicService } from './dice-logic.service';

describe('DiceLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiceLogicService]
    });
  });

  it('should be created', inject([DiceLogicService], (service: DiceLogicService) => {
    expect(service).toBeTruthy();
  }));
});
