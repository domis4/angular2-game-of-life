/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FpsControllerService } from './fps-controller.service';

describe('FpsControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FpsControllerService]
    });
  });

  it('should ...', inject([FpsControllerService], (service: FpsControllerService) => {
    expect(service).toBeTruthy();
  }));
});
