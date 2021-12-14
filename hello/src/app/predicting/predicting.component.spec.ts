import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictingComponent } from './predicting.component';

describe('PredictingComponent', () => {
  let component: PredictingComponent;
  let fixture: ComponentFixture<PredictingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
