import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeStrengthCalculator } from './relative-strength-calculator';

describe('RelativeStrengthCalculator', () => {
  let component: RelativeStrengthCalculator;
  let fixture: ComponentFixture<RelativeStrengthCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelativeStrengthCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelativeStrengthCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
