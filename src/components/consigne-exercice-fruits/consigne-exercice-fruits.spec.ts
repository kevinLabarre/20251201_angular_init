import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneExerciceFruits } from './consigne-exercice-fruits';

describe('ConsigneExerciceFruits', () => {
  let component: ConsigneExerciceFruits;
  let fixture: ComponentFixture<ConsigneExerciceFruits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsigneExerciceFruits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigneExerciceFruits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
