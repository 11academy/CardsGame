import { TestBed } from '@angular/core/testing';

import { StanzaService } from './stanza.service';

describe('StanzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StanzaService = TestBed.get(StanzaService);
    expect(service).toBeTruthy();
  });
});
