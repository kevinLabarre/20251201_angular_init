import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindDesProprietesEtEvenements } from './bind-des-proprietes-et-evenements';

describe('BindDesProprietesEtEvenements', () => {
  let component: BindDesProprietesEtEvenements;
  let fixture: ComponentFixture<BindDesProprietesEtEvenements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindDesProprietesEtEvenements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindDesProprietesEtEvenements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
