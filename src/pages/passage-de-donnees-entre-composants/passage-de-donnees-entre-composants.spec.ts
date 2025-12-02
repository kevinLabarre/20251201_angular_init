import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageDeDonneesEntreComposants } from './passage-de-donnees-entre-composants';

describe('PassageDeDonneesEntreComposants', () => {
  let component: PassageDeDonneesEntreComposants;
  let fixture: ComponentFixture<PassageDeDonneesEntreComposants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassageDeDonneesEntreComposants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageDeDonneesEntreComposants);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
