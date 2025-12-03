import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceFruits } from './exercice-fruits';

describe('ExerciceFruits', () => {
  let component: ExerciceFruits;
  let fixture: ComponentFixture<ExerciceFruits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceFruits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceFruits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
