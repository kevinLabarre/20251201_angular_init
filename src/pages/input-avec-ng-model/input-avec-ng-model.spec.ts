import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAvecNgModel } from './input-avec-ng-model';

describe('InputAvecNgModel', () => {
  let component: InputAvecNgModel;
  let fixture: ComponentFixture<InputAvecNgModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAvecNgModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAvecNgModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
