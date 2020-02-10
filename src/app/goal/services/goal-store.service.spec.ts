import { TestBed } from '@angular/core/testing';

import { GoalStoreService } from './goal-store.service';

describe('GoalStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoalStoreService = TestBed.get(GoalStoreService);
    expect(service).toBeTruthy();
  });
});
