import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectEtComputed } from './effect-et-computed';

describe('EffectEtComputed', () => {
  let component: EffectEtComputed;
  let fixture: ComponentFixture<EffectEtComputed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectEtComputed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectEtComputed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
