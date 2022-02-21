import { TestBed } from '@angular/core/testing';
import { CoffeeService } from './coffee.service';
import { TestModule } from 'src/app/shared/Test/test.module';

describe('CoffeeService', () => {
  let service: CoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    });
    service = TestBed.inject(CoffeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
