import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductWithControls } from './add-product-with-controls';

describe('AddProductWithControls', () => {
  let component: AddProductWithControls;
  let fixture: ComponentFixture<AddProductWithControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductWithControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductWithControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
