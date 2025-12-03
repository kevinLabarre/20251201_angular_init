import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteApi } from './requete-api';

describe('RequeteApi', () => {
  let component: RequeteApi;
  let fixture: ComponentFixture<RequeteApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequeteApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequeteApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
