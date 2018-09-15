import { TestBed, inject } from '@angular/core/testing';

import { PopupHelpService } from './popup-help.service';

describe('PopupHelpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupHelpService]
    });
  });

  it('should be created', inject([PopupHelpService], (service: PopupHelpService) => {
    expect(service).toBeTruthy();
  }));
});
