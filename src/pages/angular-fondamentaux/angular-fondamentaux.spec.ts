import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFondamentaux } from './angular-fondamentaux';

describe('AngularFondamentaux', () => {
  let component: AngularFondamentaux;
  let fixture: ComponentFixture<AngularFondamentaux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFondamentaux]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularFondamentaux);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
