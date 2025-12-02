import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantEnfantExemple2 } from './composant-enfant-exemple2';

describe('ComposantEnfantExemple2', () => {
  let component: ComposantEnfantExemple2;
  let fixture: ComponentFixture<ComposantEnfantExemple2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantEnfantExemple2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantEnfantExemple2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
