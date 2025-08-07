import { TestBed } from '@angular/core/testing';

import { TypingEffect } from './typing-effect';

describe('TypingEffect', () => {
  let service: TypingEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingEffect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
