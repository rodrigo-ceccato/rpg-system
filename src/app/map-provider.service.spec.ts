import { TestBed, inject } from '@angular/core/testing';

import { MapProviderService } from './map-provider.service';

describe('MapProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapProviderService]
    });
  });

  it('should be created', inject([MapProviderService], (service: MapProviderService) => {
    expect(service).toBeTruthy();
  }));
});
