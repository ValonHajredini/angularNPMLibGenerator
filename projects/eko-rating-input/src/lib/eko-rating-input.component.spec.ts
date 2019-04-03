import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkoRatingInputComponent } from './eko-rating-input.component';

describe('EkoRatingInputComponent', () => {
  let component: EkoRatingInputComponent;
  let fixture: ComponentFixture<EkoRatingInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkoRatingInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkoRatingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
